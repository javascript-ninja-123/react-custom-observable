import { Observable, from, of, range,empty,forkJoin,interval,Subject } from 'rxjs';
import { map, filter, switchMap,groupBy, mergeMap, toArray,tap,take  } from 'rxjs/operators';
import { ajax } from "rxjs/ajax";

class Obs{
  constructor(){

  }
  createAsyncObs(url,option){
    return Observable.create(async observer => {
      try{
        const res = await fetch(rul,option);
        const result = await res.json();
        observer.next(result)
        observer.complete();
      }
      catch(err){
        observer.error(err)
        observer.complete()
      }
    })
  }
  fetchOnce(url,options = {}){
    return createAsyncObs(url,options)
  }
  fetchMultiple(url){

  }
}






export default Obs;
