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
      cmd: 'whoami --info',
      output: (
        <>
          <span className="text-[#55f89f] font-bold">Andre Chandra</span>
          <br />
          <span className="text-gray-300">
            Full-Stack Developer | Jakarta, Indonesia
          </span>
        </>
      ),
    },
    {
      cmd: 'contact --email',
      output: (
        <>
          <span className="text-blue-400">andrechandra.work@gmail.com</span>
        </>
      ),
    },
    {
      cmd: 'availability --status',
      output: (
        <>
          <span className="text-green-400 font-bold">
            Available for freelance projects
          </span>
          <br />
          <span className="text-gray-300">
            Open to discussing new opportunities
          </span>
        </>
      ),
    },
    {
      cmd: 'quote --random',
      output: (
        <>
          <span className="text-blue-400 font-bold">
            "The best error message is the one that never shows up."
          </span>
          <br />
          <span className="text-gray-300">— Thomas Fuchs</span>
        </>
      ),
    },
    {
      cmd: 'hobbies --list',
      output: (
        <>
          <span className="text-purple-400">🎮 Badminton</span> •
          <span className="text-green-400"> 📚 Bible Reading</span> •
          <span className="text-yellow-400"> 🏊‍♂️ Church Activities</span> •
          <span className="text-blue-400"> 🎵 Music OFC</span>
        </>
      ),
    },
    {
      cmd: 'dog --summon',
      output: (
        <>
          <pre className="text-yellow-400">
            {`
 ⢠⣶⣤⣀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣠⠖⢶⡆⠀⠀⠀⠀
⠀⠸⡇⠀⠈⠳⣄⠀⠀⠀⠀⠀⠀⠀⠀⢀⡜⠁⠀⠸⡄⠀⠀⠀⠀
⠀⢸⡇⠀⠀⠀⠘⣦⠀⠀⢀⣀⣀⡀⠀⣾⠀⢀⣀⠀⠹⡀⠀⠀⠀
⠀⠈⣇⠀⠀⣠⡄⣿⣶⣿⣿⣿⣿⣿⣿⣿⡇⢻⣿⠀⢠⡇⠀⠀⠀
⠀⠀⢻⠂⠀⢿⡧⣽⣿⣿⡟⠁⢻⣿⣿⣿⠉⣶⣅⢀⡤⠃⠀⠀⠀
⠀⠀⠀⠙⠲⢿⣷⣿⡿⢿⣇⠀⢸⡿⠿⣿⣷⣿⡟⠉⠀⠀⠀⠀⠀
⠀⣠⣤⣤⠀⠈⣿⣯⣶⣼⣿⠆⣿⣧⣾⣶⣿⢿⠀⠀⢀⣀⣀⠀⠀
⡾⣯⣿⣬⡟⡆⢙⢯⣭⠟⠉⠀⠈⠛⢷⣿⡞⠸⢀⡞⣿⣹⡟⣷⡄
⠚⠛⠒⠚⠓⠓⠚⠢⡁⠀⣔⡒⣶⠀⢀⠀⣰⠓⠚⠓⠛⠛⠛⠓⠃
⠀⠀⠀⠀⠀⠀⠀⠀⠑⠦⡙⠷⠉⢐⡠⠚⠁⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠉⠉⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
            `}
          </pre>
          <span className="text-gray-300">Chivas & Berry have appeared!</span>
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
        setTerminalState('open')
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
      setTerminalState('open')
    }
  }

  const handleReopenTerminal = () => {
    setTerminalState('open')
    setTerminalHistory([])
    setCommandHistory([])
    setHistoryIndex(-1)
  }

  return (
    <div className="w-full flex justify-center lg:justify-center items-center">
      {terminalState === 'closed' ? (
        <motion.button
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3 }}
          className="p-4 shadow-lg bg-black text-[#55f89f] border border-[#215237] rounded-none transition-all duration-300 hover:border-[#55f89f] z-10 font-geist"
          onClick={handleReopenTerminal}
        >
          <Terminal className="w-6 h-6 mb-2 mx-auto" />
          <span className="text-sm font-roboto_mono">Open Terminal</span>
        </motion.button>
      ) : (
        <>
          {terminalState === 'maximized' && (
            <div
              className="fixed inset-0 bg-black bg-opacity-80 z-40"
              onClick={() => setTerminalState('open')}
            />
          )}

          {terminalState === 'maximized' ? (
            <div
              className="fixed inset-0 flex items-center justify-center z-50"
              onClick={(e) => {
                if (e.target === e.currentTarget) {
                  setTerminalState('open')
                } else {
                  focusTerminal()
                }
              }}
            >
              <div className="w-4/5 max-w-4xl">
                <div className="terminal-window flex flex-col">
                  <div className="terminal-header cursor-move flex-shrink-0">
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
                        title="Exit Full Screen"
                      ></button>
                    </div>
                    <div className="terminal-title font-roboto_mono truncate">
                      andrechandra@dev: ~/andrechandra-portfolio (Full Screen)
                    </div>
                  </div>
                  <div
                    className="terminal-body overflow-y-auto scrollbar-thin scrollbar-thumb-gray-700 scrollbar-track-gray-900 flex-grow"
                    ref={terminalBodyRef}
                    style={{
                      height: '70vh',
                      maxHeight: 'calc(80vh - 30px)',
                      overflowY: 'auto',
                      scrollBehavior: 'smooth',
                    }}
                  >
                    {terminalHistory.length === 0 && (
                      <div className="terminal-welcome mb-2">
                        <p className="text-[#55f89f]">
                          Welcome to Andre's Terminal!
                        </p>
                        <p className="text-gray-400">
                          Type 'help' to see available commands.
                        </p>
                      </div>
                    )}

                    {terminalHistory.map((entry, index) => (
                      <div key={index} className="mb-4">
                        <div className="terminal-line">
                          <span className="terminal-prompt font-roboto_mono">
                            $
                          </span>{' '}
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
                      <span className="terminal-prompt font-roboto_mono">
                        $
                      </span>{' '}
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
                      }}
                    />
                  </div>
                </div>
              </div>
            </div>
          ) : (
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3 }}
              viewport={{ once: true }}
              className={`relative terminal-container w-full ${
                terminalState === 'minimized' ? 'terminal-minimized' : ''
              }`}
              onClick={focusTerminal}
              style={{
                maxWidth: '500px',
              }}
            >
              <div
                className={`terminal-window ${
                  terminalState === 'minimized'
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
                      title="Full Screen"
                    ></button>
                  </div>
                  <div className="terminal-title font-roboto_mono truncate">
                    andrechandra@dev: ~/andrechandra-portfolio
                  </div>
                </div>
                <div
                  className={`terminal-body overflow-y-auto scrollbar-thin scrollbar-thumb-gray-700 scrollbar-track-gray-900 ${
                    terminalState === 'minimized' ? 'hidden' : ''
                  }`}
                  ref={terminalBodyRef}
                  style={{
                    height: '320px',
                    overflowY: 'auto',
                    scrollBehavior: 'smooth',
                  }}
                >
                  {terminalHistory.length === 0 && (
                    <div className="terminal-welcome mb-2">
                      <p className="text-[#55f89f]">
                        Welcome to Andre's Terminal!
                      </p>
                      <p className="text-gray-400">
                        Type 'help' to see available commands.
                      </p>
                    </div>
                  )}

                  {terminalHistory.map((entry, index) => (
                    <div key={index} className="mb-4">
                      <div className="terminal-line">
                        <span className="terminal-prompt font-roboto_mono">
                          $
                        </span>{' '}
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
        </>
      )}
    </div>
  )
}
