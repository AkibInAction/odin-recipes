import fs from 'fs';
import prompt from 'prompt-sync';
const input = prompt();

function getsignOptions() {
    let option = {
        "1": "sign in",
        "2": "sign up",
        "3": "login"
    };
    return option; // Train data lekar wapas aayi!
}

let cli_insta = input("open insta (yes/no): ").toLowerCase().trim();

if (cli_insta == "yes") {
    console.log("\nopening insta .. .\n");
    
    let signinoption = getsignOptions();
    
    // User ko clean options dikhayein
    console.log("=== SELECT OPTION ===");
    console.log(`1. ${signinoption["1"]}`);
    console.log(`2. ${signinoption["2"]}`);
    console.log(`3. ${signinoption["3"]}\n`);

    let useroption = input("enter your option: ").trim();
     
    if (useroption == "1") {
        console.log("\n✅ Option Selected: Sign In");
    } else if (useroption == "2") {
        console.log("\n✅ Option Selected: Sign Up");
    } else if (useroption == "3") {
        console.log("\n✅ Option Selected: Login");
    } else {
        console.log("\n❌ Invalid option entered!");
    }

} else {
    console.log("fatal error to launch insta");
}