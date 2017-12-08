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
        "viewname": "index",
        "components": ["Header", "Footer"]
    },
    {
        "viewname": "home",
        "components": ["Header"]
    },
]


gulp.task('html', () => {
    html(
        ["src/views/*.html"],
        path.join(DEST, 'templates')
    )
});


gulp.task('css', () => {
    const tasks = VIEWS.map(({ viewname, components }) => {
        return stylus(
            viewname + '.css',
            components.map((comp) => 
                `src/components/${comp}/*.stly`
            ).concat(`src/stylus/${viewname}.styl`),
            path.join(DEST, 'static/css')
        );
    })
    merge(tasks);
});


gulp.task('js', () => {
    const tasks = VIEWS.map(({ viewname, components }) => {
        return js(
            viewname + '.js',
            components.map((comp) => 
                `src/components/${comp}/*.js`
            ).concat(`src/js/${viewname}.js`),
            path.join(DEST, 'static/js')
        );
    })
    merge(tasks);
});


gulp.task('clean', () => {
    del.sync([DEST]);
});


gulp.task('default', () => {
    gulp.start('html', 'css', 'js');
});


gulp.task('watch', () => {
    gulp.watch('src/**/*.html', ['html']);
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



function html(inPath, outPath) {
    return gulp.src(inPath)
        .pipe($.changed(outPath))
        .pipe($.plumber())
        .pipe($.fileInclude({
            prefix: '@@',
            basepath: '@file',
            indent: true,
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
        .pipe($.concat('main.css'))
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
                    // "debug": true,
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