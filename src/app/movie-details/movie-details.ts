import { ChangeDetectorRef, Component, inject } from '@angular/core';
import { MovieService } from '../movie-service';
import { Movie } from '../new-list-movies/movie';

@Component({
  selector: 'app-movie-details',
  styleUrl: './movie-details.scss',
  templateUrl: './movie-details.html',
})
export class MovieDetails {
  movie!:Movie;
}
