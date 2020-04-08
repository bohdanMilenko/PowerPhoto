import React, {Component} from 'react';
import './App.css';
import 'tachyons'
import Navigation from './components/Navigation/Navigation'
import Logo from './components/Logo/Logo'
import ImageLinkInputForm from './components/ImageLinkInputForm/ImageLinkInputForm'
import Rank from './components/Rank/Rank'
import Particles from 'react-particles-js';
import FaceRecognition from './components.FaceRecognition'
import particlesOptions from './particlesOptions'
import Clarifai from 'clarifai';

const app = new Clarifai.App({
    apiKey: 'ad327580dc1949f4b2f9bda82cf69e1d'
});

class App extends Component {
    constructor() {
        super();
        this.state ={
            input:'',
        }
    }

    onInputChange = (event) => {
        this.setState({input: event.target.value});
    };

    onSubmitButton = () => {
        app.models.predict(Clarifai.FACE_DETECT_MODEL, "https://samples.clarifai.com/metro-north.jpg").then(
            function(response) {
                console.log(response);
            },
            function(err) {
                // there was an error
            }
        );

    };
    render() {
        return (
            <div className="App">
                <Particles className='particlesParam'
                           params={particlesOptions}/>
                <Navigation/>
                <Logo/>
                <Rank/>
                <ImageLinkInputForm onInputChange={ this.onInputChange}  onSubmitButton = {this.onSubmitButton }/>
                <FaceRecognition/>
            </div>
        )
    }
};


export default App;
