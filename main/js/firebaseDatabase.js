firebase.initializeApp({
  apiKey: "AIzaSyDyqWMuRtuH6p9f0dfne6XkBlV3wszJKMo",
  authDomain: "scoultimate.firebaseapp.com",
  projectId: "scoultimate"
});

var db = firebase.firestore();

function addData(){
    db = firebase.firestore();
    db.collection("users").add({
    first: "Ada",
    last: "Lovelace",
    born: 1815
})
.then(function(docRef) {
    console.log("Document written with ID: ", docRef.id);
})
.catch(function(error) {
    console.error("Error adding document: ", error);
});

}