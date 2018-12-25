//react imports
import React from "react";
import { connect } from "react-redux";
//styles
import "./UserDetails.scss";
//components
import Details from "../../components/details/Details";
import PageHeader from "../../components/pageHeader/PageHeader";
//actions
import { getUserDetails } from "../../actions/getUserDetailsActions";
//constants
import { DETAILS_TEXT } from "../../constants/commonConstants";

class UserDetails extends React.Component {
    
  componentDidMount() {
    const { userName } = this.props.match.params;
    this.props.getUserDetails(userName);
  }

  render() {
    const { userDetails } = this.props;
    return (
      <div>
        <PageHeader
          headerText={this.props.match.params.userName + DETAILS_TEXT}
        />
        <Details details={userDetails} />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  userDetails: state.getUserDetailsReducer.userDetails
});

const mapDispatchToProps = dispatch => ({
  getUserDetails: userName => {
    dispatch(getUserDetails(userName));
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(UserDetails);
