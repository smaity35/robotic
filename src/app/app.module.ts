import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AgmCoreModule } from '@agm/core';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
//import { HashLocationStrategy, LocationStrategy} from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { HomePageComponent } from './home-page/home-page.component';
import { FooterComponent } from './footer/footer.component';
import { AboutPageComponent } from './about-page/about-page.component';
import { ServicesPageComponent } from './services-page/services-page.component';
import { ProductPageComponent } from './product-page/product-page.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { BlogPageComponent } from './blog-page/blog-page.component';
import { ContactPageComponent } from './contact-page/contact-page.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomePageComponent,
    FooterComponent,
    AboutPageComponent,
    ServicesPageComponent,
    ProductPageComponent,
    PageNotFoundComponent,
    BlogPageComponent,
    ContactPageComponent
  ],
  
  imports: [
    BrowserModule,
    AppRoutingModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyD1uFCjRS7v6w_5m0mGxZP4-kLpnzFDaO8'
    })
  ],
  //providers:[{provide: LocationStrategy, useClass:HashLocationStrategy }],
  bootstrap: [AppComponent]
})
export class AppModule { }
