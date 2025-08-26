import './mystyles.scss';
import 'bootstrap/dist/css/bootstrap.css';
import { createRoot } from "react-dom/client";
import logoImg from "./content/logo_2.png";

const img = document.createElement("img");
img.src = logoImg;

const imgContainer = document.getElementById("imgContainer");
if (imgContainer) {
  imgContainer.appendChild(img);
} else {
  console.error('No se encontró el elemento con id "imgContainer"');
}

const container = document.getElementById("root");
if (container) {
  const root = createRoot(container);
  root.render(
    <div>
      <h1 className="estiloSass">Hola mundo con react</h1>
    </div>
  );
} else {
  console.error('No se encontró el elemento con id "root"');
}