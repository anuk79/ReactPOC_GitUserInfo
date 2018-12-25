//react imports
import React from 'react';
//constants
import { EMPTY_STRING } from '../../constants/commonConstants';

const Message = ({ message = EMPTY_STRING, className= EMPTY_STRING } = {}) => 
        <div className= { className }> 
            { message } 
        </div>

export default Message;