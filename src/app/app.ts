import { Component, signal } from '@angular/core';
import { Navbar } from './navbar/navbar';
import { Sidebar } from './sidebar/sidebar';
import { NewListMovies } from './new-list-movies/new-list-movies';
import { MovieDetails } from './movie-details/movie-details';
import { RouterOutlet } from '@angular/router';

@Component({
  imports: [Navbar, Sidebar, NewListMovies, MovieDetails, RouterOutlet],
  selector: 'app-root',
  styleUrl: './app.scss',
  templateUrl: './app.html',
  standalone: true,
})
export class App {
  protected readonly title = signal('my-movies');
}
