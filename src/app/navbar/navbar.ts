import { Component } from '@angular/core';
import { SearchBar } from '../search-bar/search-bar';

@Component({
  imports: [SearchBar],
  selector: 'app-navbar',
  styleUrl: './navbar.scss',
  templateUrl: './navbar.html',
  standalone: true,
})
export class Navbar {}
