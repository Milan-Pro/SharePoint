//gulp build: to run,gulp -task to run task, gulp task name to run perticular task 

//GULP SCRIPT TO INCREMENT VERSION NUMBERS -
'use strict';
const gulp = require('gulp');
 
const fs = require('fs');
 
const build = require('@microsoft/sp-build-web');
 
build.addSuppression(`Warning - [sass] The local CSS class 'ms-Grid' is not camelCase and will not be type-safe.`);
 
var getFileAsJSON = function(file) {
    return JSON.parse(fs.readFileSync(file,'utf-8'));
}
 
let incrVersion = build.subTask('increment-version-subtask',function(gulp,options,done) {
    this.log("Starting Increment Version... ");
    var packageJSON = getFileAsJSON('package.json');
    this.log("Package Version : " + packageJSON.version);
 
    var packageSoln = getFileAsJSON("./config/package-solution.json");
 
    var packageVersion = packageJSON.version;
 
    var oldBuildNo = parseInt(packageSoln.solution.version.split(".")[3]);
    this.log("Old Build # " + oldBuildNo);
 
    var newBuildNo = oldBuildNo + 1;
 
    this.log("New Build # " + newBuildNo);
 
    var newVersion = packageVersion + "." + newBuildNo;
    this.log("New Package Solution Version # " + newVersion);
 
    // Write over here
    packageSoln.solution.version = newVersion;
 
    fs.writeFile('./config/package-solution.json',JSON.stringify(packageSoln,null,4),function(err) {
        console.log(err);
    });;
 
    return gulp.src('./config/package-solution.json')
        .pipe(gulp.dest('./config'));
});
 
let copyImages = build.subTask("copy-images-subtask",function (gulp, options, done) {
    this.log("Starting Copy Images task...");
 
    return gulp.src('images/**/*.jpg')
            .pipe(gulp.dest('public/images'));
});
 
build.task("copy-images",copyImages);
build.task('incr-version',incrVersion);
 
build.rig.addPostTypescriptTask(copyImages);
build.rig.addPreBuildTask(incrVersion);
 
 
build.initialize(gulp);