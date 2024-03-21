export function CaesarCipher(text: string, shift: number): string {
    return text.replace(/[a-zA-Z]/g, (char) => {
        const code = char.charCodeAt(0);
        let offset = code >= 65 && code <= 90 ? 65 : 97;
        return String.fromCharCode(((code - offset + shift) % 26) + offset);
    });
}
