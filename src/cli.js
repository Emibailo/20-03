//Comand Line Interface (cli)

import pegaArquivo from "./index.js";



//1) criar uma variável para recepcionar o caminho via terminal
const caminho=process.argv;
console.log(caminho);

pegaArquivo(caminho[2]);