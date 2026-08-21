
import fs from 'fs';
import prompt from 'prompt-sync';
const input = prompt();

let cli_insta = input("open insta yes/no: ").toLowerCase().trim();
if (cli_insta == "yes") {
    let signinoption = getsignOptions();
    console.log("\nopening insta .. .\n");
    console.log("\n=== SELECT OPTION ===\n");
    console.log(`1. ${signinoption["1"]}`);
    console.log(`2. ${signinoption["2"]}\n`);
  

    let useroption = input("enter your option: ").trim();
    if (useroption == "1") {

    } else if (useroption == "2") {
        let sign_up = siGup();
        console.log(sign_up);


    } else if (useroption == "3") {

    } else {

    }
}
else {
    console.log("fatal error to launch insta");
}
function getsignOptions() {
    let option = {
        "1": "sign in",
        "2": "sign up",
        
    };
    return option;
}

function siGup() {
    let gmail = input("enter your gmail: ").trim();
    let password = input("enter your password: ").trim();
    let user_name = input("make user name: ").trim();
     fs.writeFileSync("pass_data.json", JSON.stringify({ gmail, password, user_name, followers: 0, following: 0, posts: 0 }));
   
    return { gmail, password, user_name };

}
let rawdata = fs.readFileSync("pass_data.json", "utf8");
 let sign_data = JSON.parse(rawdata);










