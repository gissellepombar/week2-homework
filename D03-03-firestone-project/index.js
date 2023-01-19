//import (3)
//initialize
//db
//create object
//add

import { initializeApp, cert } from "firebase-admin/app";
import { getFirestore } from "firebase-admin/firestore";
import { service_account } from "./secrets.js";

initializeApp({ 
    credential: cert(service_account)
});

const db = getFirestore();

//Using Firestore, create a collection of your favorite childhood toys/games(at least 5)
const childhoodGames = {
    game: 'checkers',
    type: 'board game',
    difficultyLevel: 'easy/medium'
};

// db.collection('Activities')
//     .add(childhoodGames)
//     .then(doc => console.log('Activity has been logged ', doc.id))
//     .catch(console.error);

db.collection('Activities')
    .get()
    .then(collection => {
        const activities = collection.docs.map(doc => {
            let activity = doc.data();
            activity.id = doc.id;
            return activity;
            })
        console.table(activities)
    })
    .catch(console.error)