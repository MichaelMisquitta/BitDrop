import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

class NameForm extends React.Component {
    constructor(props) {
      super(props);
      this.state = {value: ''};
  
      this.handleChange = this.handleChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
    }
  
    handleChange(event) {
      this.setState({value: event.target.value});
    }
  
    handleSubmit(event) {     
      sendData(event);
      event.preventDefault();
    }

    
  
    render() {
      return (
        <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          alignVertical: "center",
          marginTop: 200,
        }}
       >
            <form onSubmit={this.handleSubmit}>
            <label>
                Name:
                <input type="text" value={this.state.value} onChange={this.handleChange} />
            </label>
            <input type="submit" value="Submit" />
            </form>
        </div>
      );
    }
  }

  ReactDOM.render(
    <NameForm />,
    document.getElementById('root')
);

function sendData(event) {        
    var xhr = new XMLHttpRequest()           
    xhr.open('POST', '')      
    xhr.send(JSON.stringify({ url: event.target.value}))
  }