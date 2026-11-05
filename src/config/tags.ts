/**
 * Configuración de tecnologías/tags usados en los proyectos.
 * Estilo técnico calibrado con bordes discretos y contrastes legibles.
 */
import type { TagKey } from '@/types'

export const TAGS: Record<TagKey, { name: string; class: string }> = {
  VUE: {
    name: 'Vue.js',
    class: 'bg-emerald-500/10 text-emerald-800 dark:text-emerald-300 border border-emerald-500/20',
  },
  TAILWIND: {
    name: 'Tailwind CSS',
    class: 'bg-sky-500/10 text-sky-800 dark:text-sky-300 border border-sky-500/20',
  },
  CSS: {
    name: 'CSS3',
    class: 'bg-blue-500/10 text-blue-800 dark:text-blue-300 border border-blue-500/20',
  },
  JAVASCRIPT: {
    name: 'JavaScript',
    class: 'bg-amber-500/10 text-amber-800 dark:text-amber-300 border border-amber-500/20',
  },
  TYPESCRIPT: {
    name: 'TypeScript',
    class: 'bg-indigo-500/10 text-indigo-800 dark:text-indigo-300 border border-indigo-500/20',
  },
  REACT: {
    name: 'React',
    class: 'bg-cyan-500/10 text-cyan-800 dark:text-cyan-300 border border-cyan-500/20',
  },
  NEXTJS: {
    name: 'Next.js',
    class: 'bg-slate-500/10 text-slate-800 dark:text-slate-300 border border-slate-500/20',
  },
  LARAVEL: {
    name: 'Laravel',
    class: 'bg-rose-500/10 text-rose-800 dark:text-rose-300 border border-rose-500/20',
  },
}
