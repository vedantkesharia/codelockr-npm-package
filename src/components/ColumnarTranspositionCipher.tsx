export function ColumnarTranspositionCipher(text: string, key: number[]): string {
    const columns = key.length;
    const rows = Math.ceil(text.length / columns);
    const transposed: string[] = Array(columns).fill('');
    
    for (let i = 0; i < text.length; i++) {
        transposed[i % columns] += text[i];
    }

    return key.map(index => transposed[index - 1]).join('');
}
