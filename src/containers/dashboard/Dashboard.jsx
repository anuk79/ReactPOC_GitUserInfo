//react imports
import React from "react";
import { Table } from "reactstrap";
import { connect } from "react-redux";
//styles
import "./Dashboard.scss";
//components
import TableHeader from "../../components/tableHeader/TableHeader";
import TableBody from "../../components/tableBody/TableBody";
import PageHeader from "../../components/pageHeader/PageHeader";
import SearchBox from "../searchBox/SearchBox";
//actions
import { getRepos, searchRepos } from "../../actions/getRepoActions";

class Dashboard extends React.Component {

  componentDidMount() {
    const { userData, searchQuery, searchRepos, getRepos } = this.props;

    if (searchQuery) {
      searchRepos(searchQuery, userData);
    } else {
      getRepos();
    }
  }

  onSearch = query => this.props.searchRepos(query, this.props.userData);

  render() {
    const { filteredData, isLoading, message, searchQuery } = this.props;

    return (
      <div>
        <PageHeader headerText="Dashboard" />
        <SearchBox onSearch={this.onSearch} searchQuery={searchQuery} />
        <Table hover bordered>
          <thead>
            <TableHeader columns={Dashboard.columns} />
          </thead>
          <tbody>
            <TableBody
              userData={filteredData}
              isLoading={isLoading}
              message={message}
            />
          </tbody>
        </Table>
      </div>
    );
  }
}

Dashboard.columns = [
  "S. No.",
  "ID",
  "User",
  "Repository",
  "Teams",
  "Contributors URL"
];

const mapStateToProps = state => ({
  userData: state.getRepoReducer.userData,
  filteredData: state.getRepoReducer.filteredData,
  isLoading: state.getRepoReducer.isLoading,
  message: state.getRepoReducer.message,
  searchQuery: state.getRepoReducer.searchQuery
});

const mapDispatchToProps = dispatch => ({
  getRepos: () => {
    dispatch(getRepos());
  },
  searchRepos: (query, data) => {
    dispatch(searchRepos(query, data));
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);
