import React from 'react';
import {connect} from 'react-redux';
import {tellJoke, loveJoke, hateJoke} from '../reducer/action';

import './button.css';

const Button=props=>{
    return(
        <>
         <button className="button tell-joke" onClick={props.tellJoke}> Tell Joke</button>
         <button className="button lol" onClick={props.loveJoke}> That's funny</button>
         <button className="button lame" onClick={props.hateJoke}> That's lame</button>
        </>
    );
}

export default connect(null,{tellJoke, loveJoke, hateJoke})(Button)