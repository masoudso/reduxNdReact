import React, { Component } from 'react';
import {connect} from 'react-redux'

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
                <CounterControl label="Increment" clicked={this.props.onIncrementCounter} />
                <CounterControl label="Decrement" clicked={this.props.onDecrementCounter}  />
                <CounterControl label="Add 10" clicked={this.props.onAddCounter}  />
                <CounterControl label="Subtract 15" clicked={this.props.onSubtractCounter}  />
            </div>
        );
    }
}

const mapStateToProp = state => {
    return {
        ctr : state.counter
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onIncrementCounter: () => dispatch({type : 'INCREMENT'}),
        onDecrementCounter: () => dispatch({type : 'DECREMENT'}),
        onAddCounter: () => dispatch({type : 'ADD', val: 10 }),
        onSubtractCounter: () => dispatch({type : 'SUB', val: 15})
    }
}

export default connect(mapStateToProp, mapDispatchToProps)(Counter);
 //()() function on something returned from another funct
 //Also if you dont have the first argument, pass a null
 //if you dont have the secong arg, leave it with only one arg