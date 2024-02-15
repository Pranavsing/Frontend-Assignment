import React, { Component } from 'react'

 class Cnt extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         count:0
      }
    }
    ok(){
        this.setState(
            {
                count: this.state.count +1
            }
        )
    }
    
  render() {
    return (
      <div>
        <h1>Count {this.state.count}</h1>
        <button onClick={()=>this.ok()}>incr</button>
        
      </div>
    )
  }
}
export default Cnt
