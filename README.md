# React Boilerplates
A series of boilerplates for <a href="https://facebook.github.io/react/">React</a> applications.
Nothing fancy, but a good starting point for any React project.

## Requirements
It is assumed that you have <a href="http://nodejs.org/">Node</a> and <a href="https://www.npmjs.com/">NPM</a> installed. Node Package Manager (NPM) should come with your Node installation.

## Usage
Each branch on this repo contains a different set up. Find the branch that works best for your project, and clone it.
Change into the directory and run `npm install` to get the dependencies installed.

## Running the Application

### Front End Only
Run `npm run build:watch` to start the <a href="https://github.com/webpack/webpack-dev-server">Webpack Dev Server</a>.
Open your browser and head over to localhost://8080 to see the application served from webpack-dev-server.
Hot reloading is enabled, so you should be able to make start hacking and see the changes reflected in the browser.

### Back End
If you cloned a branch that includes a Node/Express server, run `npm run build:watch` so that webpack-dev-server watches your front-end files for changes. 
Then in another Terminal window, run `npm run start:watch`, and nodemon will watch your server files so you can make changes without having to stop and restart your server.
Run `npm start` to just run the Node/Express Server.

### All
When you are ready, run `npm run build` to bundle your project. The bundled file (bundle.js) will be created in the public/build/ folder.