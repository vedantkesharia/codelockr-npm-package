export function railFenceCipher(text: string, rails: number): string {
    const fence: string[] = Array(rails).fill('');
    let rail = 0;
    let down = false;

    for (let i = 0; i < text.length; i++) {
        fence[rail] += text[i];
        if (rail === 0 || rail === rails - 1) down = !down;
        rail += down ? 1 : -1;
    }

    return fence.join('');
}
