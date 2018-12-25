import axios from "axios";

const getUserDetails = ({ userName }) =>
  axios.get(`https://api.github.com/users/${userName}`);

export default getUserDetails;
