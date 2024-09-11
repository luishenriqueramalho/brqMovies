import superagentPromise from "superagent-promise";
import _superagent, { ResponseError, Response } from "superagent";

const API_KEY = process.env.API_KEY;
const API_URL = process.env.API_URL;

// Config superagent
const superagent = superagentPromise(_superagent, global.Promise);

interface BodyResponse {}

const handleError = (err: ResponseError, onAuthError: () => void) => {
  if (err?.status === 401) {
    onAuthError();
  }
  if (err?.response?.body?.statusCode != 200) {
    return err?.response?.body;
  }
};

const responseBody = (res: Response) => {
  return res.body as BodyResponse;
};

const requests = {
  get: (url: string) =>
    superagent.get(`${url}`).then(responseBody).catch(handleError),
  post: (url: string, body: any) =>
    superagent.post(`${url}`, body).then(responseBody).catch(handleError),
  put: (url: string, body: any) =>
    superagent.put(`${url}`, body).then(responseBody).catch(handleError),
  del: (url: string) =>
    superagent.del(`${url}`).then(responseBody).catch(handleError),
};

const MoviesRoute = {
  getMovies: () => requests.get(`${API_URL}/movie/popular?api_key=${API_KEY}`),
};

const apiCall = {
  MoviesRoute,
};

export default apiCall;
