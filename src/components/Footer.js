
import React from 'react'

export default function Footer() {
    return (
        <div className='footer__container'>
            <div className='footer__label'>
                <p className='footer-label__words'>
                    Smoothie Me | Created by Tharwin 2020
                </p>
            </div>

            <div className='footer-icon__container'>
                <a href='https://github.com/tharwin-carr' target='_blank' rel='noreferrer'>
                    <img src='https://img.icons8.com/material-sharp/18/ffffff/github.png' alt='github icon'/>
                </a>
                <a href='https://www.linkedin.com/in/tharwin-carr/' target='_blank' rel='noreferrer'>
                    <img src="https://img.icons8.com/android/18/ffffff/linkedin.png" alt='LinkedIn symbol'/>
                </a>
                <a href='mailto:tharwin.carr08@gmal.com' target='_blank' rel='noreferrer'>
                    <img src="https://img.icons8.com/material-sharp/18/ffffff/filled-sent.png" alt='email send'/>                            
                </a>
            </div>            
        </div>
    );
};