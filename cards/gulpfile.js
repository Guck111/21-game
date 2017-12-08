const gulp = require('gulp'),
    webpackStream = require('webpack-stream'),
    webpack = require('webpack-stream').webpack,
    named = require('vinyl-named'),
    livereload = require('gulp-livereload');


gulp.task('webpack', () => {

    let options = {

        watch: true,

        output: {
            path: `${__dirname}/app`,
            filename: 'main.js',
        },

        devtool: "source-map",

        module: {
            rules: [
                {
                    test: /\.js$/,
                    exclude: /(node_modules|bower_components)/,
                    use: {
                        loader: 'babel-loader',
                        options: {
                            presets: ['@babel/preset-env']
                        }
                    }
                }
            ]
        },
        plugins: [],
    };

    return gulp.src('app/scripts/main.js')
        .pipe(named())
        .pipe(webpackStream(options))
        .pipe(gulp.dest('app/js'))
        .pipe(livereload());
});

gulp.task('watch', ['webpack'], function () {
    livereload.listen();
    gulp.watch('./app/js/**/*.js');
    gulp.watch('./app/css/**/*.css');
    gulp.watch('./app/**/*.html');
});

gulp.task('default', ['watch']);