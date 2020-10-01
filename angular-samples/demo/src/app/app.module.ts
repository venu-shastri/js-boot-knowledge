import {NgModule} from '@angular/core'
import {BrowserModule} from '@angular/platform-browser'
import {GreeterComponent} from './greeter/greeter.component'
import { AppComponent } from './app/app.component'
import {LayoutModule} from './layout/layout.module'

@NgModule({
  declarations:[GreeterComponent, AppComponent],
  bootstrap:[AppComponent],
  imports:[BrowserModule,LayoutModule]
})
export class AppModule{

}
