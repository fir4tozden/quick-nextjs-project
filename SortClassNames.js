/*
  If you want the contents of className to be more organized, run this script with a new terminal or open the file SortClassNames.bat
*/

const fs = require("node:fs");
const path = require("node:path");

var root_dirs = [
  path.join(__dirname, "pages"),
  path.join(__dirname, "components")
];

var interval = 5000;

function sortClassNames(s){let r=s.split(" ");return r.sort(),r.join(" ")}function sortClassNamesInDir(s){fs.readdir(s,(r,e)=>{if(r){console.log(r);return}e.forEach(r=>{let e=path.join(s,r);fs.stat(e,(s,r)=>{if(s){console.log(s);return}r.isDirectory()?sortClassNamesInDir(e):r.isFile()&&fs.readFile(e,"utf8",(s,r)=>{if(s){console.log(s);return}let i=r.replace(/className="(.*?)"/g,(s,r)=>`className="${sortClassNames(r)}"`);fs.writeFile(e,i,s=>{if(s){console.log(s);return}console.log(`File updated: ${e}`)})})})})})}function scanDirectories(){root_dirs.forEach(s=>{sortClassNamesInDir(s)})}scanDirectories();setInterval(scanDirectories,interval);