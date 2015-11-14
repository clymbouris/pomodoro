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
###bower
##TODO
- Add flags/arguments to image-resize task
- Use critical to identify above the fold CSS
- Use inline to add critical CSS on head
- Use gzip to compress resources
- Use browsersync
- Add .publish/ to .gitignore
- Remove default remote origin
##License
