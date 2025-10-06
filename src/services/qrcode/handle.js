import chalk from "chalk";
import QR from "qrcode-terminal"

async function handle(err, result){
    if(err){
        console.log("error on application");
        return;
    }
    const isSmall = result.type === 2
    QR.generate(result.link, {small: isSmall}, (qrcode) => {
        console.log(chalk.green("QR Code gerado com sucesso:\n"))
        console.log(qrcode)
    })
}

export default handle