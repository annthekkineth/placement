import { Component, OnInit } from '@angular/core';
import { PlacementService } from '../placement.service';

@Component({
  selector: 'app-adddrive',
  templateUrl: './adddrive.component.html',
  styleUrls: ['./adddrive.component.css']
})
export class AdddriveComponent implements OnInit {
  did; company; job; qualification; venue; date; details;
  constructor(private ps:PlacementService) { }

  ngOnInit() {
  }

  public add(){
    this.details={did:this.did,company:this.company,job:this.job,venue:this.venue,date:this.date,qualification:this.qualification};
    this.ps.adddrive(this.details).subscribe(data=>{
      console.log(data);
    })
  }
}
