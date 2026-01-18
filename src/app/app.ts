import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Menua } from './menua/menua';
import { Taula } from './taula/taula';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Menua, Taula],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  menuMota = [false, true];
}
