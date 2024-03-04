import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductsRoutingModule } from './products-routing.module';
import { ProductsComponent } from './products.component';
import { BasicPageComponent } from './pages/basic-page/basic-page.component';
import { NumberPageComponent } from './pages/number-page/number-page.component';
import { UncommunPageComponent } from './pages/uncommun-page/uncommun-page.component';


@NgModule({
  declarations: [
    ProductsComponent,
    BasicPageComponent,
    NumberPageComponent,
    UncommunPageComponent
  ],
  imports: [
    CommonModule,
    ProductsRoutingModule
  ]
})
export class ProductsModule { }
