async function permittedCharacters() {
    const permitted = []

    if (process.env.UPPERCASE_LETTERS === 'true') {
        character.push(... "ABCDEFGHIJKLMNOPQRSTUVXYZ")
    }

    if (process.env.LOWERCASE_LETTERS === 'true') {
        character.push(... "abcdefghijklmnopqrstuvxyz")
    }

    if (process.env.NUMBERS === 'true') {
        character.push(... "1234567890")
    }

    if (process.env.SPECIAL_CARACTERS === 'true') {
        character.push(... "!@#$%¨&*_/-=+")
    }

    for (let i = 0; i < passwordLength; i++) {
        const index = Math.floor(Math.random() * character.length)
        password += characters[index];
    }

    return permitted
}

export default async function handle() {
    let character = []
    let password = ""

    const passwordLength = process.env.PASSWORD_LENGTH
    character = await permittedCharacters();

    return index
}