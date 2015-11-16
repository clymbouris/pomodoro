#What is it?
A [gulp](https://github.com/gulpjs/gulp) workflow template for creating optimized front-end projects based on [knockout](https://github.com/knockout/knockout) and [jQuery](https://github.com/jquery/jquery). 

#Quickstart
##Clone
**SSH**
```
$ git clone git@github.com:d3moid/knockout-workflow.git
```
**HTTPS**
```
$ git clone https://github.com/d3moid/knockout-workflow.git
```
Rename project directory and browse to it.
```sh
# Replace my_project with the name of your project

$ mv knockout-workflow my_project
$ cd my_project
```
##Install packages
Gulp depends on [Node.js](www.nodejs.org). Dependencies  referenced in [package.json](https://github.com/d3moid/knockout-workflow/blob/master/package.json) can be installed using [npm](www.npmjs.org).
```sh
# Download required dependencies from my_project/package.json

$ npm install
```
##Use
Start your project by running the default task. 
```
$ gulp
```

Start working on these files inside `/src` directory
- **HTML**: `src/index.html`
- **CSS**: `src/css/main.css`
- **JS**: `src/js/app.js` 

Additional JavaScript and CSS files created inside `src/js` and `src/css` directories will be concatenated and optimized as well. All optimized files will be copied to the `/build` directory (see diagram below).
```
my_project
|- src
  index.html
  |- components
    |- ...
  |- css
    main.css
  |- img
  |- js
    app.js
  |- scss
|- build
  index.html
  |- components
    |- ...
  |- css
    main.min.css
  |- img
  |- js
    main.min.js
```
#Optimizations
Add something here.

#Tools
##gulp
[Gulp](https://github.com/gulpjs/gulp) is a task/build runner for development. 

##bower
[Bower](https://github.com/bower/bower) is a package manager optimized for the front-end. 

No initial configuration is required. The repo includes all required libraries both in the `/src` and `/build` directory. You can safely clean the `/build` directory without deleting these libraries using the `clean` task. 
```
gulp clean
```
If you delete the `/build` directory manually you can copy the components again by calling the `vendor-scripts` task.
```
gulp vendor-scripts
```
Libraries included in template:
- knockout.js
- jQuery
- normalize.css

#TODO
- Pass arguments to image-resize task from command line
- Use critical to identify above the fold CSS
- Use inline to add critical CSS on head
- Use gzip to compress resources
- Use browsersync
- Use cache and changed plugins so as to not reoptimize resources
- Activate knockout from within index.html (bottom script block)

#License
MIT license - [http://www.opensource.org/licenses/mit-license.php](http://www.opensource.org/licenses/mit-license.php)
