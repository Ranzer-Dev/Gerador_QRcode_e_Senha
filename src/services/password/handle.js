async function permittedCharacters() {
    let permitted = []

    if (process.env.UPPERCASE_LETTERS === 'true') {
        permitted.push(... "ABCDEFGHIJKLMNOPQRSTUVXYZ")
    }

    if (process.env.LOWERCASE_LETTERS === 'true') {
        permitted.push(... "abcdefghijklmnopqrstuvxyz")
    }

    if (process.env.NUMBERS === 'true') {
        permitted.push(... "1234567890")
    }

    if (process.env.SPECIAL_CARACTERS === 'true') {
        permitted.push(... "!@#$%¨&*_/-=+")
    }

    return permitted
}

async function handle() {
    let characters = []
    let password = ""

    const passwordLength = process.env.PASSWORD_LENGTH
    characters = await permittedCharacters();
    for (let i = 0; i < passwordLength; i++) {
        const index = Math.floor(Math.random() * characters.length)
        password += characters[index];
    }

    return password
    
}

export default handle;