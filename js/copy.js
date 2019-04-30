/* global __dirname, require, module*/
/**
 * Created by wangdunwen on 2019/04/30.
 * Latest edited by wangdunwen on 2019/04/30.
 * copy files
 */

const pkg = require('./package.json');
var fs = require("fs");
var combineJs = "";
var combineMinJs = "";

combineJs += "/*! " + pkg.name + " v" + pkg.version + " published at " + new Date() + "*/" + "\n";
combineMinJs += "/*! " + pkg.name + " v" + pkg.version + " published at " + new Date() + "*/" + "\n";

fs.readFile("./lib/Miracle.js", "utf-8", function (err, data) {
  combineJs += data;

  fs.writeFile("../dist/Miracle.js", combineJs, function (err) {
    if (err) {
      console.log("copy failed!");
    }
    console.log("copy Miracle.js to dist success!");
  });

  fs.writeFile("../test/js/Miracle.js", combineJs, function (err) {
    if (err) {
      console.log("copy failed!");
    }
    console.log("copy Miracle.js to test/ success!");
  });
});

fs.readFile("./lib/Miracle.min.js", "utf-8", function (err, data) {
  combineMinJs += data;

  fs.writeFile("../dist/Miracle.min.js", combineMinJs, function (err) {
    if (err) {
      console.log("copy failed!");
    }
    console.log("create Miracle.min.js to dist success!");
  });

  fs.writeFile("../test/js/Miracle.min.js", combineMinJs, function (err) {
    if (err) {
      console.log("copy failed!");
    }
    console.log("copy Miracle.min.js to release success!");
  });
});
