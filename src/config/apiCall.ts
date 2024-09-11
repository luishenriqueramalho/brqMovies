import superagentPromise from "superagent-promise";
import _superagent, { ResponseError, Response } from "superagent";

const API_KEY = process.env.API_KEY;
const API_URL = process.env.API_URL;

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

const requests = {
  get: (url: string) =>
    superagent.get(`${url}`).then(responseBody).catch(handleError),
  post: (url: string, body: unknown) =>
    superagent.post(`${url}`, body).then(responseBody).catch(handleError),
  put: (url: string, body: unknown) =>
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
