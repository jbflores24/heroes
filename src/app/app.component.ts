import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'appServicios';
  paises: any[] = [];
  constructor(private http: HttpClient) {
    this.http.get("https://restcountries.eu/rest/v2/lang/es").subscribe(
      (resp: any) => {
        this.paises = resp;
        console.log(resp);
      }
    );
  }
}
