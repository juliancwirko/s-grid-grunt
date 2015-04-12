## S-Grid with Grunt

Check out 'S-Grid for Meteor' website for more information about how to use the grid (besides instalation, usage is the same):

- [S-Grid for Meteor](http://s-grid.meteor.com)
- [S-Grid npm package](https://www.npmjs.com/package/s-grid)

- [Blog post about it](http://julian.io/s-grid-working-with-flexible-box-layouts/)

### Features

- stylus
- autoprefixer
- flexbox grid system
- cssmin
- uglify
- concat
- jshint
- wiredep (bower install)
- imagemin
- server with livereload

### Start

You need git, bower, npm installed

````
git clone git@github.com:juliancwirko/s-grid-grunt.git
cd s-grid-grunt
rm -rf .git
npm install
bower install
````

### Tasks

Watch 127.0.0.1:9000 with livereload:
````
$ grunt
````

Publish 'dist' folder:
````
$ grunt publish
````

Watch 127.0.0.1:9001 - only preview from 'dist' folder:
````
$ grunt server-dist
````

#### Other tasks

..for validating javascript (also in default 'grunt' task):

```
$ grunt validate-js
```

..for injecting bower libraries (also in default 'grunt' task):

```
$ grunt bower-install
```

..for compiling Stylus files (also in default 'grunt' task)

```
$ grunt compile-stylus
```

### Grid examples and more complex s-grid docs:
[s-grid.meteor.com](http://s-grid.meteor.com)

### You probably want to read about

- [grunt-wiredep](https://github.com/stephenplusplus/grunt-wiredep)
- [grunt-usemin](https://github.com/yeoman/grunt-usemin)
- [stylus autoprefixer](https://github.com/jenius/autoprefixer-stylus)
- [flexbox](https://css-tricks.com/snippets/css/a-guide-to-flexbox/)
