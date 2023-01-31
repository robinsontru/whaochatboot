const qrcode = require('qrcode-terminal');

const { Client, LocalAuth } = require('whatsapp-web.js');

const client = new Client({
    authStrategy: new LocalAuth()
});


client.on('qr', qr => {
    qrcode.generate(qr, {small: true});
    console.log('No tienes una session iniciada');

});

client.on('ready', () => {
    console.log('inicio de session correcta!');
});

client.on('message', message => {
	console.log(message.body);
});

client.on('message', message => {
	if(message.body === 'HOLA') {
        message.reply('HOLA :)v soy el chat bot de este numero ');	}
      
});

client.initialize();
