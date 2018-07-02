import * as actionTypes from './actionTypes'

export const deleteResult = (resElId) => {
    return {
        type : actionTypes.DELETE_RESULT,
        resultId: resElId
    }
}

export const saveResult = (res) => {
    return {
        type : actionTypes.STORE_RESULT,
        result: res
    }
}

export const storeResult = (res) => {
    return dispatch => {
        setTimeout(() => {
          dispatch(saveResult(res))  
        }, 2000)
    }
}
