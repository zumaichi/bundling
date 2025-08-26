import styles from './App.module.css';

const message = import.meta.env.VITE_MESSAGE;

const h1 = document.createElement('h1');
h1.textContent = message;
h1.className = styles.title;

document.body.appendChild(h1);

console.log('Mensaje:', message);