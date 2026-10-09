import { Component } from '@angular/core';
import { Movie } from './movie';
import { MovieCard } from '../movie-card/movie-card';
@Component({
  imports: [MovieCard],
  selector: 'app-new-list-movies',
  styleUrl: './new-list-movies.scss',
  templateUrl: './new-list-movies.html',
  standalone: true,
})
export class NewListMovies {
  favorites: Array<Movie> = [];
  movieList: Array<Movie> = [
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
    },
  ];

  addToFavorite(movie: Movie) {
    for (let i = 0; i < this.favorites.length; i++) {
      if (movie.id == this.favorites[i].id) {
        alert('The movie is already in the favorites');
        return;
      }
    }
    this.favorites.push(movie);
  }
  remove_from_favorites(movie:Movie){

  }
}
