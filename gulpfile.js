'use strict'

var gulp = require('gulp'),
    watch = require('gulp-watch'),
    prefixer = require('gulp-autoprefixer'),
    // uglify = require('gulp-uglify'),
    sass = require('gulp-sass'),
    sourcemaps = require('gulp-sourcemaps'),
    rigger = require('gulp-rigger'),
    cssmin = require('gulp-clean-css'),
    imagemin = require('gulp-imagemin'),
    rimraf = require('rimraf'),
    browserSync = require('browser-sync'),
    reload = browserSync.reload

var path = {
    build: {
      html: 'build/',
      js: 'build/js',
      css: 'build/css',
      img: 'build/img',
      fonts: 'build/fonts',
	    data: 'build/data'
    },
    src: {
      html: 'src/**/*.html',
      js: 'src/js/*.js',
      styles: 'src/styles/index.scss',
      img: 'src/img/**/*.*',
      fonts: 'src/fonts/**/*.*',
	    data: 'src/data/*.*'
    },
    watch: {
      html: 'src/**/*.html',
      js: 'src/js/**/*.js',
      styles: 'src/styles/**/*.scss',
      img: 'src/img/**/*.*',
      fonts: 'src/fonts/**/*.*',
	    data: 'src/data/*.*'
    },
    clean: './build'
}

var config = {
    server: {
      baseDir: './build'
    },
    tunnel: true,
    host: 'localhost',
    port: 9000,
    logPrefix: 'Hero'
}

gulp.task('html:build', function () {
  return gulp.src(path.src.html)
      .pipe(rigger())
      .pipe(gulp.dest(path.build.html))
      .pipe(reload({stream: true}))
})
gulp.task('js:build', function () {
  return gulp.src(path.src.js)
      .pipe(rigger())
      .pipe(sourcemaps.init())
      // .pipe(uglify())
      .pipe(sourcemaps.write())
      .pipe(gulp.dest(path.build.js))
      .pipe(reload({stream: true}))
})
gulp.task('data:build', function () {
   return gulp.src(path.src.data)
	.pipe(gulp.dest(path.build.data))
	.pipe(reload({stream: true}))
})
gulp.task('styles:build', function () {
   return gulp.src(path.src.styles)
      .pipe(sourcemaps.init())
      .pipe(sass())
      .pipe(prefixer())
      .pipe(cssmin())
      .pipe(sourcemaps.write())
      .pipe(gulp.dest(path.build.css))
      .pipe(reload({stream: true}))
})
gulp.task('image:build', function () {
   return gulp.src(path.src.img)
      .pipe(imagemin({
        progressive: true,
        svgoPlugins: [{removeViewBox: false}],
        interlaced: true
      }))
      .pipe(gulp.dest(path.build.img))
      .pipe(reload({stream: true}))
})
gulp.task('fonts:build', function () {
   return gulp.src(path.src.fonts)
      .pipe(gulp.dest(path.build.fonts))
      .pipe(reload({stream: true}))
})
gulp.task('build', [
  'html:build',
  'js:build',
  'styles:build',
  'fonts:build',
  'image:build',
  'data:build'
])
gulp.task('watch', function () {
  watch([path.watch.html], function (event, cb) {
    gulp.start('html:build')
  })
  watch([path.watch.styles], function (event, cb) {
    gulp.start('styles:build')
  })
  watch([path.watch.js], function (event, cb) {
    gulp.start('js:build')
  })
  watch([path.watch.img], function (event, cb) {
    gulp.start('image:build')
  })
  watch([path.watch.fonts], function (event, cb) {
    gulp.start('fonts:build')
  })
  watch([path.watch.data], function (event, cb) {
	gulp.start('data:build')
  })
})
gulp.task('webserver', function () {
  browserSync(config)
})
gulp.task ('clean', function () {
  rimraf(path.clean, cb)
})
gulp.task('default', ['build', 'webserver', 'watch'])
