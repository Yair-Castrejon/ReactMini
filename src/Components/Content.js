import React, { Component } from 'react';

class Content extends Component {
    constructor(){
        super();
        this.state = {
            count:0,
            num1:0,
            num2:0,
            result:0
        };

        this.handleCountClick=this.handleCountClick.bind(this);
        this.handleInputChanged=this.handleInputChanged.bind(this);
        this.handleResultClick=this.handleResultClick.bind(this);
    }

    componentDidMount(){
        this.setState({count:1});
        this.setState({num1:0});
        this.setState({num2:0});
    }

    handleCountClick(e){
        if(e.target.id==="add"){
            this.setState({count:this.state.count+1});
        } else if(e.target.id==="substract"){
            if(this.state.count!==0){
                this.setState({count:this.state.count-1});
            }
        } else if(e.target.id==="reset"){
            this.setState({count:this.state.count-count});
        }
    }

    handleInputChanged(e){
        if(e.target.id==="num1"){
            this.setState({num1:Number(e.target.value)});   
        }

        else{
            this.setState({num2:Number(e.target.value)});
        }
    }

    handleResultClick(e){
        if(e.target.id==="result"){
            this.setState({result:this.state.num1+this.state.num2});
        }
    }

    render(){
        return(
            <div className="Content">
                <content className="content-in">
                    <h1>Counter: {this.state.count}</h1>
                    <p>
                        <button id="add" onClick={this.handleCountClick}> + </button>
                        <button id="substract" onClick={this.handleCountClick}> - </button>
                        <button id="reset" onClick={this.handleCountClick}> Reset </button>                       
                    </p>

                    <h2>Calculadora</h2>
                    <p>
                        <input id="num1" type="number" value={this.state.num1} onChange={this.handleInputChanged}/>
                        +
                        <input id="num2" type="number" value={this.state.num2} onChange={this.handleInputChanged}/>
                        <button id="result" onClick={this.handleResultClick}> = </button>
                        {this.state.result}
                    </p>
                </content>
            </div>
        );
    };
}

export default Content;