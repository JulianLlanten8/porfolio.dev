/**
 * Configuración de tecnologías/tags usados en los proyectos.
 * Añade aquí nuevas tecnologías y se propagarán automáticamente.
 */
import type { TagKey } from '@/types'

export const TAGS: Record<TagKey, { name: string; class: string }> = {
  VUE: {
    name: 'Vue.js',
    class: 'bg-emerald-100 text-emerald-900 dark:bg-emerald-900 dark:text-emerald-100',
  },
  TAILWIND: {
    name: 'Tailwind CSS',
    class: 'bg-sky-100 text-sky-900 dark:bg-sky-900 dark:text-sky-100',
  },
  CSS: {
    name: 'CSS',
    class: 'bg-blue-100 text-blue-900 dark:bg-blue-900 dark:text-blue-100',
  },
  JAVASCRIPT: {
    name: 'JavaScript',
    class: 'bg-yellow-100 text-yellow-900 dark:bg-yellow-900 dark:text-yellow-100',
  },
  TYPESCRIPT: {
    name: 'TypeScript',
    class: 'bg-indigo-100 text-indigo-900 dark:bg-indigo-900 dark:text-indigo-100',
  },
  REACT: {
    name: 'React',
    class: 'bg-cyan-100 text-cyan-900 dark:bg-cyan-900 dark:text-cyan-100',
  },
  NEXTJS: {
    name: 'Next.js',
    class: 'bg-slate-100 text-slate-900 dark:bg-slate-800 dark:text-slate-100',
  },
  LARAVEL: {
    name: 'Laravel',
    class: 'bg-red-100 text-red-900 dark:bg-red-900 dark:text-red-100',
  },
}
