import { Service } from '@angular/core';
import { Movie } from './new-list-movies/movie';
@Service()
export class MovieService {
  protected movieList:Array<Movie> = [
    {
      id: 1,
      title: 'Inception',
      category: 'Action',
      year: '2003',
      image: '500_days_of_summer.jpeg',
    },
    {
      id: 2,
      title: 'The best of youth',
      category: 'Drama',
      year: '2003',
      image: 'best_of_youth_poster.jpg',
    },
    {
      id: 3,
      title: 'Inception',
      category: 'Action',
      year: '2003',
      image: 'inception.jpeg',
    },
    {
      id: 4,
      title: 'Eternal sunshine',
      category: 'Drama',
      year: '2000',
      image: 'eternal_sunshine.jpeg',
    },
    {
      id: 5,
      title: 'nice_guys',
      category: 'Action',
      year: '2020',
      image: 'nice_guys.jpeg',
    },]
  getAllMovies(){
    return this.movieList;
  }
<<<<<<< Updated upstream
  getMovieById(id:number):Movie|undefined{
    return this.movieList.find((movie) => movie.id === id);

=======
  getMovieById(id: number) {
    const url = `https://api.themoviedb.org/3/movie/${id}?api_key=${this.API_KEY}`;
    console.log('url:', url);
    return this.http.get<any>(url);
>>>>>>> Stashed changes
  }
}
