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
    let wrapper;

    beforeEach (()=>{
        wrapper = setUp({guessedWords:[]});
    });

    test('renders without error',()=>{
        const component = findByTestAttr(wrapper,'component-guessed-words');
        expect(component.length).toBe(1);
    });
    test('renders instructions to guess a word',()=>{
        const instructions = findByTestAttr(wrapper, 'guess-instruction');
        expect(instructions.text().length).not.toBe(0);
    });
});

describe('if there are words guessed',()=>{
    let wrapper;
    const guessedWords =[
        {guessedWord:'train',letterMatchCount:3},
        {guessedWord:'agile',letterMatchCount:1},
        {guessedWord:'party',letterMatchCount:5},
    ];

    beforeEach(()=>{
        wrapper = setUp({guessedWords});
    })

    test('renders without error', () => {
        const component = findByTestAttr(wrapper,'component-guessed-words');
        expect(component.length).toBe(1);
    });

    test('renders "guessed words" section',()=>{
        const guessedWordsNode = findByTestAttr(wrapper,'guessed-words');
        expect(guessedWordsNode.length).toBe(1);
    });

    test('correct number of guessed words', () => {
        const guessedWordsNodes = findByTestAttr(wrapper,'guessed-word');
        expect(guessedWordsNodes.length).toBe(guessedWords.length);
    });
});