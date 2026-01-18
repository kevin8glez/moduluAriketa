import { Component, input } from '@angular/core';

@Component({
  selector: 'app-menua',
  imports: [],
  templateUrl: './menua.html',
  styleUrl: './menua.css',
})
export class Menua {
  auk = input<String[]>;
}
