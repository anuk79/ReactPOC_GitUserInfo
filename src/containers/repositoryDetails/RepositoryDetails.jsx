//react, axios imports
import React from 'react';
import axios from 'axios';
//components
import Details from '../../components/details/Details';
import PageHeader from '../../components/pageHeader/PageHeader';

class RepositoryDetails extends React.Component {
    state = { 
        repositoryDetails: {}
    };

    componentDidMount() {
        const { repoName } = this.props.match.params;
        
        axios.get(`https://api.github.com/repos/rashmivishwakarma/${repoName}`)
        .then(res => {
            let repositoryDetails = res.data;
            repositoryDetails.owner = repositoryDetails.owner.login;
            this.setState({ repositoryDetails });
        });
    }
    
    render() {
        return (
            <div>
                <PageHeader headerText= { this.props.match.params.repoName + ' details' } />
                <Details details = { this.state.repositoryDetails } />
            </div>
        );
    }
}

export default RepositoryDetails;