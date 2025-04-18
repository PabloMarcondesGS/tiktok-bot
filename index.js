const { WebcastPushConnection } = require('tiktok-live-connector');

const tiktokUsername = 'nomedousuario';

// Cria uma nova conexão
let tiktokLiveConnection = new WebcastPushConnection(tiktokUsername);

// Conecta à live
tiktokLiveConnection.connect().then(state => {
    console.log(`✅ Conectado à live de @${tiktokUsername}`);
}).catch(err => {
    console.error('❌ Erro ao conectar:', err);
});

// Escuta eventos de curtida
tiktokLiveConnection.on('like', data => {
    console.log(`❤️ ${data.uniqueId} deu ${data.likeCount} curtidas`);
});