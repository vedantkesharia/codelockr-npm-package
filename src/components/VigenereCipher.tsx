export default function vigenereCipher(text: string, keyword: string): string {
    const key = keyword.repeat(Math.ceil(text.length / keyword.length)).slice(0, text.length);
    return text.replace(/[a-zA-Z]/g, (char, i) => {
        const textOffset = char.charCodeAt(0) >= 65 && char.charCodeAt(0) <= 90 ? 65 : 97;
        const keyOffset = key.charCodeAt(i) >= 65 && key.charCodeAt(i) <= 90 ? 65 : 97;
        const shift = (key.charCodeAt(i) - keyOffset) % 26;
        return String.fromCharCode(((char.charCodeAt(0) - textOffset + shift) % 26) + textOffset);
    });
}
