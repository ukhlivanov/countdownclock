import React from 'react';
import Clock from './Components/Clock'
import './App.css';


class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      count: 0
    }
  }


  componentDidUpdate(prevProps, prevState){
    console.log(this.state)
    if(this.state.count === 0){
      clearInterval(this.timer)
    }
  }

  handleStart = () => {
    this.timer = setInterval(()=>{
      const newCount = this.state.count-1
      this.setState({
        count: newCount >=0 ? newCount : 0
      })
    }, 1000)
    this.userInput.value=''
     }

  handleStop = () => {
    if(this.timer){
      clearInterval(this.timer)
    }
    this.userInput.value=''
  }

  handleReset = () => {
    this.setState({
      count: 0
    })
  }

  handleCountdown =() =>{
    if(this.userInput.value.match(/[0-9]/)){
      this.setState({
        count: this.userInput.value,
      })
    }else{
      alert('Please, use only numbers')
      this.userInput.value=''
    }

  }

  render() {
    const {count} = this.state
    return (
      <div>
        <Clock time={count}/>
        <input
          type='text'
          placeholder='enter time in seconds'
          ref = {userInput => this.userInput = userInput}
          onChange = {this.handleCountdown}
        />
        <br></br>
        <input
          type='button'
          value='start'
          onClick={this.handleStart}
        />

        <input
          type='button'
          value='stop'
          onClick={this.handleStop}
        />

        <input
          type='button'
          value='reset'
          onClick={this.handleReset}
        />

      </div>
    )
  }
}

export default App;
