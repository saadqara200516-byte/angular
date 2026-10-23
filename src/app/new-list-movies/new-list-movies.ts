import { ChangeDetectorRef, Component, inject } from '@angular/core';
import { Movie } from './movie';
import { MovieCard } from '../movie-card/movie-card';
import { Router, RouterModule } from '@angular/router';
import { MovieService } from '../movie-service';

@Component({
  imports: [MovieCard, RouterModule],
  selector: 'app-new-list-movies',
  styleUrl: './new-list-movies.scss',
  templateUrl: './new-list-movies.html',
  standalone: true,
})
export class NewListMovies {
  favorites: Array<Movie> = [];
  movieList: Array<Movie> = [];
  movieService = inject(MovieService);
  changeDetectorRef = inject(ChangeDetectorRef);

  ngOnInit() {
    this.movieService.getAllMovies().subscribe((data) => {
      this.movieList = data.results;
      this.changeDetectorRef.detectChanges();
    });
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
