import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { from } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PlacementService {

  constructor(private hc:HttpClient) { }

  public signup(det){
    let url="http://localhost:8000/register";
    return this.hc.post(url,det);
  }

  public log(det){
    let url="http://localhost:8000/login";
    return this.hc.post(url,det);
  }

  //add drive
  public adddrive(drive){
    let url="http://localhost:8000/adddrive";
    return this.hc.post(url,drive);
  }

  //manage drive view
  public managedrive(){
    let url="http://localhost:8000/managedrive";
    return this.hc.get(url);
  }

}
