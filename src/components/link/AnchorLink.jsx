//react imports
import React from 'react';

//anchor link component - creates anchor element
const AnchorLink = ({ url, displayItem, urlTarget='_blank' } = {}) => 
        <a  href = { url } 
            target= { urlTarget } >
                { displayItem }
        </a>

export default AnchorLink;