import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { CatalogoComponent } from "./catalago/catalogo.component";


@Component({
  selector: 'root-app',
  standalone: true,
  imports: [FormsModule, CommonModule, CatalogoComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {

}
