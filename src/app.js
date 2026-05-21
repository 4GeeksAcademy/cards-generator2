import "bootstrap";
import "./style.css";

window.onload = function () {
  const simbolos1 = ["♠", "♥", "♦", "♣"];
  const numeros = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"];

  const randomSimbolo = simbolos1[Math.floor(Math.random() * simbolos1.length)];
  const randomNumero = numeros[Math.floor(Math.random() * numeros.length)];

  const simbolos1El = document.getElementById("simbolos1");
  const simbolos2El = document.getElementById("simbolos2");
  const numerosEl = document.getElementById("numeros");

  // Pintar valores
  simbolos1El.innerHTML = randomSimbolo;
  simbolos2El.innerHTML = randomSimbolo;
  numerosEl.innerHTML = randomNumero;

  // Color con Bootstrap
  const isRed = randomSimbolo === "♥" || randomSimbolo === "♦";

  simbolos1El.classList.toggle("text-danger", isRed);
  simbolos2El.classList.toggle("text-danger", isRed);
};