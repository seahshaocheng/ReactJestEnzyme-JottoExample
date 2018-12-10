import {correctGuess, actionTypes} from './';

describe('correcGuess',()=>{
    test("returns an action with type  `CORRECT_GUESS`",()=>{
        const action = correctGuess();
        //we should use toEqual for mutable type, like objects. 
        expect(action).toEqual({type:actionTypes.CORRECT_GUESS});
    });
});

