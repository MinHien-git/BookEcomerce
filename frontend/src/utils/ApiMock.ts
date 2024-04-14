import axios from "axios";
import { ApiBase } from "./ApiBase";

export class ApiMock extends ApiBase {
  constructor() {
    super("mock");
  }

  getMockData() {
    return axios
      .get("https://dog.ceo/api/breeds/image/random")
      .then((res) => res.data);
  }
}
