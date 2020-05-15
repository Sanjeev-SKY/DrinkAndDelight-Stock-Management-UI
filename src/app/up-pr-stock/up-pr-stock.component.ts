import { ProductServiceService } from './../services/product-service.service';
import { ProductStock } from './../model/product-stock';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-up-pr-stock',
  templateUrl: './up-pr-stock.component.html',
  styleUrls: ['./up-pr-stock.component.css']
})
export class UpPrStockComponent implements OnInit {

  orderId:number;
  UpExitDate:boolean;
  UpProductDetails:boolean;
  model:ProductStock;
  submitted:boolean;
  dataFound:boolean;
  dataNotFound:boolean;
  IdExist:boolean;
  IdExist1:boolean;
  DateUpdated:boolean;
  success:boolean;
  detailSubmitButton:boolean;
  errorMsg:boolean;

  constructor(private service:ProductServiceService) {
     this.model=new ProductStock();
   }

  ngOnInit(): void {
  }

  productDetails() {
    this.UpProductDetails=true;
    this.UpExitDate=false;
  }

  findById(){
    this.submitted=true; 
    this.service.findById(this.orderId).subscribe(
      (data)=>{
        this.dataFound=true;
        this.model=data;
        this.IdExist1=true;
        console.log(this.model);
      },
      (err)=>{
        this.dataNotFound=true;
        this.dataFound=false;
        setTimeout(()=>this.dataNotFound=false,3000);
      }
    )
  }

  exitDate(){
    this.UpExitDate=true;
    this.UpProductDetails=false;
  }

  submitProductDetails() {
    
    this.detailSubmitButton=true;
    if(this.model!=null){
       this.model.orderId=this.orderId;
      this.service.updateProductDetails(this.model).subscribe(
        (data)=>{
          this.model=data;
          this.success=true;
          window.alert(this.model.status);
          setTimeout(()=>this.success=false,3000);
          this.IdExist1=false;
        },
        (err)=>{
          this.errorMsg=true;
          window.alert(err);
          setTimeout(()=>this.success=false,3000);
        }
      )
    }
    
    this.UpProductDetails=false;
    this.dataFound=false;
  }

  setExitDate() {
    this.DateUpdated=true;
    if(this.model!=null){
      
      this.service.addExitDate(this.model).subscribe(
        (data)=>{
          this.model=data;
          window.alert(this.model.status);
          console.log(data);
          this.success=true;
          setTimeout(()=>this.success=false,3000);
        },
        (err)=>{
          this.errorMsg=true;
          window.alert("There already exist exit date for the given Id");
          setTimeout(()=>this.success=false,3000);
        }
      )
    }
    this.UpExitDate=false;
  }
}
