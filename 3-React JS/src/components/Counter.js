// --- setState Example : Class Component ----
// rce: snippet

import React, { Component } from 'react'

class Counter extends Component {

    // rconst: snippet
    constructor(props) {
      super(props)
    
      this.state = {
         count: 0
      }
    }
    
    increment(){
      //  this.setState({
      //   count: this.state.count + 1
      //  }, () => { console.log('Callback value: ', this.state.count) }) 
    
    // Note: always pass the "function" instead of "regular object" to the setState method, which always takes prevState as parameter, instead of current state, and give the correct answer.
    this.setState(prevState => ({
      count: prevState.count + 1
    })) 
    // console.log(this.state.count)
    }

    // 2nd parameter to this function is "props" object 
    // this.setState((prevState, props) => ({
    //   count: prevState.count + props.addValue
    // })) 
   
    // }
    


  render() {
    return (
      <div>
        <div>Count - {this.state.count}</div>
        <button onClick={() => this.increment()}>Increment</button>
      </div>
    )
  }
}

export default Counter
