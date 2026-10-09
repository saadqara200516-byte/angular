import { Component,inject } from '@angular/core';
import { Movie } from './movie';
import { MovieCard } from '../movie-card/movie-card';
import { Router, RouterModule } from '@angular/router';
import {MovieService} from '../movie-service'
@Component({
  imports: [MovieCard,RouterModule],
  selector: 'app-new-list-movies',
  styleUrl: './new-list-movies.scss',
  templateUrl: './new-list-movies.html',
  standalone: true,
})
export class NewListMovies {
  favorites: Array<Movie> = [];
  movieList: Array<Movie> = []
  movieListService : MovieService = inject(MovieService);

  constructor(){
    this.movieList = this.movieListService.getAllMovies()
  }
  addToFavorite(movie: Movie) {
    for (let i = 0; i < this.favorites.length; i++) {
      if (movie.id == this.favorites[i].id) {
        alert('The movie is already in the favorites');
        return;
      }
    }
    this.favorites.push(movie);
  }

}
