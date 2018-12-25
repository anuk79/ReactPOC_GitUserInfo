import axios from "axios";

const getUserDetails = ({ repoName }) =>
  axios.get(
    `https://api.github.com/repos/rashmivishwakarma/${repoName}/contributors`
  );

export default getUserDetails;
