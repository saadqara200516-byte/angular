import { Component, inject } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import { CommonModule } from '@angular/common';
import {MovieService} from '../movie-service';
import {MovieCard} from '../movie-card/movie-card';
import { Movie } from '../new-list-movies/movie';

@Component({
  imports: [CommonModule],
  selector: 'app-movie-details',
  styleUrl: './movie-details.scss',
  templateUrl: './movie-details.html',
})
export class MovieDetails {
  route: ActivatedRoute = inject(ActivatedRoute);
  movieService: MovieService = inject(MovieService);
  movie: Movie;

  constructor() {
    const movieId = Number(this.route.snapshot.params['id']);
    this.movie=<Movie>this.movieService.getMovieById(movieId)
  }
}
