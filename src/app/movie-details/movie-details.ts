<<<<<<< Updated upstream
import { Component, inject } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import { CommonModule } from '@angular/common';
import {MovieService} from '../movie-service';
import {MovieCard} from '../movie-card/movie-card';
import { Movie } from '../new-list-movies/movie';

@Component({
  imports: [CommonModule],
=======
import { ChangeDetectorRef, Component, inject } from '@angular/core';
import { ActivatedRoute, RouterLinkActive } from '@angular/router';
import { MovieService } from '../movie-service';
import { Movie } from '../new-list-movies/movie';

@Component({
  imports: [RouterLinkActive],
>>>>>>> Stashed changes
  selector: 'app-movie-details',
  styleUrl: './movie-details.scss',
  templateUrl: './movie-details.html',
})
export class MovieDetails {
<<<<<<< Updated upstream
  route: ActivatedRoute = inject(ActivatedRoute);
  movieService: MovieService = inject(MovieService);
  movie: Movie;

  constructor() {
    const movieId = Number(this.route.snapshot.params['id']);
    this.movie=<Movie>this.movieService.getMovieById(movieId)
=======
  changeDetectorRef = inject(ChangeDetectorRef);
  movie!: Movie;
  route: ActivatedRoute = inject(ActivatedRoute);
  movieService: MovieService = inject(MovieService);

  ngOnInit() {
    const movieId = this.route.snapshot.params['id'];
    this.movieService.getMovieById(movieId).subscribe((data) => {
      this.movie = data;
      this.changeDetectorRef.detectChanges();
    });
    console.log(this.movie);
>>>>>>> Stashed changes
  }
}
