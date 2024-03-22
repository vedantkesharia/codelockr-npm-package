export function PlayfairCipher(text: string, key: string): string {
    const prepareKey = (key: string) => {
        const sanitizedKey = key.toUpperCase().replace(/[^A-Z]/g, '');
        const uniqueChars = Array.from(new Set(sanitizedKey));
        const alphabet = 'ABCDEFGHIKLMNOPQRSTUVWXYZ';
        const keyMatrix = [uniqueChars];

        for (let char of alphabet) {
            if (!uniqueChars.includes(char)) {
                keyMatrix[keyMatrix.length - 1].push(char);
                if (keyMatrix[keyMatrix.length - 1].length === 5) {
                    keyMatrix.push([]);
                }
            }
        }

        return keyMatrix;
    };

    const findPosition = (matrix: string[][], char: string) => {
        for (let row = 0; row < matrix.length; row++) {
            const col = matrix[row].indexOf(char);
            if (col !== -1) {
                return { row, col };
            }
        }
        return null;
    };

    const keyMatrix = prepareKey(key);
    let ciphertext = '';

    for (let i = 0; i < text.length; i += 2) {
        let pair = text[i];
        if (i + 1 < text.length && text[i] === text[i + 1]) {
            pair += 'X';
            i--;
        } else if (i + 1 < text.length) {
            pair += text[i + 1];
        } else {
            pair += 'X';
        }

        const pos1 = findPosition(keyMatrix, pair[0]);
        const pos2 = findPosition(keyMatrix, pair[1]);

        let encryptedPair = '';
        if (pos1 && pos2) {
            if (pos1.row === pos2.row) {
                encryptedPair += keyMatrix[pos1.row][(pos1.col + 1) % 5];
                encryptedPair += keyMatrix[pos2.row][(pos2.col + 1) % 5];
            } else if (pos1.col === pos2.col) {
                encryptedPair += keyMatrix[(pos1.row + 1) % 5][pos1.col];
                encryptedPair += keyMatrix[(pos2.row + 1) % 5][pos2.col];
            } else {
                encryptedPair += keyMatrix[pos1.row][pos2.col];
                encryptedPair += keyMatrix[pos2.row][pos1.col];
            }
        }

        ciphertext += encryptedPair;
    }

    return ciphertext;
}
