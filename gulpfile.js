const gulp = require('gulp');
const babel = require('gulp-babel');
const sass = require('gulp-sass');
const autoprefixer = require('gulp-autoprefixer');
const livereload = require('gulp-livereload');


gulp.task('css', ()=> {
    return gulp.src('./src/*.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(autoprefixer({
            browsers: ['last 2 version']
        }))
        .pipe(gulp.dest('dist'))
});


gulp.task('babel', ()=> {
    return gulp.src('./src/*.js')
        .pipe(babel({
            presets:['env']
        }))
        .pipe(gulp.dest('dist'))
});

gulp.task('default', () => {
    gulp.watch('./src/*.scss', ['css']);
    gulp.watch('./src/*.js', ['babel']);
})