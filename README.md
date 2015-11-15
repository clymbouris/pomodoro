#Knockout Workflow
A [gulp](https://github.com/gulpjs/gulp)-based optimized workflow template for new [knockout](https://github.com/knockout/knockout)/[jQuery](https://github.com/jquery/jquery) front-end projects. 

#Quickstart
##Install
**SSH**
```
git clone git@github.com:d3moid/knockout-workflow.git

```
**HTTPS**
```
git clone https://github.com/d3moid/knockout-workflow.git

```
Rename project directory and go to directory root. Replace _my_project_name_ with a name of your choosing.
```
mv knockout-workflow my_project_name
cd my_project_name
```
Node modules are not included in the repo. Instead they're referenced inside [package.json](https://github.com/d3moid/knockout-workflow/blob/master/package.json). You can download and install gulp and plugins locally to your project using npm.
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
