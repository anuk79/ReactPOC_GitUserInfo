//react imports
import React from 'react';
import { Link } from 'react-router-dom'
//styles
import './TableBody.scss';
//components
import LoadingSpinner from '../loadingSpinner/LoadingSpinner';
import Message from '../message/Message';
import AnchorLink from '../link/AnchorLink';

const TableBody = ({ userData = [], isLoading = false, message = 'No data found!' } = {}) => {
    let rows;

    if (isLoading) {
        rows =  <tr> 
                    <td colSpan = '6'> <LoadingSpinner /> </td>
                </tr>
    } else {

        if (userData.length) {  

            rows = userData.map((user, index) => 
                    <tr key = { user.id }>
                        <td> 
                            { index + 1 } 
                        </td>
                        <td> 
                            { user.id } 
                        </td>
                        <td> 
                            <AnchorLink   url= { user.owner.avatar_url } 
                                    displayItem = { <img    className= 'user-avatar' 
                                                            src= {user.owner.avatar_url} 
                                                            alt= 'user avatar' /> } />
                            <Link to={`/details/${user.owner.login}/${user.id}`}>
                                { user.owner.login }
                            </Link>
                        </td>
                        <td>
                            <Link to={`/repo/${user.name}/${user.id}`}>
                                { user.name }
                            </Link>
                        </td>
                        <td> 
                            <AnchorLink   url= { user.teams_url } 
                                    displayItem = 'Teams' />
                        </td>
                        <td> 
                            <Link to={`/contributors/${user.name}/${user.id}`}>
                                Contributors
                            </Link>
                        </td>
                    </tr>
                )
        } else {
            rows =  <tr>
                        <td colSpan = '6'> <Message message={ message } /> </td>
                    </tr>
        }
    }
            
    return rows;
}

export default TableBody;