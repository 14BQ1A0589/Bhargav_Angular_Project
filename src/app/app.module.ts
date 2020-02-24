import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import {
  MatInputModule,
  MatPaginatorModule,
  MatProgressSpinnerModule,
  MatSortModule,
  MatTableModule,
  MatIconModule,
  MatButtonModule,
  MatCardModule,
  MatFormFieldModule } from "@angular/material";


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ReactiveFormsModule } from '@angular/forms';
import { environment } from 'src/environments/environment';



import { FormsModule } from '@angular/forms';
import { BodyComponent } from './body/body.component';
import { TestDirective } from './test.directive';
import { NavigationComponent } from './navigation/navigation.component';
import { MensComponent } from './mens/mens.component';
import { WomensComponent } from './womens/womens.component';
import { KidsComponent } from './kids/kids.component';
import { FooterComponent } from './footer/footer.component';
import { DropdownDirective } from './dropdown.directive';
import { RouterModule, Routes } from '@angular/router';
import { TshirtsComponent } from './tshirts/tshirts.component';
import { FormalshirtsComponent } from './formalshirts/formalshirts.component';
import { HomeComponent } from './home/home.component';
import { CasualshirtsComponent } from './casualshirts/casualshirts.component';
import { WinterwearComponent } from './winterwear/winterwear.component';
import { NightwearComponent } from './nightwear/nightwear.component';
import { JeansComponent } from './jeans/jeans.component';
import { TrousersComponent } from './trousers/trousers.component';
import { KurtaswComponent } from './kurtasw/kurtasw.component';
import { KurtieswComponent } from './kurtiesw/kurtiesw.component';
import { SareesComponent } from './sarees/sarees.component';
import { WesternwearwComponent } from './westernwearw/westernwearw.component';
import { AccountsService } from './accounts.service';
import { LoggingService } from './logging.service';
import { ShortenPipe } from './shorten.pipe';
import { CartComponent } from './cart/cart.component';
import { SellerComponent } from './seller/seller.component';
import { RegisterComponent } from './register/register.component';
import { ReactformsComponent } from './reactforms/reactforms.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import * as firebase from 'firebase';


firebase.initializeApp(environment.firebase);

   


@NgModule({
  declarations: [
    AppComponent,
    BodyComponent,
    TestDirective,
    NavigationComponent,
    MensComponent,
    WomensComponent,
    KidsComponent,
    FooterComponent,
    DropdownDirective,
    TshirtsComponent,
    FormalshirtsComponent,
    HomeComponent,
    CasualshirtsComponent,
    WinterwearComponent,
    NightwearComponent,
    JeansComponent,
    TrousersComponent,
    KurtaswComponent,
    KurtieswComponent,
    SareesComponent,
    WesternwearwComponent,
    CartComponent,
    SellerComponent,
    RegisterComponent,
    ReactformsComponent,
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatInputModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatProgressSpinnerModule,
    MatIconModule,
    MatButtonModule,
    MatCardModule,
    MatFormFieldModule,
    

  ],
  providers: [AccountsService, LoggingService],
  bootstrap: [AppComponent]
})
export class AppModule { }
