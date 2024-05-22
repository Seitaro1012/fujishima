// ----------------------------------------------------------------------
"use strict";

// モジュール読み込み
//----------------------------------------------------------------------
/* gulp */
const gulp = require('gulp');
const { src, dest, watch, series, parallel } = require('gulp');

/* sass */
const gulpDartSass  = require('gulp-dart-sass');
const sassGlob      = require('gulp-sass-glob-use-forward');
const autoprefixer  = require('gulp-autoprefixer');
const plumber       = require('gulp-plumber');
const gcmq          = require('gulp-group-css-media-queries');
const sourcemaps    = require('gulp-sourcemaps');

// タスク定義
//----------------------------------------------------------------------
const sass = () => {
  return gulp
    .src('src/sass/**/*.scss')
    // 強制停止を防止
    .pipe(plumber({
      errorHandler: function (err) {
        console.log(err.messageFormatted);
        this.emit('end');
      }
    }))
    // ソースマップを初期化
    .pipe(sourcemaps.init())
    // glob
    .pipe(sassGlob())
    // scssをコンパイル
    .pipe(gulpDartSass({
      includePaths: ['src/sass'],
      outputStyle:'expanded',
    }))
    // ベンダープレフィックスを付ける
    .pipe(autoprefixer({cascade: false,}))
    // メディアクエリをまとめる
    .pipe(gcmq())

    // ソースマップを出力する
    .pipe(sourcemaps.write('./'))
    // できあがったcssを書き出す
    .pipe(gulp.dest('assets/css'))
}

//  Watch
//----------------------------------------------------------------------
const watchFiles = () => {
  gulp.watch('./src/sass/**/*.scss', sass);
}

// タスクの実行
//----------------------------------------------------------------------
exports.sass = sass;
exports.watch = watchFiles;