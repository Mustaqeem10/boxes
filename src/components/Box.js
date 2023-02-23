import React from 'react';
import '../style.css'

export default function Box(props) {

    const style = {
        backgroundColor: props.on ? "#222222" : "transparent"
    }


    return (
        <div onClick={props.toggle} style={style} className='box'></div>
    )
}
    