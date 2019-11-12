import React, {Component} from 'react';
import Button from './Button';
import Box from './Box';






export default class Container extends Component{
    constructor(){
        super();
        this.state = {
            num: "None",
        }
        this.onChange = this.onChange.bind(this);
    }
    
    onChange(number){
        this.setState({num: number});
    }
    
    render(){
        var buttons = [1,2,3].map((num)=>{return(<Button num={num} foo={this.onChange}/>)})
        return(
            <div className="Elems">
                <div className="Buttons">
                    {buttons}
                </div>
                <Box num={this.state.num}/>
            </div>
        )
    }
}