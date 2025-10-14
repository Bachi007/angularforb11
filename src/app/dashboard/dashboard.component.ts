import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent {
  user:any;username:any;
  constructor(private router:Router){}
  logout(){
    localStorage.removeItem("loggedin")
    this.router.navigateByUrl("")
  }
  ngOnInit(){
    if(localStorage.getItem('loggedin')){
      this.user=localStorage.getItem("loggedin");
      this.user=JSON.parse(this.user)
      this.username=this.user.username
    }
    else{
      this.router.navigateByUrl("")
    }
  }

}
