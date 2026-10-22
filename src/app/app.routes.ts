import { Routes } from '@angular/router';
<<<<<<< Updated upstream
import  {MovieCard} from './movie-card/movie-card';
import { NewListMovies } from './new-list-movies/new-list-movies';
import {MovieDetails} from './movie-details/movie-details';
export const routes: Routes = [
  {
    path:'',
    component: NewListMovies,
    title : 'List Movies'
  },
  {path :'details/:id',
  component:MovieDetails,
  title : 'Details page'}
=======
import { NewListMovies } from './new-list-movies/new-list-movies';
import { MovieDetails } from './movie-details/movie-details';

export const routes: Routes = [
  {
    path: '',
    component: NewListMovies,
    title:"Home Page"
  },
  {
  path : "details/:id",
  component : MovieDetails,
  title :"Movie Details"
}
>>>>>>> Stashed changes
];
