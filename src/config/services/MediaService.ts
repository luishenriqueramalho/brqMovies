import { IApiClient } from "../api/IApiClient";
import { IMediaService } from "./IMediaService";

export class MediaService implements IMediaService {
  private readonly apiClient: IApiClient;
  private readonly API_URL: string;
  private readonly API_KEY: string;

  constructor(apiClient: IApiClient, apiUrl: string, apiKey: string) {
    this.apiClient = apiClient;
    this.API_URL = apiUrl;
    this.API_KEY = apiKey;
  }

  getPopularMovies(): Promise<unknown> {
    const url = `${this.API_URL}/movie/popular?api_key=${this.API_KEY}`;
    return this.apiClient.get(url);
  }
}
