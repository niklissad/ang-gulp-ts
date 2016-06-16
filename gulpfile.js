var gulp = require('gulp'),
    scss= require('gulp-sass'),
    typescript = require('gulp-typescript'),
    typescriptAngular = require('gulp-typescript-angular'),
    inject = require('gulp-inject'),
    bowerFiles = require('main-bower-files'),
    gulpBowerFiles = require('gulp-main-bower-files');
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
        .pipe(browserSync.stream())
        .pipe(gulp.dest(path.dist + '/css'));

    var jsFiles = gulp.src(path.src + '/**/*.ts')
        .pipe(typescript())
        .pipe(typescriptAngular())
        .pipe(gulp.dest(path.dist));



    return gulp.src(path.src + '/index.html')

        .pipe(inject(gulp.src(bowerFiles(), {read: false}), {
            ignorePath: '/dist',
            name: 'bower'
        }))

        .pipe(inject(
            es.merge(
                cssFiles,
                jsFiles
            ), {
                ignorePath: '/dist'
            }
        ))

        .pipe(gulp.dest(path.dist));

});

gulp.task('dist:html', function() {
    return gulp.src(path.src + '/**/*.html')
        .pipe(gulp.dest(path.dist));
});

gulp.task('dist:bower', function() {
    return gulp.src('./bower.json')
        .pipe(gulpBowerFiles())
        .pipe(gulp.dest(path.dist + '/lib'));
});

gulp.task('dist:serve', function() {
    return browserSync.init({
        server: {
            baseDir: path.dist,
            routes: {
                "/dist": "/"
            }
        }
    });
});

gulp.task('clean', function () {
    return gulp.src(path.dist, {read: false})
        .pipe(clean())
});

gulp.task('dist:build', ['dist:html', 'dist:inject', 'dist:bower']);

gulp.task('watch', function() {
    gulp.watch(path.src + '/**/*', ['dist:build']);
    gulp.watch(path.src + '/**/*').on('change', browserSync.reload);
});

gulp.task('default', ['dist:build', 'dist:serve', 'watch']);

