const venom = require('venom-bot');

venom
  .create({
    session: 'ikram-session', // session ka naam
    multidevice: true         // multi-device support
  })
  .then((client) => start(client))
  .catch((erro) => {
    console.log(erro);
  });

function start(client) {
  client.onMessage((message) => {
    if (message.body.toLowerCase() === 'hi') {
      client.sendText(message.from, 'Hello! 👋 Main Ikram ka Venom Bot hoon.');
    }
  });
}
