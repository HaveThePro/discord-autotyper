const dc = require('./discord');
const { sig } = require("./utils/sig");

(async () => {
    sig();

    await dc.initialize();
    // here is where you enter your email and password
    await dc.login('gamerthelol123@gmail.com', 'Farfalla1234')

    await dc.likeChannelProcess('851548488566439946', 'https://discord.com/channels/851548488566439946/1136800667525193819', 1) // 1 = 1 minute

    debugger;

})();
