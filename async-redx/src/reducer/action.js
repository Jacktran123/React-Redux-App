import axios from 'axios';

export const tell_joke_start =  'tell_joke';

export const tell_joke_error =  'tell_joke_error';

export const love_joke='love_joke';

export const hate_joke='hate_joke';



export function tellJoke(){

    return dispatch => {
        dispatch({ type: tell_joke_start }); 
        axios.get('https://official-joke-api.appspot.com/random_joke')
          .then(res => {
            console.log(res.data );
            dispatch({ type: tell_joke_start, payload: res.data.setup, punchline: res.data.punchline }); 
          })
          .catch(err => {
            console.log(err);
            dispatch({ type: tell_joke_error, payload: 'Hmm, I don\'t think she likes my joke. I need to check my jokes source'  }); 
          });
      };
}

export function loveJoke(){
    return {
        type:love_joke,
        payload: 'Hahaha \! You\'re so funny'
    }
}

export function hateJoke(){
    return{
        type: hate_joke,
        payload: 'I don\'t get it'
    }
}