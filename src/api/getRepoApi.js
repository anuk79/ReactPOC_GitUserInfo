import axios from "axios";

const getRepos = () =>
  axios.get(`https://api.github.com/users/rashmivishwakarma/repos`);

export default getRepos;
