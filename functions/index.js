const functions = require('firebase-functions');
const app = require('express')();
const FBAuth = require('./util/fbauth')
const { getAllScreams, postOneScream } = require('./handlers/screams');
const { signup, login, uploadImage } = require('./handlers/users');

//scream routes
app.get('/screams', getAllScreams);
//post one scream
app.post('/scream', FBAuth, postOneScream)
    //signup route
app.post('/signup', signup);
//login route
app.post('/login', login);

app.post('/user/image', FBAuth, uploadImage);


exports.api = functions.https.onRequest(app);