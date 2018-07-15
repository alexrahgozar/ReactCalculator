import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import Grid from 'react-css-grid';
import CalculatorFrame from './components/CalculatorFrame.jsx';



class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      items: []
    }
    this.save = this.save.bind(this)
  }


  componentDidMount() {
    console.log('here Alex compDidMount Says');
    $.get('/cal', function(carData) {
      console.log('This is CarData inside indexjsx: ', carData);


    })
    .done(carData => {
      this.setState({
        items: carData
      });
    });
  }


  save (term) {
    console.log(term)
    console.log(`${term} was posted`);

    fetch('/cal', {
      method: 'POST',
      body: JSON.stringify(term),
      headers: new Headers({
        'Content-Type': 'application/json',
      })
    }).then(() => window.location.reload(false))
  }



  render () {
    console.log(this.state.items, 'grid in use')
    return (
      <div>
        <h1>Calculator.com®</h1>
          <CalculatorFrame/>
      </div>
  )
  }
}

ReactDOM.render(<App />, document.getElementById('app'));

export default Grid
