const moment = require("moment");
const config = require('../config.json')
const axios = require('axios');
moment.locale("tr")

MCIP = config.sunucuIP

function verial() {

	axios.get(`https://api.mcsrvstat.us/1/${MCIP}`).then(res => {
		if(res.data && res.data.players) {
            
            let playerCount = res.data.players.online || 0
            const oyun = `Aktif ${playerCount} kişi  ${playerCount > 1 ? '' : ''}`;
            client.user.setActivity(`${oyun}`, {type: "LISTENING"});
			console.log('Veriler Yenilendi.', playerCount)
		}
		else
			console.log('IP den veri alınamadı.', MCIP)
	}).catch(err => console.log('Veritabanı Hatası.', err))

}


exports.execute = async () => {


  client.user.setStatus("idle");
  setInterval(() => {
    verial();
}, 500000);

};

exports.conf = {
  event: "ready"
};
