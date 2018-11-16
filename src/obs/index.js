import {AppAction} from '../actions/type'
import { Observable, from, of, range,empty,forkJoin,interval,Subject } from 'rxjs';
import { map, filter, switchMap,groupBy, mergeMap, toArray,tap,take  } from 'rxjs/operators';
import { ajax } from "rxjs/ajax";


const fetchData = async (payload) => {
  try{
    const res = await fetch(`https://jsonplaceholder.typicode.com/${payload}`)
    const result = await res.json();
    return result;
  }
  catch(err){
    return undefined
  }
}



const obsMiddleware = store => next => action => {
    const resume$ = new Subject();
  if(action.type === AppAction.INITIAL_FETCH){

    const fetchObs = url => Observable.create(async observer => {
      try{
        const res = await fetch(url)
        const result = await res.json()
        result.forEach(value => observer.next(value))
        observer.complete()
      }
      catch(err){
        observer.erorr("fetch failed")
        observer.complete()
      }
    })


    fetchObs('https://jsonplaceholder.typicode.com/posts').pipe(
      groupBy(data => data.userId),
      mergeMap(data => data.pipe(toArray()))
    )
    .subscribe(
      val => store.dispatch({type:AppAction.FETCH_SUCCESS, payload: val})
    )
  }

  else if(action.type === AppAction.FETCH_ABOUT_US_SUBSEQUENLTY){

    const subSequentObs = payload => Observable.create(async observer => {
      try{
        const a = await Promise.all(payload.map(value => fetchData(value)))
        observer.next(a)
        observer.complete()
      }
      catch(err){
        observer.next('wrong');
        observer.complete()
      }
    })

    subSequentObs(action.payload)
    .subscribe(x => store.dispatch({type:AppAction.FETCH_ABOUT_US_SUBSEQUENLTY_SUCCESS, payload:x}))
  }
  else if(action.type === AppAction.FETCH_CONTACT_US_SUBSEQUENLTY){
    forkJoin(
      action.payload.map(value => ajax.getJSON(`https://jsonplaceholder.typicode.com/${value}`))
    )
    .pipe(
      mergeMap(value => from(value)),
      mergeMap(value => from(value)),
      groupBy(data => {
        return data.userId
      }),
      mergeMap(value => value.pipe(toArray()))
    )
    .subscribe(
      val => store.dispatch({type:AppAction.FETCH_CONTACT_US_SUBSEQUENLTY_SUCCESS, payload: val}),
      error => console.log(error)
    )
  }
  else if(action.type === AppAction.FETCH_TICK){
    console.log('called')
    interval(1000)
    .pipe(
      take(5),
      switchMap(() => ajax.getJSON(`https://jsonplaceholder.typicode.com/users/2`))
    )
    .subscribe(
      val => store.dispatch({type:AppAction.FETCH_TICK_SUCCESS, payload: val}),
      error => console.log(error)
    )

  }
  else if(action.type === AppAction.STOP_FETCH_TICK){
    console.log('called')
    resume$.next(false)
  }

  next(action)
}

export default obsMiddleware;
