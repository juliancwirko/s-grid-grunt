## S-Grid with Grunt

Check out 'S-Grid for Meteor' website for more information about how to use the grid (besides instalation, usage is the same):

- [S-Grid for Meteor](http://s-grid.meteor.com)
- [S-Grid npm package](https://www.npmjs.com/package/s-grid)

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

### Example 1 (Helper classes):

```
<div class="s-grid-top s-grid-sm-12 s-grid-md-6 s-grid-lg-4 s-grid-xlg-3 s-grid-xxlg-2">
    <div class="s-grid-cell">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Optio, doloribus!
    </div>
    <div class="s-grid-cell">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quae!
    </div>
    <div class="s-grid-cell">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto sed, rerum ratione at modi sunt!
    </div>
    <div class="s-grid-cell">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Neque, repellendus!
    </div>
    <div class="s-grid-cell">
        Lorem ipsum dolor sit amet.
    </div>
    <div class="s-grid-cell">
        Lorem ipsum dolor sit amet.
    </div>
    <div class="s-grid-cell">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Neque, repellendus!
    </div>
    <div class="s-grid-cell">
        Lorem ipsum dolor sit amet.
    </div>
</div>
```

### Example 2 (Semantic):

Stylus:
```
section
    grid()
    aside, main
        grid-cell()
        cols(columns, columns, gutter)
    @media screen and (min-width: rem-calc(breakpoints[md]))
        aside
            cols(columns / 3, columns, gutter)
        main
            cols((columns / 3) * 2, columns, gutter)
```

HTML:
```
<section>
    <aside>
        Lorem ipsum dolor sit amet.
    </aside>
    <main>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Earum enim perferendis aspernatur neque, repellat ducimus laborum iure, eos inventore omnis vitae provident mollitia quisquam quibusdam! Eveniet earum nostrum, adipisci. Veritatis aliquid cum maxime fugit perspiciatis maiores, at doloribus? Tempore quisquam cum officia. Similique, itaque earum officia, minus animi at harum porro placeat aliquam ducimus dolor, quia eius accusamus doloremque odit?
    </main>
</section>
```

More examples: [s-grid.meteor.com](http://s-grid.meteor.com)

### You probably want to read about

- [grunt-wiredep](https://github.com/stephenplusplus/grunt-wiredep)
- [grunt-usemin](https://github.com/yeoman/grunt-usemin)
- [stylus autoprefixer](https://github.com/jenius/autoprefixer-stylus)
- [flexbox](https://css-tricks.com/snippets/css/a-guide-to-flexbox/)