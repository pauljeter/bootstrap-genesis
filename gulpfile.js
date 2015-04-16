/* jshint camelcase:false */
var gulp = require('gulp');

var args = require('yargs').argv;
var browserSync = require('browser-sync');
var config = require('./gulp.config')();
var del = require('del');
var glob = require('glob');
var pkg = require('./package.json');
var reload = browserSync.reload;
var runSeq = require('run-sequence');
var $ = require('gulp-load-plugins')({
  lazy: true
});
var colors = $.util.colors;
var log = $.util.log;

