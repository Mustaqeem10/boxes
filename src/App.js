import React, {useState} from 'react';
import boxes from './boxes'
import './style.css'
import Box from './components/Box'

export default function App(props) {

    const [boxData, setBoxData] = useState(boxes)
    function toggle(id) {
        setBoxData((prevData) => {
            return prevData.map((data) => {
                return data.id === id ? {...data, on: !data.on} : data
            })
        })
    }
   

    const boxElements = boxData.map((box) => {
        return <Box key={box.id} on={box.on} toggle={() => toggle(box.id)}/> 
    })
    return (
        <main>
            <h1>Boxes will go here</h1>
            {boxElements}
        </main>
    )
}

