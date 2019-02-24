import axios from "axios";

export default axios.create({
  baseURL: "https://api.unsplash.com/",
  headers: {
    Authorization:
      "Client-ID 534c2be476365d441ddd0b26edd750fc652648e6718b9ea692cfd601310f16ba"
  }
});
