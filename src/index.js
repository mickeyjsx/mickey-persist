import { combineReducers } from 'mickey';
export default function(persistCombineReducers, customCombineReducers ){
    return (...args) => {
        customCombineReducers = customCombineReducers || combineReducers;
        if( args[0]['@@MICKEY']){
            return persistCombineReducers(args[0])
        }else{
            return customCombineReducers(args[0]);
        }
    }
}