//react imports
import React from 'react';
//styles
import './Details.scss';
//constants
import { NOT_AVAILABLE, EMPTY_STRING } from '../../constants/commonConstants';
//components
import Message from '../message/Message';

const Details = ({ details = {}, message = EMPTY_STRING }) =>
    <div>
        {
            message && <Message message={message} className={'alert error-message'} />
        }

        <div className='details-container'>
            {
                Object.keys(details).map((key, index) => (
                    <div key={index}>
                        <span className='details-key'>
                            {key} :
                        </span>
                        <span>
                            {details[key] || NOT_AVAILABLE}
                        </span>
                    </div>
                ))
            }
        </div>
    </div>

export default Details;