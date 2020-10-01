import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { NavComponent } from './nav/nav.component';
import { ContentComponent } from './content/content.component';
import {AppModule} from '../app.module'



@NgModule({
  declarations: [HeaderComponent, FooterComponent, NavComponent, ContentComponent],
  imports: [
    CommonModule,AppModule
  ],
  exports:[HeaderComponent]
})
export class LayoutModule { }
