import { Service, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Service()
export class MovieService {
  http = inject(HttpClient);
  API_KEY = '73041659f74e186d79b17b39daf0bcd8';
  url = 'https://api.themoviedb.org/3/movie/popular';

  getAllMovies() {
    return this.http.get<any>(this.url + '?api_key=' + this.API_KEY) //+ '&page=2'//);
  }

  getMovieById(id: number) {
    const url = `https://api.themoviedb.org/3/movie/${id}?api_key=${this.API_KEY}`;
    return this.http.get<any>(url);
  }
}
