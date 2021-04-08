# LfioUserInterface
Lightfeature IO Kanban User Interface Code Challenge

Github Code URL: https://github.com/GitHubRetton77/lfio-user-interface

## Installation Dependencies

##### NPM/Node.js (Javascript project management/programming language)
> Installation guide homepage: https://nodejs.org/en/download/
> Required version: I don't think Node's and NPM's version matter but mine are 15.5.1 for Node and 7.3.0 for NPM

##### Angular CLI (Angular project management)
> Requires NPM/Node installed
> Installation: On a terminal run `npm install -g @angular/cli@8.3.8`
> Version: 8.3.8

##### Local Web Server
> Requires NPM/Node installed
> Installation: On a terminal run `npm install -g local-web-server`
> Version: any


## Run Instructions (when all dependencies are installed)
1. From a fresh clone from Github, on a terminal, navigate to the root of the project and get code dependencies by running  `npm install`
2. Next build the whole project by running `npm run build`. This create `dist` directory on the root of the project. The `dist` will have the all production code. 
3. When there are no build errors, on a terminal, navigate inside the `dist` directory, then run `ws --spa -index.html --port 4200`
4. On a browser, go to http://localhost:4200/



## Notes
- Installations of dependencies especially the node modules could be a pain due to versions and compatibility. Make sure to use the same versions from the project e.g. versions in `package.json` I'm not using most up to date versions of things because I did not need to update. Please let me know if these instructions are not working smoothly.
- I've tried deleting my local copy of the project and started from scatch by following the steps I've written here and worked for me.
- I believe I implemented all of the required specifications. I wanted to match all style requirements and implement the drag and drop improvement but did not have time.
- This is working with server component which is the kanban (service/API)[https://github.com/GitHubRetton77/lfio-service]
