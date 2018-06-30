const intialState = {
    counter : 0,
    result : []
}

const reducer = (state = intialState, action) => {
    switch(action.type){
        case 'INCREMENT':
        return {
            ...state,
            counter: state.counter + 1
        }
        case 'DECREMENT':
        return {
            ...state,
            counter: state.counter - 1
        }
        case 'ADD':
        return{
            ...state,
            counter: state.counter + action.val
        }
        case 'SUB':
        return{
            ...state,
            counter: state.counter - action.val
        }
        case 'STORE_RESULT':
        return {
            ...state,
            result: state.result.concat({id: new Date(), val: state.counter})
        }
        case 'DELETE_RESULT':
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