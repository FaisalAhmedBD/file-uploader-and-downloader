import React, { Component } from 'react';
import './App.css';
class App extends Component {
  render() {
    return (
     <h5>Hello there</h5>
    );
  }
  handleFileUpload = (event) => {
    const { driverInfo } = this.state;
    var reader = new FileReader();
    if (event.target.files.length > 0) {
        reader.readAsDataURL(event.target.files[0]);
        reader.onload = () => {
            this.setState({
                driverInfo: {
                    ...driverInfo,
                    driving_licence_file: reader.result,
                    valid_driving_licence_file: true
                },
                fileUploadMessage: ''
            }, this.setDistabledFalse);
        }
        reader.onerror = (error) => {
            console.log('Error: ', error);
        };
    } else {
        this.setState({
            fileUploadMessage: 'required'
        })
        this.setDistabledTrue();
    }
}
}

export default App;
