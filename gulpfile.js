'use strict';

var gulp = require("gulp")
var ejs = require("gulp-ejs")

gulp.task("default", function() {
    gulp.src(["./template/**/*.ejs", '!' + "./template/**/_*.ejs"])
        .pipe(ejs({}, {}, {"ext": ".html"}))
        .pipe(gulp.dest("./dist"))
});