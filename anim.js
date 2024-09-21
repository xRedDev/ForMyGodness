// Sincronizar las letras con la canción
var audio = document.querySelector("audio");
var lyrics = document.querySelector("#lyrics");

// Array de objetos que contiene cada línea y su tiempo de aparición en segundos
// var lyricsData = [
//   { text: "At the time", time: 15 },
//   { text: "The whisper of birds", time: 18 },
//   { text: "Lonely before the sun cried", time: 27 },
//   { text: "Fell from the sky", time: 32 },
//   { text: "Like water drops", time: 33 },
//   { text: "Where I'm now? I don't know why", time: 41 },
//   { text: "Nice butterflies in my hands", time: 47 },
//   { text: "Too much light for twilight", time: 54 },
//   { text: "In the mood for the flowers love", time: 59 },
//   { text: "That vision", time: 67 },
//   { text: "Really strong, blew my mind", time: 72 },
//   { text: "Silence Let me see what it was", time: 78 },
//   { text: "I only want to live in clouds", time: 83 },
//   { text: "Where I'm now? I don't know why", time: 91 },
//   { text: "Nice butterflies in my hands", time: 97 },
//   { text: "Too much light for twilight", time: 104 },
//   { text: "In the mood for the flowers love", time: 108 },
//   { text: "At the time", time: 144 },
//   { text: "The whisper of birds", time: 148 },
//   { text: "Lonely before the sun cried", time: 153 },
//   { text: "Fell from the sky", time: 158 },
//   { text: "Like water drops", time: 164 },
//   { text: "Where I'm now? I don't know why", time: 169 },
//   { text: "Nice butterflies in my hands", time: 176 },
//   { text: "Too much light for twilight", time: 183 },
//   { text: "In the mood for the flowers", time: 188 },
//   { text: "Love.", time: 140 },
// ];

var lyricsData = [
  { text: "Look at the stars", time: 33 },
  { text: "Look how they shine for you", time: 35 },
  { text: "And everything you do", time: 43 },
  { text: "Yeah, they were all yellow", time: 47.5 },
  { text: "I came along", time: 49 },
  { text: "I wrote a song for you", time: 52 },
  { text: "And all the things you do", time: 59 },
  { text: "And it was called yellow", time: 64 },
  { text: "So then I took my turn", time: 70 },
  { text: "Oh, what a thing to have done", time: 75 },
  { text: "And it was all yellow", time: 82 },
  { text: "Your skin, oh yeah, your skin and bones", time: 90 },
  { text: "Turn into something beautiful", time: 94 },
  { text: "You know, you know I love you so", time: 100 },
  { text: "You know I love you so", time: 108 },
  { text: "I swam across", time: 132 },
  { text: "I jumped across for you", time: 134 },
  { text: "Oh, what a thing to do", time: 142 },
  { text: "'Cause you were all yellow", time: 147 },
  { text: "I drew a line", time: 150 },
  { text: "I drew a line for you", time: 153 },
  { text: "Oh, what a thing to do", time: 159 },
  { text: "And it was all yellow", time: 164 },
  { text: "Your skin, oh yeah, your skin and bones", time: 173 },
  { text: "Turn into something beautiful", time: 177 },
  { text: "And you know", time: 181 },
  { text: "For you, I'd bleed myself dry", time: 185 },
  { text: "For you, I'd bleed myself dry", time: 190 },
  { text: "It's true...", time: 216 },
  { text: "Look how they shine for you", time: 221 },
  { text: "Look how they shine for you", time: 225 },
  { text: "Look how they shine for...", time: 231 },
  { text: "Look how they shine for you", time: 236 },
  { text: "Look how they shine for you", time: 241 },
  { text: "Look how they shine...", time: 246 },
  { text: "Look at the stars", time: 247 },
  { text: "Look how they shine for you", time: 251 },
  { text: "And all the things that you do", time: 259 },
  { text: "Te adoro, mi querida gatita <3", time: 264 },
];


// Animar las letras
function updateLyrics() {
  var time = Math.floor(audio.currentTime);
  var currentLine = lyricsData.find(
    (line) => time >= line.time && time < line.time + 6
  );

  if (currentLine) {
    // Calcula la opacidad basada en el tiempo en la línea actual
    var fadeInDuration = 0.1; // Duración del efecto de aparición en segundos
    var opacity = Math.min(1, (time - currentLine.time) / fadeInDuration);

    // Aplica el efecto de aparición
    lyrics.style.opacity = opacity;
    lyrics.innerHTML = currentLine.text;
  } else {
    // Restablece la opacidad y el contenido si no hay una línea actual
    lyrics.style.opacity = 0;
    lyrics.innerHTML = "";
  }
}

setInterval(updateLyrics, 500);

//funcion titulo
// Función para ocultar el título después de 216 segundos
function ocultarTitulo() {
  var titulo = document.querySelector(".titulo");
  titulo.style.animation =
    "fadeOut 3s ease-in-out forwards"; /* Duración y función de temporización de la desaparición */
  setTimeout(function () {
    titulo.style.display = "none";
  }, 3000); // Espera 3 segundos antes de ocultar completamente
}

// Llama a la función después de 216 segundos (216,000 milisegundos)
setTimeout(ocultarTitulo, 216000);