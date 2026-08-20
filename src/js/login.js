import fs from 'fs';


import prompt from "prompt-sync"
const input = prompt();
let user_info ={
    name:"",
    email:""

}
function login(){
    let interuser = input("Enter your name: ");
    let interemail = input("Enter your email: ");
    user_info.name = interuser;
    user_info.email = interemail;
    let convertdata = JSON.stringify(user_info);
    fs.writeFileSync("user_info.json",convertdata);
    const data = fs.readFileSync("user_info.json");
}
 login();