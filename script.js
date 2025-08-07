const emojis = ['🎈', '🎉', '🌸', '🎊', '💐'];
const maxEmojis = 20;

function dropEmoji() {
  const emoji = document.createElement('div');
  emoji.classList.add('falling-emoji');
  emoji.innerText = emojis[Math.floor(Math.random() * emojis.length)];
  emoji.style.left = Math.random() * 100 + 'vw';
  emoji.style.fontSize = Math.random() * 24 + 20 + 'px';
  emoji.style.animationDuration = 4 + Math.random() * 4 + 's';
  document.body.appendChild(emoji);

  setTimeout(() => emoji.remove(), 8000);
}

setInterval(() => {
  if (document.querySelectorAll('.falling-emoji').length < maxEmojis) {
    dropEmoji();
  }
}, 300);
