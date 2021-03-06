import React from 'react';
import { useHistory } from 'react-router-dom';

export default function BackButton(props) {
    let history = useHistory();

    //takes the user to the selected page
    function handleClick() {
        history.goBack();
    };

    return(
        <>
            <button
                className={props.btnClass}
                type='button'
                onClick={handleClick}
            >
                {props.title}
            </button>
        </>
    );
};