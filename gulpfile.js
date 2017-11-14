var gulp         = require('gulp'), // Подключаем Gulp
    sass         = require('gulp-sass'), //Подключаем Sass пакет,
    browserSync  = require('browser-sync'), // Подключаем Browser Sync
    concat       = require('gulp-concat'), // Подключаем gulp-concat (для конкатенации файлов)
    uglify       = require('gulp-uglifyjs'), // Подключаем gulp-uglifyjs (для сжатия JS)
    cssnano      = require('gulp-cssnano'), // Подключаем пакет для минификации CSS
    rename       = require('gulp-rename'), // Подключаем библиотеку для переименования файлов
    del          = require('del'), // Подключаем библиотеку для удаления файлов и папок
    imagemin     = require('gulp-imagemin'), // Подключаем библиотеку для работы с изображениями
    pngquant     = require('imagemin-pngquant'), // Подключаем библиотеку для работы с png
    cache        = require('gulp-cache'), // Подключаем библиотеку кеширования
    autoprefixer = require('gulp-autoprefixer'),// Подключаем библиотеку для автоматического добавления префиксов
    sourcemaps   = require('gulp-sourcemaps'),
    htmlPartial  = require('gulp-html-partial'),
    notify       = require('gulp-notify'),
    babel        = require('gulp-babel');

//////////////////////////////
gulp.task('sass', function(){ // Создаем таск Sass
    return gulp.src('app/scss/**/*.scss') // Берем источник
    .pipe(sourcemaps.init())
    .pipe(sass().on( 'error', notify.onError({ 
        message: "<%= error.message %>", 
        title : "Sass Error!" 
    })))
        .pipe(sass()) // Преобразуем Sass в CSS посредством gulp-sass
        .pipe(autoprefixer(['last 15 versions', '> 1%', 'ie 8', 'ie 7'], { cascade: true })) // Создаем префиксы
        .pipe(sourcemaps.write())
        .pipe(gulp.dest('dist/css')) // Выгружаем результата в папку app/css
        .pipe(browserSync.reload({stream: true})) // Обновляем CSS на странице при изменении
    });
/////////////////////////////
gulp.task('scripts:vendor', function() {
    return gulp.src([ // Берем все необходимые библиотеки
        'bower_components/flexibility-master/flexibility-master/flexibility.js'
        ])
        .pipe(concat('libs.min.js')) // Собираем их в кучу в новом файле libs.min.js
        //.pipe(uglify()) // Сжимаем JS файл
        .pipe(gulp.dest('dist/js')); // Выгружаем в папку app/js
    });

gulp.task('scripts:common', function() {
    return gulp.src('app/js/main.js')
    .pipe(babel({
        presets: ['env']
    }))
    .pipe(concat('main.js'))
    // .pipe(uglify())
    .pipe(gulp.dest('dist/js'))
    .pipe(browserSync.reload({stream: true}));
});

/////////////////////////////
gulp.task('browser-sync', function() { // Создаем таск browser-sync
    browserSync({ // Выполняем browser Sync
        server: { // Определяем параметры сервера
            baseDir: 'dist' // Директория для сервера - app
        },
        notify: false, // Отключаем уведомления
        logConnections: true
    });
});
/////////////////////////////

gulp.task('html-rebuild', ['html-partials'], function(){
    console.log('reload')
    return gulp.src('app/*.html')
    .pipe(browserSync.reload({stream: true}));
})

gulp.task('watch', ['scripts:vendor', 'scripts:common', 'sass', 'browser-sync', 'html-partials', 'img', 'fonts'], function() {
    gulp.watch('app/scss/**/*.scss', ['sass']); // Наблюдение за sass файлами в папке sass
    gulp.watch('app/**/*.html', ['html-rebuild']); // Наблюдение за HTML файлами в корне проекта
    gulp.watch('app/css/**/*.css', browserSync.reload); // Наблюдение за CSS файлами в папке css
    gulp.watch('app/js/**/*.js', ['scripts:common']); // Наблюдение за JS файлами в папке js
});
/////////////////////////////
gulp.task('default', ['watch']);
/////////////////////////////
gulp.task('clear', function () {
    return cache.clearAll();
})
/////////////////////////////
gulp.task('clean', function() {
    return del.sync('dist'); // Удаляем папку dist перед сборкой
});
/////////////////////////////
gulp.task('img', function() {
    return gulp.src('app/img/**/*') // Берем все изображения из app
        .pipe(cache(imagemin({  // Сжимаем их с наилучшими настройками с учетом кеширования
            interlaced: true,
            progressive: true,
            svgoPlugins: [{removeViewBox: false}],
            use: [pngquant()]
        })))
        .pipe(gulp.dest('dist/img')); // Выгружаем на продакшен
    });

gulp.task('fonts', function() {
    gulp.src('app/fonts/**/*') // Переносим шрифты в продакшен
    .pipe(gulp.dest('dist/fonts'))
})
///////////////////////////
gulp.task('html-partials', function () {
    return gulp.src(['app/*.html'])
    .pipe(htmlPartial({
        basePath: 'app/partials/',
        tagName: 'partial',
        variablePrefix: '@@'
    }))
    .pipe(gulp.dest('dist'));
});
/////////////////////////////
gulp.task('build', ['clean', 'img', 'sass', 'scripts:vendor', 'scripts:common', 'html-partials', 'fonts']);
/////////////////////////////