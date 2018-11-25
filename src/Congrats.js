import React from 'react';
import PRopTypes from 'prop-types';

/**
 * Functional react component for congratulatory message.
 * @function
 * @param {object} props - React props
 * @return {JSX.element} - Rendered component (Or null if `success` props)
 */
export default (props) => {
    if(props.success){
        return(
            <div data-test="component-congrats">
                <span data-test="congrats-message">
                    Congratulations! You guessed the word!
                </span>
            </div>
        );
    }  
    else{
        return(
            <div data-test="component-congrats">
                <span data-test="congrats-message">
                </span>
            </div>
        ); 
    } 
}