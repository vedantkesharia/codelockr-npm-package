export function BeaufortCipher(text: string, keyword: string): string {
    const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    let ciphertext = '';
  
    for (let i = 0; i < text.length; i++) {
        const char = text[i];
        const keyChar = keyword[i % keyword.length]; // Repeat keyword characters
  
        const charIndex = alphabet.indexOf(char.toUpperCase());
        const keyCharIndex = alphabet.indexOf(keyChar.toUpperCase());
        if (charIndex === -1) {
            ciphertext += char;
        } else {
            const newIndex = (keyCharIndex - charIndex + 26) % 26;
            ciphertext += alphabet[newIndex];
        }
    }
  
    return ciphertext;
  }
  