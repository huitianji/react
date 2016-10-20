var gulp = require("gulp");
var $ = require("gulp-load-plugins")();

gulp.task('default', function () {
    var stream = gulp.src("gulp-template/template/**/*.html")
        .pipe(
            $.tmod({
                templateBase: "template"
            })
        )
        .pipe(
            gulp.dest("gulp-template/dist")
        );
    return stream;
});