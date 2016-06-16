var gulp = require('gulp'),
    scss= require('gulp-sass'),
    typescript = require('gulp-typescript'),
    typescriptAngular = require('gulp-typescript-angular'),
    inject = require('gulp-inject'),
    bowerFiles = require('main-bower-files'),
    es = require('event-stream'),
    browserSync = require('browser-sync').create(),
    clean = require('gulp-clean');

var path = {
    src: './src',
    dist: './dist',
    build: ''
};

gulp.task('dist:inject', function () {

    var cssFiles = gulp.src(path.src + '/scss/**/*.scss')
            .pipe(scss().on('error', scss.logError))
            .pipe(gulp.dest(path.dist + '/css'));

    var jsFiles = gulp.src(path.src + '/**/*.ts')
        .pipe(typescript())
        .pipe(typescriptAngular())
        .pipe(gulp.dest(path.dist));



    return gulp.src(path.src + '/index.html')

        .pipe(inject(gulp.src(bowerFiles(), {read: false}), {name: 'bower'}))

        .pipe(inject(
            es.merge(
                cssFiles,
                jsFiles
            )
        ))

        .pipe(gulp.dest(path.dist));

});

gulp.task('dist:html', function() {
    return gulp.src(path.src + '/**/*.html')
        .pipe(gulp.dest(path.dist));
});

gulp.task('dist:serve', function() {
    return browserSync.init({
        server: {
            baseDir: path.dist
        }
    });
});

gulp.task('clean', function () {
    return gulp.src(path.dist, {read: false})
        .pipe(clean())
});

gulp.task('default', ['dist:html', 'dist:inject', 'dist:serve']);

