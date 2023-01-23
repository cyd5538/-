const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().split("\n");

let result = [];
for (let tex of input) {
  const ans = [];
  let res = true;
  if(tex == ".") break;
  for(let i = 0; i < tex.length; i++) {
    if(tex[i] === "(" || tex[i] === "["){
        ans.push(tex[i]);
    }else if(tex[i] === ")"){
        if(ans[ans.length-1] === "("){
            ans.pop();
        }else{
            res = false;
            break;
        }
    }else if(tex[i] === "]"){
        if(ans[ans.length-1] === "["){
            ans.pop();
        }else{
            res = false;
            break;
        }
    }else if(tex[i] === "."){
        break;
    }
  }
  if(ans.length > 0 || !res) result.push("no");
  else result.push("yes");
}
console.log(result.join("\n"))
