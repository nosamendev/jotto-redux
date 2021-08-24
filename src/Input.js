import React from 'react';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';

function Input({ secretWord }) {

    const [currentGuess, setCurrentGuess] = React.useState("");
    const success = useSelector(state => state.success);

    if (success) {
        return <div data-test='component-input'></div>
    }

    return(
        <div data-test='component-input'>
            <form>
                <input data-test="input-box" type="text" placeholder="enter guess" 
                    value={currentGuess}
                    onChange={e => setCurrentGuess(e.target.value)}
                />
                <button data-test="submit-button"
                    onClick={(e) => {e.preventDefault(); setCurrentGuess("")}}
                >Submit</button>
            </form>
        </div>
    )
}

Input.propsTypes = {
    secretWord: PropTypes.string.isRequired
}

export default Input;
