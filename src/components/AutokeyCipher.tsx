export function autokeyCipher(text: string, key: string): string {
    const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    let ciphertext = '';
    let keyIndex = 0;

    for (let i = 0; i < text.length; i++) {
        const char = text[i];
        let currentKeyChar;

        if (i < key.length) {
            currentKeyChar = key[i];
        } else {
            currentKeyChar = text[keyIndex++];
        }

        const charIndex = alphabet.indexOf(char.toUpperCase());
        const keyCharIndex = alphabet.indexOf(currentKeyChar.toUpperCase());
        if (charIndex === -1) {
            ciphertext += char;
        } else {
            const newIndex = (charIndex + keyCharIndex) % 26;
            ciphertext += alphabet[newIndex];
        }
    }

    return ciphertext;
}
