// initial slack app setup
const { App } = require('@slack/bolt');
const { config } = require('dotenv');

const app = new App({
    token: process.env.SLACK_BOT_TOKEN,
    signingSecret: process.env.SLACK_SIGNING_SECRET
});

// The name of the file you're going to upload
const fileName = "./files/being-silly-hey.gif";
// ID of channel that you want to upload file to
const channelId = "C12345";

try {
  // Call the files.upload method using the WebClient
  const result = await client.files.upload({
    // channels can be a list of one to many strings
    channels: channelId,
    initial_comment: "Here\'s my file :smile:",
    // Include your filename in a ReadStream here
    file: createReadStream(fileName)
  });

  console.log(result);
}
catch (error) {
  console.error(error);
}


// Start your app
(async () => {
    // Start your app
    await app.start(process.env.PORT || 3000);

    console.log('⚡️ Bolt app is running!');
})();