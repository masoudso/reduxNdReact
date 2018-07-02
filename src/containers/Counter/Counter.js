import React, { Component } from 'react';
import {connect} from 'react-redux'
import * as actionCreators from '../../store/actions/actions'

import * as actionTypes from '../../store/actions/actions'
import CounterControl from '../../components/CounterControl/CounterControl';
import CounterOutput from '../../components/CounterOutput/CounterOutput';

class Counter extends Component {
    state = {
        counter: 0
    }

    render () {
        return (
            <div>
                <CounterOutput value={this.props.ctr} />
                <CounterControl 
                label="Increment" clicked={this.props.onIncrementCounter} />
                <CounterControl 
                label="Decrement" clicked={this.props.onDecrementCounter} />
                <CounterControl 
                label="Add 10" clicked={this.props.onAddCounter} />
                <CounterControl 
                label="Subtract 15" clicked={this.props.onSubtractCounter} />
                <hr />
                <button onClick={() => this.props.onStoreResult(this.props.ctr)}>Store Result</button>
                <ul>
                    {this.props.storedResult.map(sr => (
                        <li key={sr.id} onClick={() => this.props.onDeleteResult(sr.id)}>{sr.val}</li>
                    ))}
                </ul>
            </div>
        );
    }
}

const mapStateToProp = state => {
    return {
        ctr : state.ctr.counter, // second ctr comes from what I defined in index.js
        storedResult: state.res.result
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onIncrementCounter: () => dispatch(actionCreators.increment()),
        onDecrementCounter: () => dispatch(actionCreators.decrement()),
        onAddCounter: () => dispatch(actionCreators.add(10)),
        onSubtractCounter: () => dispatch(actionCreators.sub(15)),
        onStoreResult: (result) => dispatch(actionCreators.storeResult(result)),
        onDeleteResult: (id) => dispatch(actionCreators.deleteResult(id))
    }
}

export default connect(mapStateToProp, mapDispatchToProps)(Counter);
 //()() function on something returned from another funct
 //Also if you dont have the first argument, pass a null
 //if you dont have the secong arg, leave it with only one arg