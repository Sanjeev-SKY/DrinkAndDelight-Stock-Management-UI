import { RawMaterialServiceService } from './../services/raw-material-service.service';
import { RawMaterialStock } from './../model/raw-material-stock';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-up-rm-stock',
  templateUrl: './up-rm-stock.component.html',
  styleUrls: ['./up-rm-stock.component.css']
})
export class UpRmStockComponent implements OnInit {

  orderId:number;
  UpProcessDate:boolean;
  UpRmDetails:boolean;
  model:RawMaterialStock;
  submitted:boolean;
  dataFound:boolean;
  dataNotFound:boolean;
  IdExist:boolean;
  DateUpdated:boolean;
  success:boolean;
  detailSubmitButton:boolean;
  errorMsg:boolean;
  constructor(private service:RawMaterialServiceService) {
      this.model=new RawMaterialStock();
   }

  ngOnInit(): void {
  }

  ProcessDate(): void {
    this.UpProcessDate=true;
    this.UpRmDetails=false;
  }

  findById(){
    this.submitted=true; 
    this.service.findById(this.orderId).subscribe(
      (data)=>{
        this.dataFound=true;
        this.model=data;
        this.IdExist=true;
        console.log(this.model);
      },
      (err)=>{
        this.dataNotFound=true;
        this.dataFound=false;
        setTimeout(()=>this.dataNotFound=false,3000);
      }
    )
  }

  RmDetails(): void {
    this.UpRmDetails=true;
    this.UpProcessDate=false;
  }

  setPrDate(): void {
    this.model.orderId=this.orderId;
    if(this.model!=null){
      this.service.addProcessDate(this.model).subscribe(
        (data)=>{
          this.model=data;
          this.DateUpdated=true;
          this.success=true;
          window.alert(this.model.status);
          setTimeout(()=>this.success=false,3000);
          this.IdExist=false;
          
        },
        (err)=>{
          this.errorMsg=true;
          console.log(err);
          window.alert("There exist process date already for the given Id");
          setTimeout(()=>this.success=false,3000);
        }
      )
    }
    this.dataFound=false;
    this.UpProcessDate=false;
  }

  submitRmDetails(): void {

    this.detailSubmitButton=true;
    if(this.model!=null){
      this.service.updateRawMaterialDetails(this.model).subscribe(
        (data)=>{
          this.model=data;
          this.success=true;
          console.log(data);
          window.alert(this.model.status)
          setTimeout(()=>this.success=false,3000);
        },
        (err)=>{
          this.errorMsg=true;
          window.alert("There does not Exist any Raw Material order with this Id");
          setTimeout(()=>this.success=false,3000);
        }
      )
    }

    this.UpRmDetails=false;
  }
}
