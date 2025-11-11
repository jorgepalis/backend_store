// config/env/production/server.ts

// ¡Elimina la línea de importación!
// import { defineConfig } from '@strapi/types'; // ELIMINA ESTO

// Usa la función de flecha con el parámetro `env` tipado explícitamente como `any` (o el tipo correcto si lo tienes).
// config/env/production/server.ts

// ¡Elimina la línea de importación!
// import { defineConfig } from '@strapi/types'; // ELIMINA ESTO

// Usa la función de flecha con el parámetro `env` tipado explícitamente como `any` (o el tipo correcto si lo tienes).
export default ({ env }: { env: any }) => ({
  host: env('HOST', '0.0.0.0'),
  port: env.int('PORT', 1337),
  // Es VITAL que definas la URL pública con HTTPS
  url: env('PUBLIC_URL', 'https://backend-store-h9it.onrender.com'),
  app: {
    //keys: env.array('APP_KEYS', ['key1', 'key2']),
    keys: env.array('APP_KEYS'),
    proxy: true,
  },
  webhooks: {
    populateRelations: env.bool('WEBHOOKS_POPULATE_RELATIONS', false),
  },
  
});


// export default ({ env }) => ({
//   host: env('HOST', '0.0.0.0'),
//   port: env.int('PORT', 1337),
//   // 🛑 LÍNEAS CLAVE: Habilitar la confianza en el proxy (TRUST_PROXY)
//   url: env('PUBLIC_URL'),
//   app: {
//     keys: env.array('APP_KEYS'),
//     proxy: true, 
//     // Debes indicar a Strapi que confíe en los encabezados X-Forwarded-* (que usa Render)
//     // Aseguramos que Strapi considere la conexión HTTPS
//     //secure: true,
//   },
//   // Opcional, pero a veces necesario:
//   webhooks: {
//     populateRelations: env.bool('WEBHOOKS_POPULATE_RELATIONS', false),
//   },
// });
