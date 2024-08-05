## React + TypeScript + Vite Component library with module federation

This is a vite component library mode in action generated from the go to vite template. It uses vite module federation for sharing reusable code.

## A minimal setup with the following packages

- `plugin:vite-plugin-dts` to generate types file
- `plugin:@vitejs/plugin-react` to use react
- `plugin:@vitejs/plugin-react` to use react
- `@originjs/vite-plugin-federation` to use module federation

## Things to remember

- Use `npm install` to install all dependencies
- Use `npm run preview` to run the static web server from dist at `http://localhost:4173` this is necessary when using module federation
- To check live component updates from the library use `npm run dev` to run the static web server from dist at `http://localhost:4173` this is necessary when using module federation
