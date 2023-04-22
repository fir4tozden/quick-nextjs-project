/*
  If you want the contents of className to be more organized, run this script with a new terminal or open the file SortClassNames.bat
*/

const fs = require("node:fs");
const path = require("node:path");
const chokidar = require("chokidar");

var root_dirs = [
  path.join(__dirname, "pages"),
  path.join(__dirname, "components")
];

function sortClassNames(r){let s=r.split(" ");return s.sort(),s.join(" ")}function sortClassNamesInDir(r){fs.readdir(r,(s,e)=>{if(s){console.log(s);return}e.forEach(s=>{let e=path.join(r,s);fs.stat(e,(r,s)=>{if(r){console.log(r);return}s.isDirectory()?sortClassNamesInDir(e):s.isFile()&&fs.readFile(e,"utf8",(r,s)=>{if(r){console.log(r);return}let a=s.replace(/className="(.*?)"/g,(r,s)=>`className="${sortClassNames(s)}"`);a!==s&&fs.writeFile(e,a,r=>{if(r){console.log(r);return}})})})})})}function watchAndScanDirectories(){root_dirs.forEach(r=>{fs.watch(r,{recursive:!0},(s,e)=>{"change"===s&&sortClassNamesInDir(r)})})}root_dirs.forEach(r=>{sortClassNamesInDir(r)}),watchAndScanDirectories();