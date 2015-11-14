#Knockout Workflow
A [gulp](https://github.com/gulpjs/gulp)-based optimized workflow template for new [knockout](https://github.com/knockout/knockout)/[jQuery](https://github.com/jquery/jquery) front-end projects. 

#Quickstart
##Install
```
git clone git@github.com:d3moid/knockout-workflow.git
cd knockout-workflow
```
Install gulp and plugins locally using `package.json`.
```
npm install
```
##Usage
All optimizations are bound as watched tasks on the default task. To start type
```
gulp
```

All changes happen within `/src`. The optimized resources are automatically sent to `/build`. 
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
#Tools
##gulp
Gulp is a task/build runner for development. The following plugins are used for optimization:
**JShint**, **uglify**, **concat**,**sourcemaps**, **htmlmin**, **minify-css**, **uncss**, **autoprefixer**, **imagemin**, **image-resize**, **gulp-deploy**

##bower
Bower is a package manager optimized for the front-end. No initial configuration required; the additional libraries are already included in the `/build` directory. You can delete the `/build` directory using `gulp clean` if required. If you do so you have to copy the components to build using the `vendor-scripts` task:
```
gulp vendor-scripts
```
Libraries included:
- knockout.js
- jQuery
- normalize.css

#TODO
- Pass arguments to image-resize task from command line
- Use critical to identify above the fold CSS
- Use inline to add critical CSS on head
- Use gzip to compress resources
- Use browsersync

#License
