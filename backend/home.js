const { ipcMain } = require('electron');
const axios = require('axios');


ipcMain.on('get_allInformation', async (event, arg) => {
    try {
        var response = await axios('https://cat-fact.herokuapp.com/facts?animal_type='+arg);
        var data = await response.data;
        event.reply('get_allInformation-reply', data);
    }catch(err) {
        event.reply('get_allInformation-reply', err);
    }
});