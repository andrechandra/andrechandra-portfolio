import React from 'react'
import { Link, StyleSheet, Text, View } from '@react-pdf/renderer'
import type { ResumeDoc } from '@/lib/resume/to-resume-doc'
import { theme } from './theme'

const styles = StyleSheet.create({
  header: { marginBottom: theme.space.section },
  name: {
    fontSize: theme.size.name,
    fontWeight: 700,
    color: theme.color.text,
    letterSpacing: -0.4,
  },
  title: {
    fontSize: theme.size.title,
    fontWeight: 500,
    color: theme.color.accent,
    marginTop: 3,
  },
  contactRow: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginTop: 7,
    gap: 0,
  },
  contactItem: {
    fontSize: theme.size.meta,
    color: theme.color.muted,
  },
  contactSep: {
    fontSize: theme.size.meta,
    color: theme.color.faint,
    marginHorizontal: 1,
  },
  availability: {
    fontSize: theme.size.meta,
    color: theme.color.text,
    marginTop: 6,
    fontWeight: 500,
  },
  summary: {
    fontSize: theme.size.body,
    color: theme.color.text,
    lineHeight: theme.lineHeight.body,
    marginTop: 8,
  },

  section: { marginTop: theme.space.section },
  sectionHeading: {
    fontSize: theme.size.section,
    fontWeight: 700,
    textTransform: 'uppercase',
    color: theme.color.accent,
  },
  rule: {
    height: 1,
    backgroundColor: theme.color.rule,
    marginTop: 3,
    marginBottom: theme.space.entry,
  },

  entry: { marginBottom: theme.space.entry },
  entryHead: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
  },
  entryTitle: {
    fontSize: theme.size.role,
    fontWeight: 600,
    color: theme.color.text,
    flexShrink: 1,
    paddingRight: 10,
  },
  entryDates: {
    fontSize: theme.size.meta,
    color: theme.color.muted,
    fontWeight: 500,
  },
  entryMeta: {
    fontSize: theme.size.meta,
    color: theme.color.muted,
    marginTop: 1.5,
  },

  bulletRow: { flexDirection: 'row', marginTop: theme.space.line },
  bulletMark: {
    fontSize: theme.size.body,
    color: theme.color.faint,
    width: 9,
    lineHeight: theme.lineHeight.body,
  },
  bulletText: {
    fontSize: theme.size.body,
    color: theme.color.text,
    lineHeight: theme.lineHeight.body,
    flex: 1,
  },

  skillRow: { flexDirection: 'row', marginBottom: 4 },
  skillLabel: {
    fontSize: theme.size.body,
    fontWeight: 600,
    color: theme.color.text,
    width: 92,
  },
  skillItems: {
    fontSize: theme.size.body,
    color: theme.color.text,
    flex: 1,
    lineHeight: theme.lineHeight.body,
  },

  link: { color: theme.color.muted, textDecoration: 'none' },
  footer: {
    position: 'absolute',
    bottom: 18,
    left: theme.space.page,
    right: theme.space.page,
    fontSize: theme.size.small,
    color: theme.color.faint,
    textAlign: 'center',
  },
})

function Section({
  heading,
  children,
}: {
  heading: string
  children: React.ReactNode
}) {
  return (
    <View style={styles.section}>
      <Text style={styles.sectionHeading}>{heading}</Text>
      <View style={styles.rule} />
      {children}
    </View>
  )
}

function Bullet({ children }: { children: string }) {
  return (
    <View style={styles.bulletRow} wrap={false}>
      <Text style={styles.bulletMark}>•</Text>
      <Text style={styles.bulletText}>{children}</Text>
    </View>
  )
}

export function LayoutAts({ doc }: { doc: ResumeDoc }) {
  return (
    <>
      <View style={styles.header}>
        <Text style={styles.name}>{doc.name}</Text>
        <Text style={styles.title}>{doc.title}</Text>

        <View style={styles.contactRow}>
          {doc.contacts.map((contact, index) => (
            <React.Fragment key={contact.id}>
              {index > 0 ? <Text style={styles.contactSep}> · </Text> : null}
              {contact.href ? (
                <Link src={contact.href} style={styles.link}>
                  <Text style={styles.contactItem}>{contact.value}</Text>
                </Link>
              ) : (
                <Text style={styles.contactItem}>{contact.value}</Text>
              )}
            </React.Fragment>
          ))}
        </View>

        <Text style={styles.availability}>{doc.availabilityLine}</Text>
        <Text style={styles.summary}>{doc.summary}</Text>
      </View>

      <Section heading="Experience">
        {doc.roles.map((role) => (
          <View key={role.id} style={styles.entry} wrap={false}>
            <View style={styles.entryHead}>
              <Text style={styles.entryTitle}>
                {role.role}, {role.organization}
              </Text>
              <Text style={styles.entryDates}>{role.dates}</Text>
            </View>
            <Text style={styles.entryMeta}>{role.meta}</Text>
            {role.bullets.map((bullet, index) => (
              <Bullet key={index}>{bullet}</Bullet>
            ))}
          </View>
        ))}
      </Section>

      <Section heading="Skills">
        {doc.skills.map((group) => (
          <View key={group.id} style={styles.skillRow}>
            <Text style={styles.skillLabel}>{group.label}</Text>
            <Text style={styles.skillItems}>{group.items.join(', ')}</Text>
          </View>
        ))}
        <View style={styles.skillRow}>
          <Text style={styles.skillLabel}>Spoken</Text>
          <Text style={styles.skillItems}>{doc.languages.join(', ')}</Text>
        </View>
      </Section>

      <Section heading="Education">
        {doc.education.map((entry) => (
          <View key={entry.id} style={styles.entry} wrap={false}>
            <View style={styles.entryHead}>
              <Text style={styles.entryTitle}>{entry.institution}</Text>
              <Text style={styles.entryDates}>{entry.dates}</Text>
            </View>
            <Text style={styles.entryMeta}>
              {entry.degree}
              {entry.grade ? ` · ${entry.grade}` : ''}
            </Text>
          </View>
        ))}
      </Section>

      <Text
        style={styles.footer}
        render={({ pageNumber, totalPages }) =>
          totalPages > 1
            ? `${doc.name} · Page ${pageNumber} of ${totalPages}`
            : ''
        }
        fixed
      />
    </>
  )
}
