import axios from "axios";


async function permission() {
  let url = `http://ip-api.com/json/`;

  const response = await axios.get(url)
 return response;
}


export default service;


export const service = {
  permission,
};