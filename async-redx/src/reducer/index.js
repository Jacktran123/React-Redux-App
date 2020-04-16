import {tell_joke_start, tell_joke_error, love_joke, hate_joke} from './action';

export const initialState=
    {
        id: 0,
        setup: '',
        punchline:'How do I impress her ?',
        reactToJoke: ''

      };


export function reducer(state=initialState,action){
    switch(action.type){
        case tell_joke_start:
            return  {
                ...state,
                setup: action.payload,
                punchline: action.punchline
            }
        case tell_joke_error:
            return{
                ...state,
                setup: action.payload
            }
        case love_joke:
            return{
                ...state,
                reactToJoke: action.payload
            }
        case hate_joke:
            return {
                ...state,
                reactToJoke: action.payload
            }  
    default:
        return state
    }
    
}