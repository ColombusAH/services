import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ProductsPageComponent } from './products-page/products-page.component';
import { LayoutComponent } from './layout/layout.component';
import { RouterModule, Routes } from '@angular/router';
import { ProfileComponent } from './profile/profile.component';
import { SettingsComponent } from './settings/settings.component';
import { ProductComponent } from './products-page/components/product/product.component';

const routes: Routes = [{
  path: 'products',
  component: ProductsPageComponent,
  children: [
    {
      path: ':id',
      component: ProductComponent,
    },
  ]
},
{
  path: 'profile',
  component: ProfileComponent,
},
{
  path: 'settings',
  component: SettingsComponent,
}];

@NgModule({
  declarations: [
    AppComponent,
    ProductsPageComponent,
    LayoutComponent,
    ProfileComponent,
    SettingsComponent,
    ProductComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
