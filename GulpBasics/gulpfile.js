var gulp = require('gulp');
var sass = require('gulp-sass');
const GulpClient = require('gulp');
var browserSync = require('browser-sync').create();

gulp.task('browser-sync',()=>{
    browserSync.init({
        server: {
            baseDir: 'dist'
        }
    });
});

gulp.task('html',()=> {
    return gulp.src('./src/**/*.html')
        .pipe(gulp.dest('dist'))
        .pipe(browserSync.reload({
            stream: true
        }));
});

gulp.task('images',()=> {
    return gulp.src('./src/images/**/*.*')
        .pipe(gulp.dest('dist/images'))
        .pipe(browserSync.reload({
            stream: true
        }));
});

gulp.task('sass',()=>{
    return gulp.src('./src/styles/**/*.scss')
        .pipe(sass())
        .pipe(gulp.dest('dist/styles'))
        .pipe(browserSync.reload({
            stream: true
        }));
});

gulp.task('scripts',() => {
    return gulp.src('./src/scripts/**/*.js')
        .pipe(gulp.dest('dist/scripts'))
        .pipe(browserSync.reload({
            stream: true
        }));
});

gulp.task('default',['browser-sync','html', 'images','sass','scripts'],()=>{ 
    gulp.watch('src/**/*.html',['html']);
    gulp.watch('src/images/**/*.*',['images']);
    gulp.watch('src/scripts/**/*.js',['scripts']);
    gulp.watch('src/styles/**/*.scss',['sass']);
});
