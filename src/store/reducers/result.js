import * as actionTypes from '../actions'

const intialState = {
    result : []
}

const reducer = (state = intialState, action) => {
    switch(action.type){
        case actionTypes.STORE_RESULT:
        return {
            ...state,
            result: state.result.concat({id: new Date(), val: action.result}) /* 1 */
        }
        case actionTypes.DELETE_RESULT:
        //by using filter function, the result (here rs) and index are being taken
        //then the index is compared to id, if it meets the condition, filter
        //function returns true
        const updatedArray = state.result.filter(rs => rs.id !== action.resultId)
        return {
            ...state,
            result : updatedArray
        }
    }
    return state;
}

export default reducer;

/* 1) action.result comes from "onStoreResult = (result) .." in Counter.js */