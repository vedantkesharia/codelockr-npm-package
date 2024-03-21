export function beaufortCipher(text: string, keyword: string): string {
    const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    let ciphertext = '';
    let keyIndex = 0;

    for (let i = 0; i < text.length; i++) {
        const char = text[i];
        let currentKeyChar;

        if (i < keyword.length) {
            currentKeyChar = keyword[i];
        } else {
            currentKeyChar = ciphertext[keyIndex++];
        }

        const charIndex = alphabet.indexOf(char.toUpperCase());
        const keyCharIndex = alphabet.indexOf(currentKeyChar.toUpperCase());
        if (charIndex === -1) {
            ciphertext += char;
        } else {
            const newIndex = (keyCharIndex - charIndex + 26) % 26;
            ciphertext += alphabet[newIndex];
        }
    }

    return ciphertext;
}
