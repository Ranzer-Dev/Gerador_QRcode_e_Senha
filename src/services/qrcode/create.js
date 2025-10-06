import prompt from "prompt";
import promptQRcode from "../../prompts-schema/prompt-qrcode.js";
import handle from "./handle.js";

export default async function createQRcode() {
    prompt.get(promptQRcode, handle)

    prompt.start()
}