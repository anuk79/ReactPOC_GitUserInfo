//react imports
import React from 'react';
//styles
import './PageHeader.scss';

const PageHeader = ({ headerText }) => 
        <div>
            <header className="page-header">
            <h3 className="page-title"> { headerText } </h3>
            </header>
        </div>

export default PageHeader;