const gulp = require('gulp');
const minify = require('gulp-minify-css');
const autoprefixer = require('gulp-autoprefixer');
const concat = require('gulp-concat');
const fs = require('fs');
const stripCssComments = require('strip-css-comments');


console.log("Initialize gulp");

gulp.task("add MIT copyright minified", ['add MIT copyright src'], function(next) {
    let srcPath = "dist/architect.min.css"
    fs.readFile(srcPath, 'utf8', function(err, data) {
        if (err) throw err;
        data = `/* Copyright 2017 Maarten Schermer, Licensed under MIT */ ` + data;
        fs.writeFile(srcPath, data, function(err) {
            if (err) throw err;
            console.log('complete copyright');
            next();
        });
    });
});

gulp.task("add MIT copyright src", ['stripping comments from src'], function(next) {

    let srcPath = "dist/architect.css"
    fs.readFile(srcPath, 'utf8', function(err, data) {
        if (err) throw err;
        data = `/* Copyright 2017 Maarten Schermer, Licensed under MIT */ ` + data;
        //Do your processing, MD5, send a satellite to the moon, etc.
        fs.writeFile(srcPath, data, function(err) {
            if (err) throw err;
            console.log('complete copyright');
            next();
        });
    });


});

gulp.task('stripping comments from src', ['compile src', 'compile minified src'], function(next) {
    let srcPath = "dist/architect.css"
    fs.readFile(srcPath, 'utf8', function(err, data) {
        if (err) throw err;
        data = stripCssComments(data, {
            preserve: false
        });
        //Do your processing, MD5, send a satellite to the moon, etc.
        fs.writeFile(srcPath, data, function(err) {
            if (err) throw err;
            console.log('complete stripping');
            next();
        });
    });

});

gulp.task('compile src', function() {
    return gulp.src([
            'src/architect/*.css',
        ])
        .pipe(autoprefixer('last 2 version', 'safari 5', 'ie 8', 'ie 9'))
        .pipe(concat('architect.css'))
        .pipe(gulp.dest('dist'))
});

gulp.task('compile minified src', function() {
    return gulp.src([
            'src/architect/*.css',
        ])
        .pipe(minify({
            keepSpecialComments: 0
        }))
        .pipe(autoprefixer('last 2 version', 'safari 5', 'ie 8', 'ie 9'))
        .pipe(concat('architect.min.css'))
        .pipe(gulp.dest('dist'))
});

gulp.task('copy files', ['add MIT copyright minified'], function(next) {
    fs.createReadStream('dist/architect.css')
        .pipe(fs.createWriteStream('public/stylesheets/architect.css'));
    next();
});

console.log("Starting gulp...");
gulp.task('default', ['copy files'], function() {
    console.log("Gulp d architect")
})
