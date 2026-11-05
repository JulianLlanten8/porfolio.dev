# 💼 Portafolio — Hugo Julian Llantén

Sitio web personal y portafolio profesional de **Hugo Julian Llantén** ([julianll.dev](https://julianll.dev/)), Analista y Desarrollador de Software especializado en diseño y desarrollo de aplicaciones web full-stack.

<div align="center">

[![Astro](https://img.shields.io/badge/Astro-6.3.8-FF5D01?logo=astro&logoColor=white)](https://astro.build/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4.3.0-06B6D4?logo=tailwindcss&logoColor=white)](https://tailwindcss.com/)
[![TypeScript](https://img.shields.io/badge/TypeScript-6.0.3-3178C6?logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Bun](https://img.shields.io/badge/Bun-Fast-FBF0DF?logo=bun&logoColor=black)](https://bun.sh/)
[![Deploy](https://img.shields.io/badge/Website-julianll.dev-yellow?style=flat)](https://julianll.dev/)

</div>

---

## ✨ Características

- ⚡ **Rendimiento Ultrarrápido**: Construido con **Astro 6** para generar un sitio estático ligero y de alto rendimiento.
- 🎨 **Estilos Modernos**: Maquetado con **Tailwind CSS v4** mediante `@tailwindcss/vite` y configuración CSS-first.
- 🌓 **Tema Oscuro / Claro**: Selector de tema persistente en `localStorage` con detección automática de preferencia del sistema.
- 🔍 **SEO Técnico Completo**:
  - Open Graph y Twitter Cards dinámicos.
  - Datos estructurados JSON-LD con Schema.org (`Person`).
  - Generación automática de `sitemap-index.xml` y `robots.txt`.
- 🗂️ **Arquitectura Desacoplada**:
  - Datos personales unificados en `src/config/personal.ts`.
  - Catálogo de etiquetas y tecnologías en `src/config/tags.ts`.
  - Experiencia laboral y proyectos en `src/data/`.
- 🎬 **Animaciones Nativas**: Transiciones suaves y efectos de scroll usando CSS Scroll-driven animations (`animation-timeline: scroll()`).

---

## 📁 Estructura del Proyecto

```text
portafolio/
├── public/                 # Archivos estáticos (imágenes, PDF de CV, audio, etc.)
├── src/
│   ├── components/         # Componentes Astro e iconos SVG
│   │   └── icons/          # Iconos reutilizables en formato Astro
│   ├── config/             # Configuración central (personal.ts, tags.ts)
│   ├── data/               # Contenido (projects.ts, experience.ts)
│   ├── layouts/            # Plantilla base (Layout.astro)
│   ├── pages/              # Páginas del sitio (index.astro)
│   ├── styles/             # Estilos globales (global.css con Tailwind v4)
│   └── types/              # Definiciones de TypeScript
├── astro.config.mjs        # Configuración de Astro, plugins y sitemap
└── package.json
```

---

## 🚀 Inicio Rápido

### Requisitos previos
- **Node.js**: `>= 22.12.0` (recomendado Node 24 vía `.nvmrc` / `.node-version`)
- **Bun** (recomendado) o npm / pnpm

### Instalación

```bash
# Clonar el repositorio
git clone https://github.com/JulianLlanten8/porfolio.dev.git
cd porfolio.dev

# Instalar dependencias con Bun
bun install
```

### Comandos disponibles

| Comando | Descripción |
| :--- | :--- |
| `bun dev` | Inicia el servidor de desarrollo en `http://localhost:4321` |
| `bun run build` | Ejecuta verificación de tipos (`astro check`) y compila para producción |
| `bun preview` | Previsualiza localmente el build de producción |

---

## 👤 Contacto

- **Web**: [julianll.dev](https://julianll.dev/)
- **LinkedIn**: [in/julianllanten](https://linkedin.com/in/julianllanten)
- **Email**: [hugojulians@gmail.com](mailto:hugojulians@gmail.com)
- **GitHub**: [@JulianLlanten8](https://github.com/JulianLlanten8)

---

## 🫂 Créditos y Agradecimientos

Inspirado inicialmente en el template open-source de [midudev](https://github.com/midudev/porfolio.dev).
Distribuido bajo la licencia [MIT](LICENSE.md).
