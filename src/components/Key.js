import React from 'react';



function Key({number}) {
    let black = false;
    if(number === 2 || number === 4 || number === 7 || number === 9 || number === 11) {
        black = true;
    }
    return ( <>

        {
        black ? <div className = 'blackKeyContainer'><div className = 'blackKey'>{number}</div></div>
        : <div className = {"whiteKey"}>{number}</div>
        }

        </>) ;

}

export default Key;