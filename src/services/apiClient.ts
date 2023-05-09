import axios, { CanceledError } from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api/",
  params: {
    key: "5907cc0074814ab18001699141ec956e",
  },
});

export { CanceledError };
