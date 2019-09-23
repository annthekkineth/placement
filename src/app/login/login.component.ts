import { Component, OnInit } from '@angular/core';
import { PlacementService } from '../placement.service';
import{ Routes, Router } from '@angular/router';
import { from } from 'rxjs';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  logview:boolean=true;
  signview:boolean=false;
  det; aid; name; email; uname; password; msg;

  constructor(private ps:PlacementService, private route:Router) { }

  ngOnInit() {
  }

  public showsign(){
    this.logview=false;
    this.signview=true;
  }
  public showlog(){
    this.logview=true;
  this.signview=false;
  }

  public register(){
    this.det={aid:this.aid,name:this.name,email:this.email,uname:this.uname,password:this.password};
    this.ps.signup(this.det).subscribe(data=>{
      this.msg=data;
      console.log(this.msg);
      this.logview=true;
  this.signview=false;
    });
  }

  public login(){
    this.det={username:this.uname,password:this.password};
    this.ps.log(this.det).subscribe(data=>{
      this.msg=data;
      console.log(this.msg.role);
      if(this.msg.role == "admin")
        this.route.navigateByUrl("/adminhome");
      else if(this.msg.role == "student")
        this.route.navigateByUrl("/userhome");
    })
  }

}
