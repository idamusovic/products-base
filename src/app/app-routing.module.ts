import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductListComponent } from './components/product-list/product-list.component';
import { ProductResolver } from './resolvers/product.resolver';

const routes: Routes = [

  {
    path: '',
    component: ProductListComponent,
    resolve: {
      routeResolver: ProductResolver
    },
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
