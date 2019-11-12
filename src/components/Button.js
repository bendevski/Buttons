import React,{Component} from 'react';


export default class Button extends Component{
    constructor(props){
        super(props);
        this.state = {
            clicked: "not"
        }
        this.onClick = this.onClick.bind(this);
        this.onTransitionEnd = this.onTransitionEnd.bind(this);
    }

    onClick(e){
        this.props.foo(this.props.num);
        setTimeout(
            function() {
                this.setState({clicked:"transitioning"});
            }
            .bind(this),
            4600
        );
        this.setState({clicked: "clicked"})
    }

    onTransitionEnd(e){
        if (this.state === "clicked"){
            this.setState({clicked:"not"})
        }
    }

    render(){
        return(
            <button onTransitionEnd={this.onTransitionEnd} id={this.state.clicked} 
                onClick={this.onClick} className="Button">Button {this.props.num}</button>
        )
    }

}