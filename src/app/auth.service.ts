import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import {Router} from '@angular/router';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/map';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient, private router: Router) { }
  auth: boolean;

  // checkAuth(): Observable<boolean> {
	// 	return this.http.get('auth.php')
	// 		.map(response => {
	// 			console.log(response);
	// 			if(response['auth'] == 1) {
	// 				return true;
	// 			} else {
	// 				return false;
	// 			}
	// 		});
	// }

  login(u: string, p: string): Observable<boolean> {
    console.log("authservice: "+u)
		return this.http.post('http://localhost/cs4640/login.php', JSON.stringify({"user": u, "pass":p}))
			.map(response => {
				console.log(response);
				if(response['auth'] == 1) {
					return true;
				} else {
					return false;
				}
			})
  }
  
  verifiedUser = localStorage.getItem('user');

  logout(){
    localStorage.clear();
    this.router.navigate(['/login']);
  }

  checkAuth(): Observable<boolean> {
    console.log("Running")
		return this.http.get('http://localhost/cs4640/login.php')
			.map(response => {
				console.log(response);
				if(response['auth'] == 1) {
					return true;
				} else {
					return false;
				}
			});
	}
}
