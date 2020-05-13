const functions = require('firebase-functions');
const admin = require('firebase-admin');

exports.setAdminAccess = functions.https.onCall(async email => {
  const user = await admin.auth().getUserByEmail(email);
  await admin.auth().setCustomUserClaims(user.uid, {
    admin: true,
  });
});
