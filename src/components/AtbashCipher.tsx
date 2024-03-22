export default function AtbashCipher(text: string): string {
    return text.replace(/[a-zA-Z]/g, (char) => {
        const code = char.charCodeAt(0);
        let offset = code >= 65 && code <= 90 ? 65 : 97;
        return String.fromCharCode((25 - (code - offset)) + offset);
    });
}
