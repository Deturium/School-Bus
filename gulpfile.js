const gulp = require('gulp');
const $ = require('gulp-load-plugins')();
const autoprefixer = require('autoprefixer');
const cssnano = require('cssnano');
const browserSync = require('browser-sync');
const merge = require('merge-stream');

const path = require('path');
const del = require('del');

// config
const DEST = './dist'
const DEV = true

const VIEWS = [
  {
    "view": "index",
    "components": ["Layout", "Header", "Footer", "LifeGame"]
  },
  {
    "view": "play",
    "components": ["Layout", "Header", "Footer"]
  },
]


// tasks
gulp.task('html', () => {
  pug(
    ["src/views/*.pug"],
    DEST
  )
});


gulp.task('css', () => {
  const tasks = VIEWS.map(({ view, components }) => {
    return stylus(
      view + '.css',
      components.map((comp) =>
        `src/components/${comp}/*.styl`
      ).concat(`src/stylus/${view}.styl`),
      path.join(DEST, 'static/css')
    );
  })
  merge(tasks);
});


gulp.task('js', () => {
  const tasks = VIEWS.map(({ view, components }) => {
    return js(
      view + '.js',
      components.map((comp) =>
        `src/components/${comp}/*.js`
      ).concat(`src/script/${view}.js`),
      path.join(DEST, 'static/js')
    );
  })
  merge(tasks);
});


gulp.task('clean', () => {
  del.sync([DEST]);
});


gulp.task('default', ['clean'], () => {
  gulp.start('html', 'css', 'js');
});


gulp.task('watch', () => {
  gulp.watch('src/**/*.pug', ['html']);
  gulp.watch('src/**/*.styl', ['css']);
  gulp.watch('src/**/*.js', ['js']);

  browserSync({
    server: {
      baseDir: DEST
    }
  });

  gulp.watch([path.join(DEST, '**')])
    .on('change', browserSync.reload);
});


// task functions
function pug(inPath, outPath) {
  return gulp.src(inPath)
    .pipe($.changed(outPath))
    .pipe($.plumber())
    .pipe($.pug({
      "pretty": DEV,
      "debug": false,
    }))
    .pipe(gulp.dest(outPath));
}


function stylus(outName, inPath, outPath) {
  const plugins = [
    autoprefixer({
      browsers: [
        '> 1%',
        'last 2 versions'
      ],
      cascade: false,
    }),
    cssnano()
  ];
  return gulp
    .src(inPath)
    .pipe($.changed(outPath))
    .pipe($.plumber())
    .pipe($.stylus())
    .pipe($.if(!DEV,
      $.postcss(plugins)
    ))
    .pipe($.concat(outName))
    .pipe(gulp.dest(outPath));
}


function js(outName, inPath, outPath) {
  return gulp.src(inPath)
    .pipe($.changed(outPath))
    .pipe($.plumber())
    .pipe($.concat(outName))
    .pipe($.if(!DEV, $.babel({
      "presets": [
        ["env", {
          "targets": {
            "browsers": [
              "> 1%",
              "last 2 versions"
            ]
          },
          "debug": false,
        }]
      ]
    })))
    .pipe($.if(!DEV,
      gulp.dest(outPath)
    ))
    .pipe($.rename({ suffix: '.min' }))
    .pipe($.if(!DEV,
      $.uglify()
    ))
    .pipe(gulp.dest(outPath))
}
