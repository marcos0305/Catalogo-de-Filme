import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminFilmeFormComponent } from "./admin-filme-form/admin-filme-form.component";


@Component({
    selector: 'app-admin',
    imports: [CommonModule, AdminFilmeFormComponent],
    templateUrl: './admin.component.html',
    styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  constructor() { }

  ngOnInit():void {

  }

}
