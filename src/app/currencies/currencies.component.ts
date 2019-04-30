import { Component, OnInit } from '@angular/core';
import { Currency } from './currency'
import { HttpClient } from '@angular/common/http';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-currencies',
  templateUrl: './currencies.component.html',
  styleUrls: ['./currencies.component.css']
})
export class CurrenciesComponent implements OnInit {

  constructor(private http: HttpClient, private authService: AuthService) { }

  ngOnInit() {
    this.authService.verifiedUser = localStorage.getItem('user');
  };

  currencyModel = {
    usdjpy: new Currency("usdjpy", 111.65),
    usdsgd: new Currency("usdsgd", 1.36),
    eurusd: new Currency("eurusd", 1.1151),
    gbpusd: new Currency("gbpusd", 1.2916),
    audusd: new Currency("audusd", 0.7042),
    usdcad: new Currency("usdcad", 1.3455),
    usdchf: new Currency("usdchf", 1.0196),
    eurjpy: new Currency("eurjpy", 124.46),
    eurgbp: new Currency("eurgbp", 0.8630),
  }

  responseData=undefined;
  responseData2=undefined;

  verifiedUser = localStorage.getItem('user');

  sendData(data){
    this.http.post('http://localhost/cs4640/sendCurrency.php', data)
    .subscribe((data) => {
      console.log('Got data from backend', data);
      this.responseData = data;
   }, (error) => {
      console.log('Error', error);
   })
  }

  checkUser(data){
    this.http.post('http://localhost/cs4640/checkUser.php', data)
    .subscribe((data) => {
      console.log('Got data from backend', data);
      this.responseData2 = data;
   }, (error) => {
      console.log('Error', error);
   })
   return null;
  }
}
