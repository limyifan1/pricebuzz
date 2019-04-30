import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import {Router} from '@angular/router';
import { Observable, of } from 'rxjs';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/map';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers: [AuthService],
})
export class LoginComponent implements OnInit {

  constructor(private http: HttpClient, private router: Router, private authService: AuthService) { }

  ngOnInit() {
    if (localStorage.getItem("user")){
      this.router.navigate(['/currencies']);
    }
    // this.authService.checkAuth().subscribe(auth =>{
		// 	if(auth) {
		// 		this.router.navigate(['/currencies']);
		// 	}
		// });
  }

  responseData={ "content": [ { "user": "", "pass": "", "status": "" } ] }

  user="";
  pass="";
  status="";

  logout(){
    this.authService.logout()
  }

  submitValues(form: any): void{
    console.log(form);
    this.authService.login(form.user, form.pass).subscribe(auth =>{
			if(auth) {
        localStorage.setItem("user", form.user);
        console.log("local storage"+localStorage.getItem("user"));
				this.router.navigate(['/currencies']);
		  }
    })
  }

  // submitValues(data){
  //   console.log(data)
  //   this.http.post('http://localhost/cs4640/login.php', data)
  //   .subscribe((data) => {
  //     console.log('Got data from backend', data);
  //     this.responseData = data;
  //     if (this.responseData.content[0].status=="success"){
  //       this.router.navigateByUrl('/currencies');
  //     }
  //  }, (error) => {
  //     console.log('Error', error);
  //  })
  //  status="Failed"
  // }

}