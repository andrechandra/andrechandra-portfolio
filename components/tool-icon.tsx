import {
  SiNextdotjs as NextjsIcon,
  SiTailwindcss as TailwindIcon,
  SiShadcnui as ShadcnIcon,
  SiHtml5 as HtmlIcon,
  SiJavascript as JavascriptIcon,
  SiTypescript as TypescriptIcon,
  SiReact as ReactIcon,
  SiCss3 as CssIcon,
  SiSass as SassIcon,
  SiFigma as FigmaIcon,
  SiUnity as UnityIcon,
  SiPhp as PhpIcon,
  SiClerk,
  SiPrisma,
  SiPostgresql,
  SiIonic,
  SiCapacitor,
  SiNotion,
} from 'react-icons/si'
export const ToolIcon = ({ tool }: { tool: string }) => {
  switch (tool.toLowerCase()) {
    case 'nextjs':
      return <NextjsIcon className="h-5 w-5" />
    case 'tailwindcss':
      return <TailwindIcon className="h-5 w-5" />
    case 'shadcn':
      return <ShadcnIcon className="h-5 w-5" />
    case 'html':
      return <HtmlIcon className="h-5 w-5" />
    case 'javascript':
      return <JavascriptIcon className="h-5 w-5" />
    case 'typescript':
      return <TypescriptIcon className="h-5 w-5" />
    case 'react':
      return <ReactIcon className="h-5 w-5" />
    case 'css':
      return <CssIcon className="h-5 w-5" />
    case 'sass':
      return <SassIcon className="h-5 w-5" />
    case 'figma':
      return <FigmaIcon className="h-5 w-5" />
    case 'unity':
      return <UnityIcon className="h-5 w-5" />
    case 'php':
      return <PhpIcon className="h-5 w-5" />
    case 'clerk':
      return <SiClerk className="h-5 w-5" />
    case 'prisma':
      return <SiPrisma className="h-5 w-5" />
    case 'postgres':
      return <SiPostgresql className="h-5 w-5" />
    case 'ionic':
      return <SiIonic className="h-5 w-5" />
    case 'capacitor':
      return <SiCapacitor className="h-5 w-5" />
    case 'notion':
      return <SiNotion className="h-5 w-5" />
    default:
      return null
  }
}
