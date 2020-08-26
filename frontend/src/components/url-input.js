import React from 'react';

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
                <form onSubmit={(event) => this.handleSubmit(event)}>
                    <label>
                        URL:
                  <input type="text" value={this.state.value} onChange={(event) => this.handleChange(event)} />
                    </label>
                    <input type="submit" value="Submit" />
                </form>
            </div>
        );
    }
}

export default UrlInput;