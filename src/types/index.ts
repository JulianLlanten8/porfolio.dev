export interface Tag {
  name: string
  class: string
  iconName: string
}

export interface Project {
  title: string
  description: string
  link: string
  github?: string
  image: string
  tags: TagKey[]
}

export interface Experience {
  date: string
  title: string
  company: string
  description: string
  link?: string
}

export type TagKey =
  | 'VUE'
  | 'TAILWIND'
  | 'CSS'
  | 'JAVASCRIPT'
  | 'TYPESCRIPT'
  | 'REACT'
  | 'NEXTJS'
