import { ApiGif } from '../api/types';

export const mapApiGifsToIds = (apiGifs: ApiGif[]) => apiGifs.map((apiGif) => apiGif.id);
