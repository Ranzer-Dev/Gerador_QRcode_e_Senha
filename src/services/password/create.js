import chalk from "chalk";
import handle from "./handle";

export default async function createPassword() {
    console.log(chalk.green("Password"))
    const password= await handle();
    console.log(password)
}