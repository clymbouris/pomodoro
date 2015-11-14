#Knockout Workflow
[knockout-workflow](https://github.com/d3moid/knockout-template) is a workflow template for quickly setting started with projects based on [Knockout.js](https://github.com/knockout/knockout) and [jQuery](https://github.com/jquery/jquery).

#Quickstart
##Install
The gulp-plugins are not included in the repo and need to be installed from `package.json` after cloning.
```
git clone git@github.com:d3moid/knockout-workflow.git
cd knockout-workflow
npm install
```
##Usage
To use run 'gulp' from the project's root folder.
```
gulp
```

All changes should be done on resources under `/src`. The optimized resources are automatically outputted to `/build`. Project folder structure shown below.
```
knockout-workflow
|- src
  |- components
    |- ...
  |- css
  |- img
  |- js
  |- scss
|- build
  |- components
    |- ...
  |- css
  |- img
  |- js
```
##Tools
###gulp
Gulp is a task/build runner for development. It allows you to do a lot of stuff within your development workflow. The following plugins are used for this workflow:
- **JShint**: Checks code for syntax errors. Uses jshint-reporter for formatting console output.
- **uglify**: JavaScript file minification.
- **concat**: Concatenate `.css` and `.js` files.
- **sourcemaps**: Allows debugging from within browser console after resources are minized/concatenated.
- **htmlmin**: Minify `.html` files (whitespaces, comments, etc.).
- **minify-css**: Minify `.css` files.
- **uncss**: Remove unused rules from `.css` files.
- **autoprefixer**: Auto-append vendor prefixes.
- **imagemin**: Optimize images.
- **image-resize**: Resize images.
- **gulp-deploy**: Quickly sync gh-pages branch using `gulp deploy` task.

###bower
Bower is a package maanger optimized for the front-end. Bower uses a flat dependency tree, requiring only one version for each package, reducing page load to a minimum. The components are already included in the `/build` directory. If the `/build` directory is deleted you can copy the components to build using like so:
```
gulp vendor-scripts
```

##TODO
- Add flags/arguments to image-resize task
- Use critical to identify above the fold CSS
- Use inline to add critical CSS on head
- Use gzip to compress resources
- Use browsersync
- Add .publish/ to .gitignore
- Remove default remote origin

##License
