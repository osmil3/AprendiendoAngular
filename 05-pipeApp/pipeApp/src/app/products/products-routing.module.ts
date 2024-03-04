import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductsComponent } from './products.component';
import { BasicPageComponent } from './pages/basic-page/basic-page.component';
import { NumberPageComponent } from './pages/number-page/number-page.component';
import { UncommunPageComponent } from './pages/uncommun-page/uncommun-page.component';

const routes: Routes = [
  { path: '',
    component: BasicPageComponent
 },

 { path: 'number',
    component: NumberPageComponent
 },

 { path: 'uncommun',
    component: UncommunPageComponent
 },

 { path: '**',
    redirectTo: ''
 }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductsRoutingModule { }
