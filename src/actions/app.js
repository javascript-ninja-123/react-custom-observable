import {AppAction} from './type'

export const fetchCall = () => {
  return {
      type:AppAction.INITIAL_FETCH
    }
}

export const aboutFetchSubSequently = payload => {
  return {
    type:AppAction.FETCH_ABOUT_US_SUBSEQUENLTY,
    payload
  }
}

export const contactFetchSubSequently = payload => (
  {
    type:AppAction.FETCH_CONTACT_US_SUBSEQUENLTY,
    payload
  }
)

export const start = () => (
  {
    type:AppAction.FETCH_TICK
  }
)
export const stop = () => (
  {
    type:AppAction.STOP_FETCH_TICK
  }
)
