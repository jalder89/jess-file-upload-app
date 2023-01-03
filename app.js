// initial slack app setup
const { App } = require('@slack/bolt');
require('dotenv').config();
const fileUpload = require('./functions/fileUpload');

const app = new App({
    token: process.env.SLACK_BOT_TOKEN,
    signingSecret: process.env.SLACK_SIGNING_SECRET
});

// Lsitens for shortcut event callback file_upload_test
app.shortcut('file_upload_test', async ({ ack, client }) => {
    // Acknowledge shortcut request
    await ack();

    // Call fileUpload function
    fileUpload.uploadFile(client);
});

// Start your app
(async () => {
    // Start your app
    await app.start(process.env.PORT || 3000);

    console.log('⚡️ Bolt app is running!');
})();