import prompt from "prompt";
import promptQRcode from "../../prompts/prompt-qrcode.js";
import handle from "./handle.js";

export default async function createQRcode() {
    prompt.get(promptQRcode, handle)

    prompt.start()
}