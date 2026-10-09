import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Movie } from '../new-list-movies/movie';

@Component({
  imports: [],
  selector: 'app-movie-card',
  styleUrl: './movie-card.scss',
  templateUrl: './movie-card.html',
})
export class MovieCard {
  @Input() movie!:Movie;
  @Output() addToFavorite:EventEmitter<Movie> = new EventEmitter<Movie>();
  onClick(){
    this.addToFavorite.emit(this.movie);
  }

}
