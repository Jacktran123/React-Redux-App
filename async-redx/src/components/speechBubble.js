import React from 'react';
import {connect} from 'react-redux';

import './speechBubble.css';


const SpeechBubble= props =>{
    return(
    <>
     
    <div className="speech-bubble right">
        <p className='speech'><strong></strong></p>
        <p className='speech'>{props.reactToJoke}</p>
    </div>
    <div className="speech-bubble left">
        <p className='speech'><strong>{props.setup}</strong></p>
        <p className='speech'> {props.punchline} </p>
    </div>
      
        
     
    </>
    );
}

const mapStateToProps = state =>{
    return {
        setup: state.setup, 
        punchline: state.punchline,
        reactToJoke: state.reactToJoke
    }
}

export default connect(mapStateToProps,{})(SpeechBubble);