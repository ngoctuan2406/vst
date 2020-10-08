import React, {Component} from 'react';
import {Router, browserHistory, Route, Link} from 'react-router';
import './App.scss';
import Hompage from "./assets/js/homepage";
import Mypage from "./assets/js/mypage";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper.scss';
var firebase = require('firebase');
var firebaseui = require('firebaseui');

const NavBar = () => (
    <div className="navbar">
        <Link to="/">Feed</Link>
        <Link to="/profile">Profile</Link>
    </div>
);

const Template = ({title}) => (
    <div>
        <NavBar/>
        <p className="page-info">
            This is the {title} page.
        </p>
    </div>
);

const Feed = (props) => (
    <Template title="Feed"/>
);

const Profile = (props) => (
    <Template title="Profile"/>
);

class App extends Component {
    render () {
        return (
            <Mypage/>
        );
    }
}

export default App;
