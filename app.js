import { signupUser } from './fetch-utils.js';
import { redirectIfLoggedIn } from './fetch-utils.js';
import { signInUser } from './fetch-utils.js';

const signInForm = document.getElementById('sign-in');
const signInEmail = document.getElementById('sign-in-email');
const signInPassword = document.getElementById('sign-in-password');
const signInButton = document.getElementById('sign-in-button');

const signUpForm = document.getElementById('sign-up');
const signUpEmail = document.getElementById('sign-up-email');
const signUpPassword = document.getElementById('sign-up-password');
const signUpButton = document.getElementById('sign-up-button');

// Wire up sign in and sign up forms to supabase
// Redirect to /other-page on successful auth
// Redirect to /other-page when page loads if user is authenticated

// 1. sign up event

signUpForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    const data = new FormData(signUpForm);
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
    // -done

// 4. sign in event
signInForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    const data = new FormData(signInForm);
    const user = await signInUser(data.get('email'), data.get('password'));
    if (user) {
        location.replace('./other-page');
    }

});

// 5. log out event on other-page with redirect to home
    // other-page.js

// 6. bonus stuff

signInEmail.addEventListener('input', () => {
    signInButton.classList.add('blink');
    setTimeout(() => {
        signInButton.classList.remove('blink');
    }, 200);
});
signInPassword.addEventListener('input', () => {
    signInButton.classList.add('blinkpw');
    setTimeout(() => {
        signInButton.classList.remove('blinkpw');
    }, 200);
});
signUpEmail.addEventListener('input', () => {
    signUpButton.classList.add('blink');
    setTimeout(() => {
        signUpButton.classList.remove('blink');
    }, 200);
});
signUpPassword.addEventListener('input', () => {
    signUpButton.classList.add('blinkpw');
    setTimeout(() => {
        signUpButton.classList.remove('blinkpw');
    }, 200);
});