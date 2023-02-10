// const { initializeApp } = require('firebase-admin/app');
var admin = require("firebase-admin");
var serviceAccount = require("../../../firebase-adminsdk.json");

if (!admin?.apps?.length) {
  admin.initializeApp({
    credential: admin.credential.cert(serviceAccount)
  });
}

export const pushFirebaseNotification = async(tokens, data) => {
  const message = {
    notification: {
      title: data.title,
      body: data.message
    },
    tokens,
  };
  admin.messaging().sendMulticast(message)
    .then(function(response) {
      console.log("Successfully sent message:", response);
    })
    .catch(function(error) {
      console.log("Error sending message:", error);
    });
}
