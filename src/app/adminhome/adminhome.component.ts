import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PlacementService } from '../placement.service';

@Component({
  selector: 'app-adminhome',
  templateUrl: './adminhome.component.html',
  styleUrls: ['./adminhome.component.css']
})
export class AdminhomeComponent implements OnInit {
id; res;
  constructor(private ar:ActivatedRoute,private ps:PlacementService) { }

  ngOnInit() {
   ;
  }

}
