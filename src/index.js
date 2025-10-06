import prompt  from "prompt";
import mainPrompt from "./prompts-schema/prompt-main.js"
import createQRcode from "./services/qrcode/create.js";
import createPassword from "./services/password/create.js";

async function main() {
    prompt.get(mainPrompt, async (err, choose)=> {
        if (err){
            console.log(err)
            return
        }
        if (choose.select == 1) await createQRcode()
        if (choose.select == 2) await createPassword()
    })
    
    prompt.start()
}

main()