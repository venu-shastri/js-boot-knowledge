import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { NavComponent } from './nav/nav.component';
import { ContentComponent } from './content/content.component';




@NgModule({
  declarations: [HeaderComponent, FooterComponent, NavComponent, ContentComponent],
  imports: [
    CommonModule
  ],
  exports:[HeaderComponent]
})
export class LayoutModule { }
