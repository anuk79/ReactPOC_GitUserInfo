//react imports
import React from "react";
import { connect } from "react-redux";
//components
import Details from "../../components/details/Details";
import PageHeader from "../../components/pageHeader/PageHeader";
//actions
import { getContributorDetails } from "../../actions/getContributorDetails";

class ContributorDetails extends React.Component {
  componentDidMount() {
    const { repoName } = this.props.match.params;

    this.props.getContributorDetails(repoName);
  }

  render() {
    return (
      <div>
        <PageHeader
          headerText={
            "Contributor Details for repo: " + this.props.match.params.repoName
          }
        />
        <Details
          details={this.props.contributorDetails}
          message={this.props.message}
        />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  contributorDetails: state.getContributorDetailsReducer.contributorDetails,
  message: state.getContributorDetailsReducer.message
});

const mapDispatchToProps = dispatch => ({
  getContributorDetails: repoName => {
    dispatch(getContributorDetails(repoName));
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(ContributorDetails);
