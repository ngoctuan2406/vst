import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as homeActions from '../../store/actions/homeAction';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAlignJustify, faTimes } from '@fortawesome/free-solid-svg-icons'
import '../scss/homepage.scss';
import firebaseui from 'firebaseui';
import * as firebase from "firebase/app";
import "firebase/analytics";
import "firebase/auth";
import "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyCUk3J1LGont_sZ79ZDxSNvnQF7eCVecuI",
    authDomain: "pwa-app-3cab5.firebaseapp.com",
    databaseURL: "https://pwa-app-3cab5.firebaseio.com",
    projectId: "pwa-app-3cab5",
    storageBucket: "pwa-app-3cab5.appspot.com",
    // messagingSenderId: "323005802921",
    appId: "1:323005802921:web:2d53e07338c078883ebcb8",
    measurementId: "G-9EW1C5LSBQ"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const Hompage = (props) => {
    const { actions, dataHomeReport } = props;
    const isMobile = window.innerWidth >= 992 ? false : true;
    const [isOpened, setIsOpen] = useState(false);
    var provider = new firebase.auth.GoogleAuthProvider();

    const toggleNavBar = () => {
        setIsOpen(isOpened => !isOpened);
    };

    const authenticate = (branchName) => {
        console.log('branchName', branchName);
        firebase.auth().signInWithPopup(provider).then(function (result) {
            // This gives you a Google Access Token. You can use it to access the Google API.
            var token = result.credential.accessToken;
            // The signed-in user info.
            var user = result.user;
            // ...
        }).catch(function (error) {
            // Handle Errors here.
            var errorCode = error.code;
            var errorMessage = error.message;
            // The email of the user's account used.
            var email = error.email;
            // The firebase.auth.AuthCredential type that was used.
            var credential = error.credential;
            // ...
        });
    };

    useEffect(() => {
    }, []);

    return <React.Fragment>
        {(isOpened || !isMobile)
            ? <nav className="navbar">
                <div className="navbar-top">
                    <img className="logo-img"
                        src={require("../images/logo.png")}
                        alt="Vingroup" title="Vingroup" />
                    <a href="#!" className="btn-close d-lg-none" onClick={() => toggleNavBar()}>
                        <FontAwesomeIcon icon={faTimes} color="black" />
                    </a>
                </div>
                <div className="navbar-bottom">
                    <a href="#!" className="nav-item">Vinhomes</a>
                    <a href="#!" className="nav-item">Vinpearl</a>
                    <a href="#!" className="nav-item">Vinmec</a>
                    <a href="#!" className="nav-item">Vinfast</a>
                    <a href="#!" className="nav-item">VSmart</a>
                </div>
            </nav>
            : null}

        <header className="d-lg-none">
            <img className="logo-img"
                src={require("../images/logo.png")}
                alt="Vingroup" title="Vingroup" />
            <a href="#!" className="navbar-toggler" onClick={() => toggleNavBar()}>
                <FontAwesomeIcon icon={faAlignJustify} color="black" />
            </a>
        </header>

        <main>
            <img className="banner"
                src={require("../images/banner.png")}
                alt="Home Banner" />

            <div className="login">
                <p>Please click button below to sign in!</p>
                <button className="google" onClick={() => authenticate("Google")}>
                    Log In With Google
                </button>
                <button className="facebook" onClick={() => authenticate("Facebook")}>
                    Log In With Facebook
                </button>
            </div>
            <button className="add-button" >
                Add to Home Screen
                </button>
        </main>

        {isOpened ? <div className="overlay" title="close side menu" onClick={() => toggleNavBar()}></div> : null}
    </React.Fragment>
};

const mapStateToProps = (state) => {
    return {
        dataHomeReport: state.homeReducer,
    };
};

const mapDispatchToProps = (dispatch) => ({
    actions: bindActionCreators(Object.assign({}, homeActions), dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(Hompage);