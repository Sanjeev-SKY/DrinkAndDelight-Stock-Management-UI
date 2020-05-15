import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  operations:string;
  

  constructor(private router:Router) { }

  ngOnInit(): void {
  }

  selectOperation() {
    if(this.operations == "UpdateRmStock"){
        this.router.navigateByUrl('/updateRM');
    }
    else if(this.operations == "UpdatePrStock"){
      this.router.navigateByUrl('/updatePr');
    }
    else if(this.operations == "TrackRawMaterial"){
      this.router.navigateByUrl('/trackRmD');
    }
    else if(this.operations == "TrackProduct"){
      this.router.navigateByUrl('/trackPrD');
    }
  }

}
