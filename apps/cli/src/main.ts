import fetch from 'node-fetch';
import { Game } from '@bg-hoard/util-interface';

const port = process.env.port || 3333;
const baseUrl = `http://localhost:${port}/api`;
let fetchUrl = baseUrl;

if (process.argv.length >= 3 && process.argv[2]) {
    // this doesn't work yet
    fetchUrl = `${baseUrl}/games/${process.argv}`
} else {
    fetchUrl = `${baseUrl}/games`
}

console.log('This is a new message!')

fetch(fetchUrl).then(response => response.json().then((val: Game[]) => {
  console.log(val.map(game => `${game.name}: ${game.description}`).join('\\n'));
}));