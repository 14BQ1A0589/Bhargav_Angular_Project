import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { TshirtsComponent } from './tshirts/tshirts.component';
import { WomensComponent } from './womens/womens.component';
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
import { CartComponent } from './cart/cart.component';
import { SellerComponent } from './seller/seller.component';
import { RegisterComponent } from './register/register.component';
import { ReactformsComponent } from './reactforms/reactforms.component';



const routes: Routes = [
  
  {path:'',component:HomeComponent},
  {path: 'tshirt', component: TshirtsComponent},
  {path: 'women', component: WomensComponent},
  {path: 'formalshirts', component: FormalshirtsComponent},
  {path: 'casualshirts', component: CasualshirtsComponent},
  {path: 'winterwear', component: WinterwearComponent},
  {path: 'nightwear', component: NightwearComponent},
  {path: 'jeans', component: JeansComponent},
  {path: 'trousers', component: TrousersComponent},
  {path: 'kurtasw', component: KurtaswComponent},
  {path: 'kurtiesw', component: KurtieswComponent},
  {path: 'sarees', component: SareesComponent}, 
  {path: 'cart', component: CartComponent},
  {path: 'seller', component: SellerComponent},
  {path: 'register', component: RegisterComponent},
  {path: 'reactforms', component: ReactformsComponent}

 

  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
