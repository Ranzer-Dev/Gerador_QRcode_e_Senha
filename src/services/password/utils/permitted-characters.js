export default async function permittedCharacters() {
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