import React from 'react';
import {shallow} from 'enzyme';
import {findByTestAttr,checkProps} from '../test/testUtils';
import GuessedWords from './GuessedWords';

const defaultProps = {
    guessedWords:[
        {
            guessedWords:'train',
            letterMatchCount:3
        }
    ]
};

/**
 * Functional react component for congratulatory message.
 * @function
 * @param {object} props - React props
 * @return {JSX.element} - Rendered component (Or null if `success` props)
 */
const setUp = (props={}) => {
    const setupProps = {...defaultProps,...props}
    return shallow(<GuessedWords {...setupProps}/>)
}

test('does not throw warning with expected props',() => {
    checkProps(GuessedWords,defaultProps);
})

describe('if there are no words guessed',()=>{

});

describe('if there are words guessed',()=>{

});