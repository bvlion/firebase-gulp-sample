const gulp = require('gulp')
const uglify = require('gulp-uglify')
const babel = require('gulp-babel')
const cleanCSS = require('gulp-clean-css')
const plumber = require('gulp-plumber')
const notify  = require('gulp-notify')
const rename = require('gulp-rename')
const exec = require('child_process').exec

const cssSrc = 'assets/css/*.css'
const cssTask = 'minify-css'
const jsSrc = 'assets/js/*.js'
const jsTask = 'minify-js'

gulp.task(jsTask, () =>
  gulp.src(jsSrc)
    .pipe(babel({
      'presets': ['@babel/preset-env']
    }))
    .pipe(uglify())
    .pipe(rename({
      extname: '.min.js'
    }))
    .pipe(plumber({
      errorHandler: notify.onError('Error: <%= error.message %>')
    }))
    .pipe(gulp.dest('public/js/'))
)

gulp.task(cssTask, () =>
  gulp.src(cssSrc)
    .pipe(cleanCSS())
    .pipe(rename({
      extname: '.min.css'
    }))
    .pipe(plumber({
      errorHandler: notify.onError('Error: <%= error.message %>') 
    }))
    .pipe(gulp.dest('public/css/'))
)

gulp.task('firebase', () => {
  exec('firebase serve', { cwd: '.' }, (error, stdout, stderr) => {
    if (error) console.log("error: " + error)
    if (stdout) console.log("stdout: " + stdout)
    if (stderr) console.log("stderr: " + stderr)
  })
  gulp.watch(jsSrc, gulp.series(jsTask))
  gulp.watch(cssSrc, gulp.series(cssTask))
})