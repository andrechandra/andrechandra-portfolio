import fs from 'fs'
import matter from 'gray-matter'
import path from 'path'
import { Blog } from '@/types/blogs'

const blogsDirectory = path.join(process.cwd(), 'contents/blogs')

interface BlogFilters {
  tags?: string[];
  startDate?: string;
  endDate?: string;
}

export const getSortedBlogs = (filters?: BlogFilters): Blog[] => {
  const fileNames = fs.readdirSync(blogsDirectory)
  
  const allBlogsData = fileNames.map((fileName) => {
    const id = fileName.replace(/\.mdx$/, '')
    const fullPath = path.join(blogsDirectory, fileName)
    const fileContents = fs.readFileSync(fullPath, 'utf8')
    const matterResult = matter(fileContents)
    
    return {
      id,
      ...matterResult.data
    } as Blog
  })

  return allBlogsData
}

export const getBlogData = async (id: string) => {
  const fullPath = path.join(blogsDirectory, `${id}.mdx`)
  const fileContents = fs.readFileSync(fullPath, 'utf8')
  const { data, content } = matter(fileContents)

  const headings = content.match(/^#{1,3} .+$/gm)?.map(heading => ({
    level: heading.match(/^#{1,3}/)![0].length,
    text: heading.replace(/^#{1,3} /, ''),
    id: heading.replace(/^#{1,3} /, '').toLowerCase().replace(/\s+/g, '-')
  })) || []
  return {
    id,
    content,
    date: data.date,
    title: data.title,
    tags: data.tags || [],
    summary: data.summary,
    thumbnail: data.thumbnail,
    headings
  }
 }