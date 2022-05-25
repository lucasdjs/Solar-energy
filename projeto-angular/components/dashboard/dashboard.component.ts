import { Component, OnInit } from '@angular/core';
import { dashboard } from 'models/modelo.dashboard';
import { HttpClient } from '@angular/common/http';
import { lista_dashboard } from 'utils/dashboard-mocks';


@Component({
  selector: 'DSE-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
  
})
export class DashboardComponent implements OnInit {

  listaDashboard: dashboard[]= lista_dashboard;

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.http.get<dashboard[]>( "http://localhost:3000/lista_dashboard" ).subscribe((resultado) => {
   this.listaDashboard = resultado;
 })

  }


}
