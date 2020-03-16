var ui = new firebaseui.auth.AuthUI(firebase.auth());
const auth = firebase.auth();

var uiConfig = {
  callbacks: {
    signInSuccessWithAuthResult: function(authResult, redirectUrl) {
      // User successfully signed in.
      // Return type determines whether we continue the redirect automatically
      // or whether we leave that to developer to handle.
      return false;
    },
    uiShown: function() {
      // The widget is rendered.
      // Hide the loader.
      document.getElementById('loader').style.display = 'none';
    }
  },
  // Will use popup for IDP Providers sign-in flow instead of the default, redirect.
  signInFlow: 'popup',
  signInSuccessUrl: false,
  signInOptions: [
    // Leave the lines as is for the providers you want to offer your users.
    firebase.auth.EmailAuthProvider.PROVIDER_ID,
    firebase.auth.GoogleAuthProvider.PROVIDER_ID,
    firebase.auth.GithubAuthProvider.PROVIDER_ID,
//    firebase.auth.AnonymousAuthProvider.PROVIDER_ID
  ],
  // Terms of service url.
  tosUrl: '<your-tos-url>',
  // Privacy policy url.
  privacyPolicyUrl: '<your-privacy-policy-url>'
};
firebase.auth().onAuthStateChanged(function(user) {
  if (user) {
    // User is signed in.
      console.log("Successfully signed in with email " + user.email)
      document.getElementById('email').innerHTML = "Signed in as " + user.email;
      ui.stop();
         setTimeout(function () {
      $(".section-1").animate({opacity:1}, 1000);
      $(".subbtn-container").animate({opacity:1}, 3000);
            setTimeout(function () {

                setTimeout(function () {
                $('.test-email').animate({opacity:1}, 1000)
                    }, 100);
                }, 500);
      }, 500);
  } else {
    // No user is signed in.
      document.getElementById('email').innerHTML = "No user Signed In"
      ui.start('#firebaseui-auth-container', uiConfig);
  }
});

function signOut() {
    auth.signOut();
}
