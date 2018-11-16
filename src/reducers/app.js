import {AppAction} from '../actions/type'


const INITIAL_STATE = {
  list:[],
  loading:false
}


export default (state = INITIAL_STATE, {type,payload}) => {
  switch(type){
    case AppAction.INITIAL_FETCH:
    console.log('called loading')
    return {...state, loading:true}
    case AppAction.FETCH_SUCCESS:
    console.log(payload)
    return {...state, list:payload, loading:false}
    case AppAction.FETCH_ABOUT_US_SUBSEQUENLTY_SUCCESS:
    console.log(payload)
    return {...state}
    case AppAction.FETCH_CONTACT_US_SUBSEQUENLTY_SUCCESS:
    console.log(payload)
    return state
    case AppAction.FETCH_TICK_SUCCESS:
    console.log(payload)
    return state
    default:
    return state;
  }
}
