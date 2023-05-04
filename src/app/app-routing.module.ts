import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductComponent } from './product/product.component';
import { OffresEmploiComponent } from './offres-emploi/offres-emploi.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { AddProductComponent } from './add-product/add-product.component';
import { DetailsComponent } from './details/details.component';

const routes: Routes = [
  {path:'', redirectTo:'products', pathMatch:'full'},
  {path: 'products' , component:ProductComponent},
  {path: 'offres' , component:OffresEmploiComponent},
  {path: 'add' , component:AddProductComponent},
  {path: 'product/:id' , component:DetailsComponent},
  {path:'**', component:NotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
