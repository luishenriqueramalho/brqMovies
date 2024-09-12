import superagentPromise from "superagent-promise";
import _superagent, { ResponseError, Response } from "superagent";
import { IApiClient } from "./IApiClient";

// Config superagent
const superagent = superagentPromise(_superagent, global.Promise);

const handleError = (err: ResponseError, onAuthError: () => void) => {
  if (err?.status === 401) {
    onAuthError();
  }
  if (err?.response?.body?.statusCode != 200) {
    return err?.response?.body;
  }
};

const responseBody = (res: Response): unknown => {
  return res.body;
};

export class ApiClient implements IApiClient {
  get(url: string): Promise<unknown> {
    return superagent.get(`${url}`).then(responseBody).catch(handleError);
  }

  post(url: string, body: unknown): Promise<unknown> {
    return superagent
      .post(`${url}`, body)
      .then(responseBody)
      .catch(handleError);
  }

  put(url: string, body: unknown): Promise<unknown> {
    return superagent.put(`${url}`, body).then(responseBody).catch(handleError);
  }

  delete(url: string): Promise<unknown> {
    return superagent.del(`${url}`).then(responseBody).catch(handleError);
  }
}
