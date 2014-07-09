var fs=require('fs');
fs.mkdirSync('partials');
fs.writeFileSync('partials/a.html', '<br>');  


var gulp = require('gulp')
    ,watch = require('gulp-watch')
    ,htmlmin = require('gulp-htmlmin');

gulp.task('default', function () {
    //------------------------------
    watch({glob:'partials/**/*.html'},function (files) {
    return   files
        .pipe(htmlmin())
        .pipe(gulp.dest('htmlmin')); //
    });
    //------------------------------
});

//#########################################
//TEST
// wait 1s  create subfolder and file  

setTimeout(function(){
    fs.mkdirSync('partials/b');
    fs.writeFileSync('partials/b/c.html', '<br>');    
},1000);

// wait 2s  and check 
setTimeout(function(){
    console.log('exists htmlmin/b',fs.existsSync('htmlmin/b'));
    console.log('exists htmlmin/b/c.html',fs.existsSync('htmlmin/b/c.html'));
},2000);
