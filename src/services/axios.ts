import axios, { AxiosError, AxiosResponse } from "axios";

async function get(url: string): Promise<AxiosResponse<any, AxiosError>> {
  try {
    return axios.get(url);
  } catch (error: any) {
    return error;
  }
}

export const request = {
  get,
};
