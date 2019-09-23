import { Component, OnInit } from '@angular/core';
import { PlacementService } from '../placement.service';
  import { from } from 'rxjs';

@Component({
  selector: 'app-managedrive',
  templateUrl: './managedrive.component.html',
  styleUrls: ['./managedrive.component.css']
})
export class ManagedriveComponent implements OnInit {

  drive;
  constructor(private ps:PlacementService) { }

  ngOnInit() {
    this.ps.managedrive().subscribe(data=>{
      this.drive=data;
    })
  }

  public editdrive(did){
    
  }

}
