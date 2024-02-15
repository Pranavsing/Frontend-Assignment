import React, { Component } from 'react'

class Helo extends Component {
    
    constructor(){
        super()
        this.state={
            message :"LODA LELO"
        }
    }
    ok(){
        this.setState({
            message:"You're Gay"
        })
    }
  render() {
    return (
      <div>
        <h1>{this.state.message}</h1>
        <button onClick={()=>this.ok()}>Le lenge bhai</button>
    
      </div>
    )
  }
}
export default Helo
