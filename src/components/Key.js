import React from 'react';



function Key({number}) {
    let black = false;
    if(number === 2 || number === 4 || number === 7 || number === 9 || number === 11) {
        black = true;
    }
    return (
        <div className = {black? "blackKey" : "whiteKey"}>
            {number}
        </div>
    )

}

export default Key;