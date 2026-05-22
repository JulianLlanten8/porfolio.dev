import type { Project, TagKey } from '@/types'

export const TAGS: Record<TagKey, { name: string; class: string }> = {
  VUE: {
    name: 'Vue.js',
    class: 'bg-emerald-100 text-emerald-900 dark:bg-emerald-900 dark:text-emerald-100',
  },
  TAILWIND: {
    name: 'Tailwind CSS',
    class: 'bg-blue-100 text-blue-900 dark:bg-blue-900 dark:text-blue-100',
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
    class: 'bg-indigo-100 text-indigo-900 dark:bg-indigo-900 dark:text-indigo-100',
  },
}

export const PROJECTS: Project[] = [
  {
    title: 'IA en el navegador - Chrome Built-in AI',
    description:
      'Herramienta web que explora las nuevas APIs de IA integradas en el navegador (Chrome Built-in AI): traductor, corrector, summarizer y más funcionalidades nativas sin depender de servidores externos. Creada con Vue.js y Tailwind CSS.',
    link: 'https://ia.julianll.dev/',
    image: '/projects/ia_browser_preview.png',
    tags: ['VUE', 'JAVASCRIPT', 'TAILWIND', 'CSS'],
  },
  {
    title: 'Tienda Virtual - E-commerce de productos',
    description:
      'Tienda virtual de productos. Creada con React. Implementando funcionalidades de carrito de compras, filtros y búsqueda de productos.',
    link: 'https://teslo-shop.julianll.dev/',
    github: 'https://github.com/JulianLlanten8/RoadMapReact/tree/main/teslo-shop',
    image: '/projects/teslo-shop.webp',
    tags: ['REACT', 'TAILWIND', 'TYPESCRIPT'],
  },
  {
    title: 'Lista de todos los personajes de Rick and Morty',
    description:
      'Lista de todos los personajes de la serie animada Rick and Morty. Creada con Vue.js y Sass CSS. Consumiendo la API de Rick and Morty.',
    link: 'https://rick-and-morty-eql4u8x3h-rick-morty.vercel.app/',
    github: 'https://github.com/https-github-com-JLlanten8/rick-and-morty',
    image: '/projects/llantenJulian08-Rick&morty.webp',
    tags: ['VUE', 'CSS'],
  },
  {
    title: 'Grabador de pantalla y audio en la web',
    description:
      'Grabador de pantalla en la web. Creado con JavaScript y CSS. Utilizando la API de MediaRecorder para grabar la pantalla y el audio.',
    link: 'https://grabador-de-pantalla.julianll.dev/',
    image: '/projects/graba-midu-lian.webp',
    tags: ['JAVASCRIPT', 'CSS'],
  },
  {
    title: 'Buscador de GIFs',
    description:
      'Buscador de GIFs. Creado con TypeScript y React. Utilizando la API de Giphy para buscar GIFs.',
    link: 'https://gif-app.julianll.dev/',
    image: '/projects/gif-app.webp',
    tags: ['REACT', 'TYPESCRIPT', 'CSS'],
  },
  {
    title: 'Pokemon Game - Juego de Pokémon',
    description:
      'Adivina el Pokémon. Juego de adivinanza de Pokémon. Creado con Vue y TypeScript. Utilizando la API de PokeAPI para obtener los datos de los Pokémon.',
    link: 'https://pokemon-game.julianll.dev/',
    image: '/projects/pokemon-game.webp',
    tags: ['VUE', 'TYPESCRIPT', 'CSS'],
  },
  {
    title: 'Si o no? - Aplicación de toma de decisiones',
    description:
      'Aplicación de toma de decisiones. Creada con Vue.js y CSS. Utilizando la API de yes/no para tomar decisiones.',
    link: 'https://si-o-no.julianll.dev/',
    github: 'https://github.com/JulianLlanten8/Vue.js-De-cero-a-experto-indecision-app',
    image: '/projects/si-o-no.webp',
    tags: ['VUE', 'CSS', 'TAILWIND'],
  },
  {
    title: 'skyconnect-explorer',
    description:
      'Explorador de vuelos. Creado con Next.js. Utilizando la API de SkyScanner para buscar aeropuertos.',
    link: 'https://skyconnect-explorer.vercel.app/',
    github: 'https://github.com/JulianLlanten8/skyconnect-explorer',
    image: '/projects/sky-connect-explorer.webp',
    tags: ['NEXTJS', 'TYPESCRIPT', 'TAILWIND'],
  },
]
