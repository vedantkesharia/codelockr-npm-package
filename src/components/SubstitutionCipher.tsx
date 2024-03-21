export function substitutionCipher(text: string, substitutionTable: { [key: string]: string }): string {
    return text.replace(/[a-zA-Z]/g, (char) => {
        const offset = char.charCodeAt(0) >= 65 && char.charCodeAt(0) <= 90 ? 65 : 97;
        const originalChar = String.fromCharCode(char.charCodeAt(0) - offset + 65);
        return substitutionTable[originalChar] || char;
    });
}
