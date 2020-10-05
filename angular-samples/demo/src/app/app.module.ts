import {NgModule} from '@angular/core'
import {BrowserModule} from '@angular/platform-browser'
import {GreeterComponent} from './greeter/greeter.component'
import { AppComponent } from './app/app.component'
import {LayoutModule} from './layout/layout.module'
import{AccountsModule} from './accounts/accounts.module'
import {ConsoleLoggerService} from './utility/services/consoleLogger.service'
import {ApiLoggerService} from './utility/services/apiLogger.service'

@NgModule({
  declarations:[GreeterComponent, AppComponent],
  bootstrap:[AppComponent],
  imports:[BrowserModule,LayoutModule,AccountsModule],
  exports:[GreeterComponent],
  providers:[
    {provide:'logger',useClass:ApiLoggerService},
    {provide:'apiBaseAddress',useValue:"http://localhost:8003"}
  ]
})
export class AppModule{

}
