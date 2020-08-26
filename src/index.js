import React from 'react';
import ReactDOM from 'react-dom';

class UrlInput extends React.Component {
  constructor(props) {
    super(props);
    this.state = { value: '' };
  }

  handleChange(event) {
    this.setState({ value: event.target.value });
  }

  handleSubmit(event) {
    this.sendData(event);
    event.preventDefault();
  }

  sendData(event) {
    var xhr = new XMLHttpRequest()
    xhr.open('POST', '')
    xhr.send(JSON.stringify({ url: this.state.value }))
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
        <form onSubmit={() => this.handleSubmit}>
          <label>
            URL:
                <input type="text" value={this.state.value} onChange={() => this.handleChange} />
          </label>
          <input type="submit" value="Submit" />
        </form>
      </div>
    );
  }
}

ReactDOM.render(
  <UrlInput />,
  document.getElementById('root')
);

