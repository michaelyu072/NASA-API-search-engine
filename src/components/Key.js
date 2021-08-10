import React from 'react';



function Key({number}) {
    let black = false;
    if(number === 2 || number === 4 || number === 7 || number === 9 || number === 11) {
        black = true;
    }
    return ( <>

        {
        black ? 
        <div className = 'blackKeyContainer'>
            <div className = 'blackKey'><p className = "letter">{number}</p></div>
        </div>
        : <div className = {"whiteKey"}><p className = "letter">{number}</p></div>
        }

        </>) ;

}

export default Key;