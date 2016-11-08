var gulp = require('gulp');
var browserSync = require('browser-sync').create();
//var cssnano = require('gulp-cssnano');
//var imagemin = require('gulp-imagemin');
var cache = require('gulp-cache');
var del = require('del');
//var runSequence = require('run-sequence');
var concat = require('gulp-concat');
var rename = require('gulp-rename');
var gulpIgnore = require('gulp-ignore');
var uglify = require('gulp-uglify');


/*gulp.task('browserSync', function() {
    browserSync.init({
        server: {
            baseDir: 'assets'
        },
    })
});*/

gulp.task('serve', function() {
    browserSync.init({
        proxy: "localhost"
    });

    gulp.watch("assets/**/*.css");
    gulp.watch("assets/**/*.js").on('change', browserSync.reload);
    gulp.watch("views/*.html").on('change', browserSync.reload);
});

gulp.task('default', ['serve']);

var jsFiles = ['assets/libs/easing/easing.min.js','assets/js/bootstrap.min.js','assets/js/md5.min.js','assets/libs/owl-carousel/owl.carousel.js','assets/libs/faq/jquery.quicksilver.js', 'assets/libs/faq/jquery.simpleFAQ.js', 'assets/libs/vide/jquery.vide.min.js', 'assets/libs/jquerymask/dist/jquery.mask.min.js', 'assets/js/main.js'],
    jsDest = 'dist/js';

gulp.task('scripts', function() {
    return gulp.src(jsFiles)
        .pipe(concat('scripts.js'))
        .pipe(ignore.exclude([ "**/*.map" ]))
        .pipe(gulp.dest(jsDest))
        .pipe(rename('scripts.min.js'))
        .pipe(uglify())
        .pipe(gulp.dest(jsDest));
});

gulp.task('images', function(){
    return gulp.src('assets/images/**/*.+(png|jpg|gif|svg)')
        .pipe(cache(imagemin({
            interlaced: true
        })))
        .pipe(gulp.dest('dist/images'))
});

gulp.task('fonts', function() {
    return gulp.src('assets/fonts/**/*')
        .pipe(gulp.dest('dist/fonts'))
});

gulp.task('clean:dist', function() {
    return del.sync('dist');
});

gulp.task('build', function (callback) {
    runSequence('clean:dist',
        ['scripts', 'images', 'fonts'],
        callback
    )
});