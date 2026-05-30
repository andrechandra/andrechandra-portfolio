import { remark } from 'remark'
import remarkHtml from 'remark-html'

export function markdownToHtml(markdown: string): string {
  const result = remark().use(remarkHtml, { sanitize: false }).processSync(markdown)
  return result.toString()
}
