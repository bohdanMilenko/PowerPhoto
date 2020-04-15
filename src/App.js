import React, {Component} from 'react';
import './App.css';
import 'tachyons'
import Navigation from './components/Navigation/Navigation'
import Logo from './components/Logo/Logo'
import ImageLinkInputForm from './components/ImageLinkInputForm/ImageLinkInputForm'
import Rank from './components/Rank/Rank'
import Particles from 'react-particles-js';
import FaceRecognition from './components/FaceRecognition/FaceRecognition'
import particlesOptions from './particlesOptions'
import Clarifai from 'clarifai';
import SignIn from "./components/SignIn/SignIn";
import Register from "./components/Register/Register";

const app = new Clarifai.App({
    apiKey: 'ad327580dc1949f4b2f9bda82cf69e1d'
});

class App extends Component {
    constructor() {
        super();
        this.state = {
            input: '',
            imageURL: '',
            box: {},
            route: 'signIn',
            isSignedIn: false,
        }
    }

    calculateFaceLocation = (data) => {
        const faceBoundaries = data.outputs[0].data.regions[0].region_info.bounding_box;
        const image = document.getElementById("imageToAdjust")
        const width = Number(image.width);
        const height = Number(image.height);
        return {
            leftCol: faceBoundaries.left_col * width,
            topRow: faceBoundaries.top_row * height,
            rightCol: width - (faceBoundaries.right_col * width),
            bottomRow: height - (faceBoundaries.bottom_row * height)
        }

    };

    displayFaceBox = (coordinates) => {
        this.setState({box: coordinates})
    };

    onInputChange = (event) => {
        this.setState({input: event.target.value});
    };

    onSubmitButton = () => {
        this.setState({imageURL: this.state.input});
        app.models.predict(Clarifai.FACE_DETECT_MODEL, this.state.input)
            .then((response) => {
                this.displayFaceBox(this.calculateFaceLocation(response));
            }).catch(err => console.log(err));

    };

    changeRoute = (newRoute) => {
        if (newRoute === 'signIn') {
            this.setState({isSignedIn: false})
        } else if (newRoute === 'Home') {
            this.setState({isSignedIn: true})
        }
        this.setState({route: newRoute})
    };


    render() {
        const {isSignedIn, imageURL,route, box} = this.state;
        return (
            <div className="App">
                <Particles className='particlesParam'
                           params={particlesOptions}/>
                <Navigation isSignedIn={isSignedIn} changeRoute={this.changeRoute}/>
                {route === 'Home'
                    ? <div>
                        <Logo/>
                        <Rank/>
                        <ImageLinkInputForm onInputChange={this.onInputChange} onSubmitButton={this.onSubmitButton}/>
                        <FaceRecognition box={box} inputURL={imageURL}/>
                    </div>
                    : (route === 'signIn'
                            ? <SignIn changeRoute={this.changeRoute}/>
                            : <Register changeRoute={this.changeRoute}/>
                    )
                }
            </div>
        )
    }
};


export default App;
