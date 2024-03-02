import axios from "axios";

const BASE_URL = "https://restcountries.com/v3.1/";

const fetchAllCountry = async () => {
  return axios.get(`${BASE_URL}/all`);
};

export { fetchAllCountry };
