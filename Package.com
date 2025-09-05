
pkg update && pkg upgrade -y
pkg install nodejs git -y

git clone https://github.com/iikramkhan386-del/venom-bot-.git
cd venom-bot-
npm install
node index.js
