import { Component } from '@angular/core';
import { DataModel } from './models/data.model';
import { HttpClient } from '@angular/common/http';
import {Observable} from "rxjs";


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angulard3';
  public data: Observable<DataModel>;

  constructor(private httpClient: HttpClient) {
    this.data = this.httpClient.get<DataModel>('./assets/data.json');
  }
}
