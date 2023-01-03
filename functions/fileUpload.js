const fileName = "./files/being-silly-hey.gif";
const channelId = process.env.SLACK_PRIVATE_CHANNEL_ID;

async function uploadFile() {
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
}

// Export function to be used in app.js
module.exports = { uploadFile };