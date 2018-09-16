import React from 'react'

class Test extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      title: '',
      body: ''
    }
  }
  // componentWillMount(){ // deprecated
  //   console.log('componentWillMount');
  // }
  componentDidMount(){
    console.log(this.state);
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(res => res.json())
      .then(json => console.log(json))
  }
  // componentWillUpdate(){ // deprecated
  //   console.log('componentWillUpdate');
  // }
  componentDidUpdate(){
    console.log(this.state);
  }
  // componentWillReceiveProps(nextProps, nextState){ // deprecated
  //   console.log('componentWillReceiveProps');
  // }
  static getDerivedStateFromProps(nextProps, prevState){
    return {
      test: 'abc'
    };
  }
  render () {
    return (
      <div>
        <h1>Test Component</h1>
      </div>
    );
  }
}

export default Test;
