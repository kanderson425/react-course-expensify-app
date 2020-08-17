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

  // child_removed
  database.ref('expenses').on('child_removed', (snapshot) => {
    console.log(snapshot.key, snapshot.val());
  });

  // child_changed
  database.ref('expenses').on('child_changed', (snapshot) => {
    console.log(snapshot.key, snapshot.val());
  });

  database.ref('notes/-MEwUmHiGWKTz8w5p6FR').remove();

  database.ref('expenses')
  .once('value')
  .then((snapshot) => {
    const expenses = [];
    snapshot.forEach((childSnapshot) => {
      expenses.push({
        id: childSnapshot.key,
        ...childSnapshot.val()
      });
    });

    console.log(expenses);
  });

// database.ref('expenses').on('value', (snapshot) => {
//   const expenses = [];
//     snapshot.forEach((childSnapshot) => {
//       expenses.push({
//         id: childSnapshot.key,
//         ...childSnapshot.val()
//       });
//     });
//     console.log(expenses);
// });


  // database.ref('expenses').push({
  //   description: 'Rent',
  //   note: 'Expense 1 note',
  //   amount: 109500,
  //   createdAt: 1230871209387120938
  // });



// FETCHING DATA
// database.ref('location/city')
// .once('value')
// .then((snapshot) => {
//   const val = snapshot.val();
//   console.log(val);
// }).catch((e) => {
//   console.lot('Error fetching data', e);
// });



  // database.ref().set({
  //   name: 'Kyle Anderson',
  //   age: 25,
  //   stressLevel:  6,
  //   job: {
  //     title: 'Software Developer',
  //     company: 'Google'
  //   },
  //   location: {
  //       city: 'Austin',
  //       country: 'United States'
  //   }
  // }).then(() => {
  //   console.log('Data is saved!');
  // }).catch((e) => {
  //   console.log('This failed!', e);
  // });

// DELETION
// database.ref('isSingle')
// .remove()
// .then(() => {
//   console.log('Did remove data')
// }).catch((e) => {
//   console.log('Did not remove data', e)
// });

// UPDATE
// database.ref().update({
//   stressLevel: 9,
//   'job/company': 'Amazon',
//   'location/city': 'Seattle'
// });

