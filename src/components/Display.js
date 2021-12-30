import React from 'react';
import { useSpring, animated } from 'react-spring';
import { useState, useEffect } from 'react';
import CancelIcon from '@mui/icons-material/Cancel';

function Display(props) {
    
    const [rendered, toggleRendered] = useState(false);
    const moves = useSpring({opacity : rendered ? 1 : 0, config: {duration: 100}});

    useEffect(() => {
        toggleRendered(true);
    }, [])

    return <animated.div className = 'displayContainer' style = {moves}>
            <div className = 'displayCard'>
                <button className = 'exitButton' onClick = {props.exit}><CancelIcon/></button>
                <div className = 'displayTitleBox'>
                    <p className = 'displayTitle'>{props.displayTitle}</p>
                </div>
                <div className = 'displayImgBox'>
                    <img className = 'displayImg' src = {props.displayImg} alt = 'image not found'></img>
                </div>
                <div className = 'displayDescriptionBox'>
                    <p className = 'displayDescription'>{props.displayDescription}</p>
                </div>
            </div>
    </animated.div>;


}

export default Display;