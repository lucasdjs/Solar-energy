import { Component, OnInit } from '@angular/core';
import { dashboard } from 'models/modelo.dashboard';
import { HttpClient } from '@angular/common/http';
import { lista_dashboard } from 'utils/dashboard-mocks';
import { unidades } from 'models/modelo.unidades';
import { lista_unidades } from 'utils/unidades-mock';


@Component({
  selector: 'DSE-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
  
})
export class DashboardComponent implements OnInit {

  listaDashboard= lista_dashboard;   

  constructor(private http: HttpClient) { }

  ngOnInit(): void {


  }




}
