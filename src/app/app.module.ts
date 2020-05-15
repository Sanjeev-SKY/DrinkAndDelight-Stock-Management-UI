import { ProductServiceService } from './services/product-service.service';
import { HttpClientModule } from '@angular/common/http';
import { RawMaterialServiceService } from './services/raw-material-service.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { UpRmStockComponent } from './up-rm-stock/up-rm-stock.component';
import { UpPrStockComponent } from './up-pr-stock/up-pr-stock.component';
import { TrackRmComponent } from './track-rm/track-rm.component';
import { TrackPrComponent } from './track-pr/track-pr.component';
import { FormsModule } from '@angular/forms';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    UpRmStockComponent,
    UpPrStockComponent,
    TrackRmComponent,
    TrackPrComponent,
    HomeComponent,
    HeaderComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [RawMaterialServiceService, ProductServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
