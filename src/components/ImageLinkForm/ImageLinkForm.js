import React from "react";
import './ImageLinkForm.css'

const ImageLinkForm = ({onInputChange, onButtonSubmit}) => {
    return (
        <div >
            <p className='f3 white b'>
                {'This Magic Brain will Detect faces in your pictures. Give it a try!'}    
            </p>
            <div className='center'>
                <div className='form center pa4 br3 shadow-5 '>
                    <input className='ba b--dashed bw1 f4 pa2 w-70 center' type='text' onChange={onInputChange}/>
                    <button className='w-30 grow b f4 link ph3 pv2 dib white bg-black' onClick={onButtonSubmit}>Detect</button>
                </div>
            </div>
        </div>
    );
}

export default ImageLinkForm;