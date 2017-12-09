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
        "viewName": "index",
        "components": ["Header", "Footer"]
    },
    {
        "viewName": "home",
        "components": ["Header"]
    },
]


gulp.task('html', () => {
    pug(
        ["src/views/*.pug"],
        path.join(DEST, 'templates')
    )
});


gulp.task('css', () => {
    const tasks = VIEWS.map(({ viewName, components }) => {
        return stylus(
            viewName + '.css',
            components.map((compName) => 
                `src/components/${compName}/*.stly`
            ).concat(`src/stylus/${viewName}.styl`),
            path.join(DEST, 'static/css')
        );
    })
    merge(tasks);
});


gulp.task('js', () => {
    const tasks = VIEWS.map(({ viewName, components }) => {
        return js(
            viewName + '.js',
            components.map((compName) => 
                `src/components/${compName}/*.js`
            ).concat(`src/script/${viewName}.js`),
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