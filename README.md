<h1><strong>codelockr: A Versatile JavaScript/Typescript Cryptography Library</strong></h1>

<p>This JavaScript/Typescript library, <strong>codelockr</strong>, empowers you to explore and implement a wide range of classical ciphers directly within your web applications. It provides user-friendly functions for various encryption and decryption techniques, making it an ideal tool for:</p>

<ul>
  <li><strong>Educational purposes:</strong> Learn about classical ciphers and how they work.</li>
  <li><strong>Cryptography enthusiasts:</strong> Experiment with different ciphers and their functionalities.</li>
  <li><strong>Developers:</strong> Integrate basic encryption functionalities into your projects.</li>
</ul>

<h2><strong>Installation</strong></h2>

<p>To install codelockr in your project, use either npm or yarn:</p>

<pre><code>npm install codelockr
</code></pre>

<p>or</p>

<pre><code>yarn add codelockr
</code></pre>

<h2><strong>Available Ciphers</strong></h2>

<p><strong>codelockr</strong> offers a rich set of cipher implementations, each with its own encryption methods. Here's a table outlining the supported ciphers and how to use them:</p>

<table>
  <thead>
    <tr>
      <th>Cipher</th>
      <th>Description</th>
      <th>Import Statement</th>
      <th>Encryption Method</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Caesar Cipher</td>
      <td>Shifts plaintext letters by a specified number of positions.</td>
      <td>`import { CaesarCipher } from 'codelockr';`</td>
      <td>`CaesarCipher(plaintext, shift)`</td>
    </tr>
    <tr>
      <td>Rail Fence Cipher</td>
      <td>Encrypts by writing across a specified number of rows (rails) and reading down.</td>
      <td>`import { RailFenceCipher } from 'codelockr';`</td>
      <td>`RailFenceCipher(plaintext, rails)`</td>
    </tr>
    <tr>
      <td>Substitution Cipher</td>
      <td>Replaces plaintext letters with a custom mapping defined in a substitution key.</td>
      <td>`import { SubstitutionCipher } from 'codelockr';`</td>
      <td>`SubstitutionCipher(plaintext, substitutionKey)`</td>
    </tr>
    <tr>
      <td>Atbash Cipher</td>
      <td>Reverses the alphabet (A maps to Z, B maps to Y, etc.).</td>
      <td>`import { AtbashCipher } from 'codelockr';`</td>
      <td>`AtbashCipher(plaintext)`</td>
    </tr>
    <tr>
      <td>Beaufort Cipher</td>
      <td>Combines Caesar ciphers with a keyword for a more complex encryption.</td>
      <td>`import { BeaufortCipher } from 'codelockr';`</td>
      <td>`BeaufortCipher(plaintext, keyword)`</td>
    </tr>
    <tr>
      <td>Autokey Cipher</td>
      <td>Uses the plaintext itself as a keystream, where each letter's shift is based on the previous ciphertext letter.</td>
      <td>`import { AutokeyCipher } from 'codelockr';`</td>
      <td>`AutokeyCipher(plaintext, keyword)`</td>
    </tr>
    <tr>
      <td>Columnar Transposition</td>
      <td>Rearranges letters based on a permutation order defined in a key.</td>
      <td>`import { ColumnarTranspositionCipher } from 'codelockr';`</td>
      <td>`ColumnarTranspositionCipher(plaintext, columnarTranspositionKey)`</td>
    </tr>
    <tr>
      <td>Vigenere Cipher</td>
      <td>Uses a repeating keyword to shift letters by varying amounts.</td>
      <td>`import { VigenereCipher } from 'codelockr';`</td>
      <td>`VigenereCipher(plaintext, keyword)`</td>
    </tr>
    <tr>
      <td>Playfair Cipher</td>
      <td>Creates a bigram square based on a key and encrypts letter pairs.</td>
      <td>`import { PlayfairCipher } from 'codelockr';`</td>
      <td>`PlayfairCipher(plaintext, keyword)`</td>
    </tr>
    <tr>
      <td>Polybius Square Cipher</td>
      <td>Assigns numbers (1-25) to letters in a 5x5 grid for encryption/decryption.</td>
      <td>`import { PolybiusSquareCipher } from 'codelockr';`</td>
      <td>`PolybiusSquareCipher(plaintext)`</td>
    </tr>
  </tbody>
</table>
