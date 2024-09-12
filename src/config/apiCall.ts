import { ApiClient } from "./api/ApiClient";
import { MediaService } from "./services/MediaService";

const apiClient = new ApiClient();

const API_URL = process.env.API_URL as string;
const API_KEY = process.env.API_KEY as string;

const movieService = new MediaService(apiClient, API_URL, API_KEY);

export default movieService;
