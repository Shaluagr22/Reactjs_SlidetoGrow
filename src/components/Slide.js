import React from 'react'

const Slide = ({slideValue,handleInput,bgColor,textColor}) => {
  return (
    <div className=''>
        <input type="range"min={0} max={100} value
        ={slideValue} onInput={handleInput}/>
        <div className='circle'
        style={{
            color:!textColor ? "black":textColor,
            background:!bgColor ? "orange":bgColor,
            alignSelf:'center',
            height:`${slideValue * 3}px`,
            width:`${slideValue * 3}px`,
        }}
        >
            <span>{slideValue}</span>

        </div>
    </div>
  )
}

export default Slide