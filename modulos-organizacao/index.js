// Importando as funções do arquivo usuarios.js
// Usando import e export
//import { adicionarUsuarios, listarUsuarios, buscarUsuarioPorNome } from './usuarios.js'; 
// Usando require
const { adicionarUsuarios, listarUsuarios, buscarUsuarioPorNome } = require('./usuarios');


const usuarios = listarUsuarios();
console.log(usuarios); // Lista de usuarios existentes

const usuario = buscarUsuarioPorNome('Maria');
console.log(usuario);   // Lista o usuario com nome Maria

const usuarioAdicionado = adicionarUsuarios('Pedro', 40);
console.log(usuarioAdicionado); // Lista de usuarios com o novo usuario Pedro

