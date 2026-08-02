import React from 'react'
import { Document, Page, StyleSheet } from '@react-pdf/renderer'
import type { ResumeDoc } from '@/lib/resume/to-resume-doc'
import { theme } from './theme'

const styles = StyleSheet.create({
  page: {
    paddingTop: theme.space.page,
    paddingBottom: theme.space.page,
    paddingHorizontal: theme.space.page,
    fontFamily: theme.font.family,
    fontSize: theme.size.body,
    color: theme.color.text,
    backgroundColor: '#FFFFFF',
  },
})

export function ResumeDocument({
  doc,
  layout: Layout,
}: {
  doc: ResumeDoc
  layout: React.ComponentType<{ doc: ResumeDoc }>
}) {
  return (
    <Document
      title={`${doc.name} - ${doc.title}`}
      author={doc.name}
      subject={`${doc.title} resume`}
      creator={doc.name}
      producer={doc.name}
      keywords={doc.skills.flatMap((group) => group.items).join(', ')}
      language="en"
    >
      <Page size="A4" style={styles.page}>
        <Layout doc={doc} />
      </Page>
    </Document>
  )
}
