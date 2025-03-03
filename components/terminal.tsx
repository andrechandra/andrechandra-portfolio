import { motion } from 'framer-motion'
import { useEffect, useState, useRef } from 'react'
import { Terminal } from 'lucide-react'
import React from 'react'

type CommandOutput = React.ReactNode | string

interface CommandData {
  cmd: string
  output: CommandOutput
}

interface HistoryEntry {
  command: string
  output: CommandOutput
}

export default function TerminalSection() {
  const [userInput, setUserInput] = useState<string>('')
  const [terminalHistory, setTerminalHistory] = useState<HistoryEntry[]>([])
  const [commandHistory, setCommandHistory] = useState<string[]>([])
  const [historyIndex, setHistoryIndex] = useState<number>(-1)
  const [terminalState, setTerminalState] = useState<
    'open' | 'minimized' | 'maximized' | 'closed'
  >('open')
  const terminalInputRef = useRef<HTMLInputElement>(null)
  const terminalBodyRef = useRef<HTMLDivElement>(null)
  const [previousTerminalState, setPreviousTerminalState] = useState<
    'open' | 'minimized' | 'maximized'
  >('open')

  const commands: CommandData[] = [
    {
      cmd: 'cat sugar-levels.txt',
      output:
        'WARNING: Cookie intake approaching critical levels. \nDiabetes risk: ELEVATED 🍪',
    },
    {
      cmd: 'ls ~/secret-snack-stash/',
      output: (
        <>
          <span className="text-blue-400">chocolate-chips.jar</span>{' '}
          <span className="text-yellow-400">emergency-donuts.box</span>{' '}
          <span className="text-green-400">hidden-gummies.bag</span>
        </>
      ),
    },
    {
      cmd: 'sudo ask-dogs-for-advice',
      output: (
        <>
          <span className="text-blue-400">Chivas:</span> "Refactor that code."
          <br />
          <span className="text-pink-400">Berry:</span> "Add more treats to the
          algorithm."
        </>
      ),
    },
    {
      cmd: 'git blame --sweet-tooth',
      output: (
        <>
          <div className="text-yellow-400">sugar123</div>{' '}
          <span>Added too many cookies to the cookie jar</span>
          <br />
          <div className="text-yellow-400">candyman</div>{' '}
          <span>Implemented cake-based authentication</span>
          <br />
          <div className="text-yellow-400">chocolover</div>{' '}
          <span>Deployed brownies to production</span>
        </>
      ),
    },
    {
      cmd: './calculate-excuses-for-dessert.sh',
      output: (
        <>
          <span className="text-red-500">Monday:</span> "It's the start of the
          week"
          <br />
          <span className="text-orange-500">Tuesday:</span> "Survived Monday"
          <br />
          <span className="text-yellow-500">Wednesday:</span> "Halfway there!"
          <br />
          <span className="text-green-500">Thursday:</span> "Almost Friday!"
          <br />
          <span className="text-blue-500">Friday:</span> "It's the weekend!"
          <br />
          <span className="text-purple-500">Saturday:</span> "Time to Bible
          Study!"
          <br />
          <span className="text-pink-500">Sunday:</span> "Time to go to Church!"
        </>
      ),
    },
  ]

  const scrollToBottom = () => {
    if (terminalBodyRef.current) {
      terminalBodyRef.current.scrollTop = terminalBodyRef.current.scrollHeight
    }
  }

  const processCommand = (cmd: string) => {
    let output: CommandOutput

    if (cmd === 'help') {
      output = (
        <div className="text-gray-300">
          <p className="text-[#55f89f] mb-2">Available commands:</p>
          {commands.map((command, index) => (
            <div key={index} className="mb-1">
              <span className="text-yellow-400">{command.cmd}</span>
            </div>
          ))}
          <div className="mb-1">
            <span className="text-yellow-400">help</span> - Display this help
            message
          </div>
          <div className="mb-1">
            <span className="text-yellow-400">clear</span> - Clear the terminal
          </div>
        </div>
      )
    } else if (cmd === 'clear') {
      setTerminalHistory([])
      return
    } else {
      const foundCommand = commands.find((command) => command.cmd === cmd)
      if (foundCommand) {
        output = foundCommand.output
      } else {
        output = (
          <span className="text-red-400">
            Command not found: {cmd}. Type 'help' for available commands.
          </span>
        )
      }
    }

    setTerminalHistory((prev: HistoryEntry[]) => [
      ...prev,
      { command: cmd, output: output },
    ])

    setTimeout(scrollToBottom, 0)
  }

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      e.preventDefault()
      const command = userInput.trim()
      if (command) {
        processCommand(command)
        setCommandHistory((prev) => [command, ...prev])
        setHistoryIndex(-1)
        setUserInput('')
        setTimeout(scrollToBottom, 50)
      }
    } else if (e.key === 'ArrowUp') {
      e.preventDefault()

      if (commandHistory.length > 0) {
        const newIndex =
          historyIndex < commandHistory.length - 1
            ? historyIndex + 1
            : historyIndex
        setHistoryIndex(newIndex)
        setUserInput(commandHistory[newIndex])
      }
    } else if (e.key === 'ArrowDown') {
      e.preventDefault()

      if (historyIndex > 0) {
        const newIndex = historyIndex - 1
        setHistoryIndex(newIndex)
        setUserInput(commandHistory[newIndex])
      } else if (historyIndex === 0) {
        setHistoryIndex(-1)
        setUserInput('')
      }
    }
  }

  const focusTerminal = () => {
    if (terminalInputRef.current) {
      terminalInputRef.current.focus()
    }
  }

  useEffect(() => {
    scrollToBottom()
  }, [terminalHistory])

  useEffect(() => {
    const handleGlobalKeyPress = () => {
      if (
        document.activeElement !== terminalInputRef.current &&
        terminalState !== 'closed'
      ) {
        terminalInputRef.current?.focus()
      }
    }

    window.addEventListener('keypress', handleGlobalKeyPress)
    return () => {
      window.removeEventListener('keypress', handleGlobalKeyPress)
    }
  }, [terminalState])

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && terminalState === 'maximized') {
        setTerminalState(
          previousTerminalState === 'maximized' ? 'open' : previousTerminalState
        )
      }
    }

    window.addEventListener('keydown', handleKeyDown)
    return () => {
      window.removeEventListener('keydown', handleKeyDown)
    }
  }, [terminalState, previousTerminalState])

  useEffect(() => {
    if (terminalInputRef.current && historyIndex >= 0) {
      const length = terminalInputRef.current.value.length
      setTimeout(() => {
        terminalInputRef.current?.setSelectionRange(length, length)
      }, 0)
    }
  }, [historyIndex])

  useEffect(() => {
    if (terminalBodyRef.current) {
      terminalBodyRef.current.scrollTop = terminalBodyRef.current.scrollHeight
    }
  }, [terminalHistory])

  const handleCloseTerminal = (e: React.MouseEvent) => {
    e.stopPropagation()
    setTerminalState('closed')
  }

  const handleMinimizeTerminal = (e: React.MouseEvent) => {
    e.stopPropagation()
    if (terminalState !== 'minimized') {
      setPreviousTerminalState(
        terminalState === 'closed' ? 'open' : terminalState
      )
      setTerminalState('minimized')
    } else {
      setTerminalState(previousTerminalState)
    }
  }

  const handleMaximizeTerminal = (e: React.MouseEvent) => {
    e.stopPropagation()
    if (terminalState !== 'maximized') {
      setPreviousTerminalState(
        terminalState === 'closed' ? 'open' : terminalState
      )
      setTerminalState('maximized')
    } else {
      setTerminalState(previousTerminalState)
    }
  }

  const handleReopenTerminal = () => {
    setTerminalState('open')
    setTerminalHistory([])
    setCommandHistory([])
    setHistoryIndex(-1)
  }

  return (
    <div className="w-full lg:w-1/3 mt-8 md:mt-12 lg:mt-0 flex justify-center lg:justify-center items-center">
      {terminalState === 'closed' ? (
        <motion.button
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3 }}
          className="p-4  shadow-lg bg-black text-[#55f89f] border border-[#215237] rounded-none transition-all duration-300 hover:border-[#55f89f] z-10 font-geist"
          onClick={handleReopenTerminal}
        >
          <Terminal className="w-6 h-6 mb-2 mx-auto" />
          <span className="text-sm font-roboto_mono">Open Terminal</span>
        </motion.button>
      ) : (
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.3 }}
          viewport={{ once: true }}
          className={`relative terminal-container w-full ${
            terminalState === 'maximized'
              ? 'fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-80 p-4'
              : ''
          } ${terminalState === 'minimized' ? 'terminal-minimized' : ''}`}
          onClick={focusTerminal}
          style={{
            maxWidth: terminalState === 'maximized' ? '100%' : '500px',
          }}
        >
          <div
            className={`terminal-window ${
              terminalState === 'maximized'
                ? 'w-11/12 h-5/6 max-w-full max-h-screen'
                : terminalState === 'minimized'
                  ? 'terminal-minimized-window'
                  : ''
            }`}
          >
            <div className="terminal-header cursor-move">
              <div className="terminal-buttons">
                <button
                  className="terminal-button close"
                  onClick={handleCloseTerminal}
                  title="Close"
                ></button>
                <button
                  className="terminal-button minimize"
                  onClick={handleMinimizeTerminal}
                  title="Minimize"
                ></button>
                <button
                  className="terminal-button maximize"
                  onClick={handleMaximizeTerminal}
                  title={
                    terminalState === 'maximized'
                      ? 'Exit Full Screen'
                      : 'Full Screen'
                  }
                ></button>
              </div>
              <div className="terminal-title font-roboto_mono truncate">
                andrechandra@dev: ~/andrechandra-portfolio{' '}
                {terminalState === 'maximized' ? '(Full Screen)' : ''}
              </div>
            </div>
            <div
              className={`terminal-body overflow-y-auto scrollbar-thin scrollbar-thumb-gray-700 scrollbar-track-gray-900 ${
                terminalState === 'minimized' ? 'hidden' : ''
              }`}
              ref={terminalBodyRef}
              style={{
                height:
                  terminalState === 'maximized' ? 'calc(100% - 30px)' : '320px',
                overflowY: 'auto',
                scrollBehavior: 'smooth',
              }}
            >
              {terminalHistory.length === 0 && (
                <div className="terminal-welcome mb-2">
                  <p className="text-[#55f89f]">Welcome to Andre's Terminal!</p>
                  <p className="text-gray-400">
                    Type 'help' to see available commands.
                  </p>
                </div>
              )}

              {terminalHistory.map((entry, index) => (
                <div key={index} className="mb-4">
                  <div className="terminal-line">
                    <span className="terminal-prompt font-roboto_mono">$</span>{' '}
                    <span className="terminal-command font-roboto_mono">
                      {entry.command}
                    </span>
                  </div>
                  <div className="terminal-output font-roboto_mono mt-1">
                    {entry.output}
                  </div>
                </div>
              ))}

              <div className="terminal-line">
                <span className="terminal-prompt font-roboto_mono">$</span>{' '}
                <span className="terminal-command font-roboto_mono">
                  {userInput}
                </span>
                <span className="terminal-caret"></span>
              </div>

              <input
                ref={terminalInputRef}
                type="text"
                className="terminal-hidden-input"
                value={userInput}
                onChange={(e) => setUserInput(e.target.value)}
                onKeyDown={handleKeyDown}
                autoCorrect="off"
                autoCapitalize="off"
                autoComplete="off"
                spellCheck="false"
                autoFocus
                aria-label="Terminal command input"
                style={{
                  position: 'absolute',
                  opacity: 0,
                  pointerEvents: 'none',
                  display: terminalState === 'minimized' ? 'none' : 'block',
                }}
              />
            </div>
          </div>
        </motion.div>
      )}
    </div>
  )
}
