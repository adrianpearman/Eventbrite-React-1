import React, { Component } from 'react';
import './App.css';
import {getRandomPuppy, getPuppyFact} from './request.js';

class App extends Component {
  constructor(){
    super();
    this.state = {
      image: 'loading...',
      fact: 'loading....'
    }
  }
  render() {
    return (
      <div className="App">
        <Puppy img={this.state.image} />
        <Fact fact={this.state.fact}/>
      </div>
    );
  }
  componentDidMount(){
    getPuppyFact
    .then((data) => {
      console.log(data);
      const fact = JSON.parse(data.body).facts[0];
      this.setState({
        fact
      })
    })
    getRandomPuppy
    .then((data) => {
      console.log(data);
      // const fact = JSON.parse(data.message).facts[0];
      this.setState({
        image: data.message
      })
    })
  }

}

class Puppy extends Component{
  render(){
    return(
      <div>
        <img src={this.props.img} alt='Picture of Puppy'/>
      </div>
      )
  }
}

class Fact extends Component{
  render(){
    return(
      <span>{this.props.fact}</span>
    )
  }
}

export default App;
