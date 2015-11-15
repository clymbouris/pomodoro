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
Rename project directory and go to directory root.
```sh
# Replace _my_project_name_ with the name of your project

$ mv knockout-workflow my_project_name
$ cd my_project_name
```
##Install packages
Gulp depends on [Node.js](www.nodejs.org). [Dependencies](https://github.com/d3moid/knockout-workflow/blob/master/package.json) can be installed using [npm](www.npmjs.org).
```sh
# Have npm read my_project_name/package.json and download required dependencies

$ npm install
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

#License
MIT license - [http://www.opensource.org/licenses/mit-license.php](http://www.opensource.org/licenses/mit-license.php)
