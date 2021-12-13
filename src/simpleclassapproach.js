import React from 'react';
class Myexamplecomponent extends React.Component
{
    constructor()
    {
        super();
        this.state={count:0}
    }
    render()
    {
        return(
            <div>
                <i>
                <p>I am using class approach</p>
                <p>You have clicked button {this.state.count} times</p>
                <button onClick={()=>this.setState({count:this.state.count+1})}>Click Me</button>
            </i>
            </div>
        );
    }
}
export default Myexamplecomponent;