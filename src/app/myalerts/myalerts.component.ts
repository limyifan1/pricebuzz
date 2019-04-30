import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AuthService } from '../auth.service';


@Component({
  selector: 'app-myalerts',
  templateUrl: './myalerts.component.html',
  styleUrls: ['./myalerts.component.css']
})
export class MyalertsComponent implements OnInit {

  constructor(private http: HttpClient, private authService: AuthService) { }

  ngOnInit() {
    this.authService.verifiedUser = localStorage.getItem('user');
    this.getData(this.authService.verifiedUser);
  };

  alertModel=[];
  responseData=undefined;

  getData(data: string){
    this.http.post('http://localhost/cs4640/getCurrency.php', JSON.stringify({"user": data}))
    .subscribe((data) => {
      console.log('Got data from backend', data);
      this.responseData = data;
      this.responseData.content.forEach(i => {
        this.alertModel.push(i);
      });
   }, (error) => {
      console.log('Error', error);
   })
  }

  delete(alert){
    console.log(alert.id)
    this.alertModel = this.alertModel.filter(a => a !== alert);
    this.http.post('http://localhost/cs4640/deleteCurrency.php', JSON.stringify({"id": alert.id}))
    .subscribe((data) => {
      console.log('Got data from backend', data);
        this.responseData = data;
   }, (error) => {
      console.log('Error', error);
   })
  }
}
