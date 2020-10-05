import {NgModule} from '@angular/core'
import {BrowserModule} from '@angular/platform-browser'
import {GreeterComponent} from './greeter/greeter.component'
import { AppComponent } from './app/app.component'
import {LayoutModule} from './layout/layout.module'
import{AccountsModule} from './accounts/accounts.module'

@NgModule({
  declarations:[GreeterComponent, AppComponent],
  bootstrap:[AppComponent],
  imports:[BrowserModule,LayoutModule,AccountsModule],
  exports:[GreeterComponent]
})
export class AppModule{

}
