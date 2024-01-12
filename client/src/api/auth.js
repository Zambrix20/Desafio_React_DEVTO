// import axios from 'axios';
import axios from "./axios";

// const API_URL = 'http://localhost:4000/api';

// Usamos el user que nos llega por parámetro para hacer la petición al servidor,
// el user es el objeto que contiene el email y el password del usuario, ademas del token que se genera en el servidor
export const registerRequest = user => axios.post(`/register`, user);

// Usamos el user que nos llega por parámetro para hacer la petición al servidor,
// Esta es una peticion de tipo post, ya que estamos enviando datos al servidor y asi hacer el login
export const loginRequest = user => axios.post(`/login`, user);

// Hacemos una petición al servidor para que nos devuelva los datos del usuario que esta logueado
export const verifyTokenRequest = () => axios.get(`/verify`);
