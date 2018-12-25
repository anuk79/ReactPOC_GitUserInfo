//react imports
import React from 'react';

//creates header of table
const TableHeader = ({ columns }) => 
        <tr>
            { columns.map((columnName, index) => 
                            <th key = { index }> 
                                { columnName } 
                            </th>
                        )
            }
        </tr>

export default TableHeader;