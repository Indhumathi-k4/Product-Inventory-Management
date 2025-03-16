import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';

import { RouterModule } from '@angular/router';
import { SearchFilterComponent } from './search-filter/search-filter.component';

@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    SearchFilterComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    HeaderComponent,
    FooterComponent,
    SearchFilterComponent 
  ]
})
export class SharedModule { }
