import * as firebase from 'firebase';

const config = {
    apiKey: "AIzaSyAHv2CC-xWrHZecpzPnERNEUnxkX0wgloI",
    authDomain: "expensify-fd695.firebaseapp.com",
    databaseURL: "https://expensify-fd695.firebaseio.com",
    projectId: "expensify-fd695",
    storageBucket: "expensify-fd695.appspot.com",
    messagingSenderId: "549581787291",
    appId: "1:549581787291:web:09462666780354091bb63e",
    measurementId: "G-0DBZYXJ88Z"
  };

  firebase.initializeApp(config);

  const database = firebase.database();

  database.ref().set({
    name: 'Kyle Anderson',
    age: 25,
    isSingle: false,
    location: {
        city: 'Austin',
        country: 'United States'
    }
  });

//   database.ref().set('This is my data');

database.ref('age').set(27);
database.ref('location/city').set('New York');

database.ref('attributes').set({
    height: 73,
    weight: 175
});