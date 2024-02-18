// const { series, parallel } = require('gulp');
//
// function myFirstTask(cb) {
//     // place code for your default task here
//     console.log('first')
//     cb();
// }
//
// function testTask(cb) {
//     console.log('test')
//
//     cb()
// }
//
// exports.default = myFirstTask
// exports.test = testTask
// exports.mySeries = series(myFirstTask, testTask)
// exports.myParallel = parallel(myFirstTask, testTask)



const { src, dest, parallel, watch } = require('gulp');
const babel = require('gulp-babel');
const sass = require('gulp-sass')(require('sass'));
const sourcemaps = require('gulp-sourcemaps');
const rigger = require('gulp-rigger')

const buildScripts = () => {
    return src('js/*.js')
        .pipe(babel())
        .pipe(dest('output/'));
}

const buildStyles = () => {
    return src('sass/**/*.scss')
        .pipe(sourcemaps.init())
        .pipe(sass({outputStyle: 'compressed'}).on('error', sass.logError))
        .pipe(sourcemaps.write())
        .pipe(dest('./css'));
};

const builtHtml = () => {
    src('layouts/*.html')
        .pipe(rigger())
        .pipe(dest('./'))
}

const globalWatch = () => {
    watch('js/*.js', buildScripts)
    watch('./sass/**/*.scss', buildStyles);
    watch('./templates/*.html', builtHtml)
};



exports.default = globalWatch