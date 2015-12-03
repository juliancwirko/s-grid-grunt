## Grunt project starter with sGrid

Check out sGrid website for more information about how to use the grid:

- [sGrid Website and Documentation](http://stylusgrid.com)
- [sGrid Npm package](https://www.npmjs.com/package/s-grid)
- Blog post: [sGrid - Working with Flexible Box layouts](http://julian.io/s-grid-working-with-flexible-box-layouts/)
- Blog post: [My workflow with the Stylus and Flexbox grid system](https://medium.com/@juliancwirko/my-workflow-with-the-stylus-and-flexbox-grid-system-5f4f50ac3f33)
- Article on Sitepoint.com: [Introducing sGrid: A Stylus-based Flexbox Grid System](http://www.sitepoint.com/introducing-sgrid-a-stylus-based-flexbox-grid-system/)

### Features

- assemble with handlebars templates
- stylus
- autoprefixer
- flexbox grid system
- cssmin
- uglify
- concat
- jshint
- imagemin
- server with livereload

### Start

You need git, bower, npm installed

````
git clone https://github.com/juliancwirko/s-grid-grunt.git
cd s-grid-grunt
rm -rf .git
npm install
bower install
grunt
````

There is a `templates` folder with .hbs files. You should use these files to compile your .html files in the root app folder. You can use layouts, partials and even handlebars helpers.
for more information about Assemble go to: [grunt-assemble](https://www.npmjs.com/package/grunt-assemble) readme.

### Tasks

Build and watch 127.0.0.1:9000 with livereload from 'app' folder:
````
$ grunt
````

Publish 'dist' folder (included tasks: 'assemble', 'compile-stylus', 'clean:dist', 'validate-js', 'useminPrepare', 'copy:dist', 'newer:imagemin', 'concat', 'cssmin', 'uglify', 'usemin'):
````
$ grunt publish
````

Watch 127.0.0.1:9001 - only preview ('dist' folder):
````
$ grunt server-dist
````

#### Other 'public' tasks which you can use separately in any moment

..for validating javascript (also in default 'grunt' task):

```
$ grunt validate-js
```

..for compiling Stylus files (also in default 'grunt' task)

```
$ grunt compile-stylus
```

### You probably want to read about

- [grunt-wiredep](https://github.com/stephenplusplus/grunt-wiredep)
- [grunt-assemble](https://www.npmjs.com/package/grunt-assemble)
- [grunt-usemin](https://github.com/yeoman/grunt-usemin)
- [stylus autoprefixer](https://github.com/jenius/autoprefixer-stylus)
- [flexbox](https://css-tricks.com/snippets/css/a-guide-to-flexbox/)
