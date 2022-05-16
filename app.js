import { signupUser } from './fetch-utils.js';
import { redirectIfLoggedIn } from './fetch-utils.js';
const signInForm = document.getElementById('sign-in');
const signInEmail = document.getElementById('sign-in-email');
const signInPassword = document.getElementById('sign-in-password');

const signUpForm = document.getElementById('sign-up');
const signUpEmail = document.getElementById('sign-up-email');
const signUpPassword = document.getElementById('sign-up-password');


// Wire up sign in and sign up forms to supabase
// Redirect to /other-page on successful auth
// Redirect to /other-page when page loads if user is authenticated

// 1. sign up event

signUpForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    const data = new FormData(signUpForm);
    console.log({ email: data.get('email'), password: data.get('password') });
    const user = await signupUser(data.get('email'), data.get('password'));
    // write signupUser function
    if (user) {
        location.replace('./other-page');
    }


});

// 2. redirect to other-page if signed in

redirectIfLoggedIn();

// 3. redirect from other-page to home if not signed in
    // other-page.js
    
// 4. sign in event

// 5. log out event on other-page with redirect to home
