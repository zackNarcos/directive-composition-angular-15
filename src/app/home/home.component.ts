import { Component, OnInit } from '@angular/core';
import { StyleBold, StyleColor, StyleDirevtive } from '../style.directive';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  standalone: true,
  imports: [StyleDirevtive],
})
export class HomeComponent {}
