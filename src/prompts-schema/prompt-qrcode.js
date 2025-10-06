import chalk from "chalk";

const promptQRcode = [
    {
        name: "link",
        description: chalk.yellow("Digite o link para gerar o QRcode"),
    },
    {
        name: "type",
        description: chalk.yellow("Escolha entre o tipo (1- Normal ou 2-Terminal)"),
        pattern:/^[1,2]+$/,
        message: chalk.red.italic("Escolha entre 1 ou 2")
    }
]

export default promptQRcode