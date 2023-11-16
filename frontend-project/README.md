# Proyecto Frontend con React y Tailwind CSS

Este proyecto frontend fue desarrollado utilizando el framework de React en JavaScript y aprovechando la potencia de Tailwind CSS para el diseño de la interfaz de usuario.

## Pasos para iniciar el proyecto

1. Crear el proyecto usando Vite y el template de React:
    ```bash
    npm create vite@latest frontend-project -- --template react
    ```

2. Instalar Tailwind CSS, PostCSS y Autoprefixer:
    ```bash
    npm install -D tailwindcss postcss autoprefixer
    ```

3. Inicializar Tailwind CSS:
    ```bash
    npx tailwindcss init -p
    ```

4. Manejo de solicitudes a la API con Axios:
    ```bash
    npm install axios
    ```

5. Manejo de rutas utilizando Vue Router:
    ```bash
    npm install vue-router
    ```

## Iniciar el proyecto

Una vez realizado los pasos anteriores, para ejecutar el proyecto, sigue estos pasos:

1. Navega al directorio del proyecto:
    ```bash
    cd frontend-project
    ```

2. Inicia el servidor de desarrollo:
    ```bash
    npm run dev
    ```

Esto iniciará el servidor de desarrollo y podrás acceder al proyecto desde tu navegador visitando la URL proporcionada por Vite.

## Estructura del proyecto

- `/src`: Contiene el código fuente del proyecto.
- `/public`: Directorio de archivos estáticos como imágenes, íconos, etc.
- `/src/components`: Componentes reutilizables de React.

