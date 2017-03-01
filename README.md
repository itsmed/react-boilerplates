# React Boilerplates
A series of boilerplates for <a href="https://facebook.github.io/react/">React</a> applications.
Nothing fancy, but a good starting point for any React project.

## Requirements
It is assumed that you have <a href="http://nodejs.org/">Node</a> and <a href="https://www.npmjs.com/">NPM</a> installed. Node Package Manager (NPM) should come with your Node installation.

## Usage
Each branch on this repo contains a different set up. Find the branch that works best for your project, and clone it.
Change into the directory and run `npm install` to get the dependencies installed.

## Running the Application

Run `npm start` to start the <a href="https://github.com/webpack/webpack-dev-server">Webpack Dev Server</a>.
Open your browser and head over to localhost://8080 to see the application served from webpack-dev-server.
Hot reloading is enabled, so you should be able to make start hacking and see the changes reflected in the browser.

`npm run build` will result in  bundle.js and bundle.js.map being created in the public/build/ directory.
`npm run watch` will run webpack in watch mode, and bundle.js will be served from memory. 

### All
When you are ready, run `npm run build` to bundle your project. The bundled file (bundle.js) will be created in the public/build/ folder.