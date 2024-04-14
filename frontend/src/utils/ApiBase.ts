import axios, { AxiosInstance } from "axios";
import { error } from "console";

export interface IAxiosResponse {
  message: string;
  status: string;
  data: Object | undefined | null;
}

export abstract class ApiBase {
  public requester: AxiosInstance;

  constructor(name: string) {
    this.requester = axios.create({
      baseURL: `${process.env.NEXT_PUBLIC_API_DOMAIN}/${name}`,
      headers: {
        "Content-Type": "application/json",
      },
    });
  }

  public get(path = ""): Promise<IAxiosResponse> {
    return this.requester.get(path).then((res) => res.data);
  }

  public post<T>(
    path: string,
    data: T,
    config = {
      headers: {
        "Content-Type": "application/json",
      },
    }
  ): Promise<any> {
    return this.requester
      .post(path, data, config)
      .then((res) => res)
      .catch((error) => console.error(error));
  }

  public put<T>(path: string, data: T): Promise<IAxiosResponse> {
    return this.requester.put(path, data).then((res) => res.data);
  }

  public delete(path: string): Promise<IAxiosResponse> {
    return this.requester.delete(path).then((res) => res.data);
  }
}
