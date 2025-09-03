import React from 'react'; 
import 'bootstrap/dist/css/bootstrap.css';
import * as estilo from './mystyles.scss'
import ReactDOM from 'react-dom/client';
import logoImg from "./content/logo_2.png";



const img = document.createElement("img");
img.src = logoImg;

document.getElementById("imgContainer").appendChild(img);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <div>
    <h1 className={estilo.estiloSass}>Hola mundo con React</h1>
  </div>
);