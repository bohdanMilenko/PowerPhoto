import React from "react";
import './ImageLinkInputForm.css'

const ImageLinkInputForm = ( {onInputChange, onSubmitButton}) => {
    return (
        <div className='ma4 mt0'>
            <p className='light-gray f3'>
                I will do some magic and detect faces in your picture. Feed me something!
            </p>
            <div className='center'>
                <div className='form center pa4 shadow-5 br4'>
                <input className='f4 pa3 w-70 center' type='text' onChange={onInputChange} />
                    <button
                        className='w-30 grow f4 link ph3 pv2 dib white bg-red'
                        onClick={onSubmitButton
                        }>Detect</button>
                </div>
            </div>
        </div>

    )

}

export default ImageLinkInputForm;