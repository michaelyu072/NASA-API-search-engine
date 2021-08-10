
import React from 'react';
import { keys } from '../constants';
import Key from './Key';

function Piano () {

    console.log(keys);


    return (
        <div className = 'piano'>
            {keys.map((singleKey, index) => {
                return (
                    <Key number = {index} key = {singleKey}/>
                );
            })}
        </div>
    );
}


export default Piano;