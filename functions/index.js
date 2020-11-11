const admin = require('firebase-admin');
const functions = require('firebase-functions');
const app = require('express')();

admin.initializeApp();

const config = {
    apiKey: "AIzaSyBCV1Y9TtrFjo7CP51nmim6iLlcZuoDJiE",
    authDomain: "socialapp-d7997.firebaseapp.com",
    databaseURL: "https://socialapp-d7997.firebaseio.com",
    projectId: "socialapp-d7997",
    storageBucket: "socialapp-d7997.appspot.com",
    messagingSenderId: "504905807989",
    appId: "1:504905807989:web:d526aed5098755c2c2a03c",
    measurementId: "G-G4KT0EXKMZ"
};

const firebase = require('firebase');
firebase.initializeApp(config);

const db = admin.firestore();

app.get('/screams', (req, res) => {
    db.collection('screams')
        .orderBy('createdAt', 'desc')
        .get()
        .then((data) => {
            let screams = [];
            data.forEach((doc) => {
                screams.push({
                    screamId: doc.id,
                    body: doc.data().body,
                    userHandle: doc.data().userHandle,
                    createdAt: doc.data().createdAt
                });
            });
            return res.json(screams);
        })
        .catch((err) => console.error(err));
});

app.post('/scream', (req, res) => {
    const newScream = {
        body: req.body.body,
        userHandle: req.body.userHandle,
        createdAt: new Date().toISOString()
    };
    db.collection('screams')
        .add(newScream)
        .then(doc => {
            res.json({ message: `document ${doc.id} created successfully` });
        })
        .catch(err => {
            res.status(500).json({ error: 'something went wrong' });
            console.error(err);
        })
})

//signup route
app.post('/signup', (req, res) => {
    const newUser = {
        email: req.body.email,
        password: req.body.password,
        confirmPassword: req.body.confirmPassword,
        handle: req.body.handle,
    };

    //TODO validate data
    let token, userId;

    db.doc(`/users/${newUser.handle}`).get()
        .then(doc => {
            if (doc.exist) {
                return res.status(400).json({
                    handle: 'this handle is laready taken'
                });
            } else {
                return firebase
                    .auth().createUserWithEmailAndPassword(newUser.email, newUser.password)

            }
        })
        .then(data => {
            userId = data.user.uid;
            return data.user.getIdToken()
        })
        .then((idToken) => {
            token = idToken;
            const userCredentials = {
                handle: newUser.handle,
                email: newUser.email,
                createdAt: new Date().toISOString(),
                userId
            };
            return db.doc(`/users/${newUser.handle}`).set(userCredentials);
        })
        .then(() => {
            return res.status(201).json({ token });
        })
        .catch((err) => {
            console.error(err);
            if (err.code === 'auth/email-already-in-use') {
                return res.status(400).json({ email: 'Email is already in use' })
            } else {
                return res.status(500).json({ error: err.code });
            }
        });
});


exports.api = functions.https.onRequest(app);