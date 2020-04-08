import React from "react";
import "./FaceRecognition.css"

const FaceRecognition = ({box, inputURL}) => {
    return (
        <div className='center ma'>
            <div className='absolute mt2'>
            <img id = "imageToAdjust" alt= 'Basic' src={inputURL} width="800px" heigh="auto" />
            <div className='boxBoundaries' style={{top: box.topRow, right: box.rightCol, bottom: box.bottomRow , left: box.leftCol }}></div>
            </div>
        </div>

    )

}

export default FaceRecognition;