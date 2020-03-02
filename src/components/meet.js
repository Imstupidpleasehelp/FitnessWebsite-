import React, { Component } from 'react'
// use a chaning if else statement to have the components swap with eachother

function onClick() {
    this.setState({ showResults: true });
}


class Meet extends Component {
     state = { showResults: 'Test' }
     render() { 
         return (
         <div> <button onClick={this.onClick}>nigga</button> 
         <h1>{this.state.showResults}</h1>);
         </div>
         )
     }
 }
 { if (showResults === true) 
    return this.setState == 'aaa'
    else  return 
    (this.setState.showResults == null)
    } 
export default Meet