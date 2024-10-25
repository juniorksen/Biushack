import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind'; // Importa el plugin de Tailwind
import react from '@astrojs/react'; // Importa el plugin de React

export default defineConfig({
    integrations: [
        tailwind(), // Habilita Tailwind CSS
        react() // Habilita React
    ],
    output: 'server', // Cambiar a 'server' o 'hybrid' para habilitar las rutas de API si es necesario
    server: {
        port: 3000, // Define el puerto del servidor
    },
});