import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { AppDotnetComponent } from './app-dotnet/app-dotnet.component';
import { AppEntityFrameworkComponent } from './app-entity-framework/app-entity-framework.component';
import { AppSqlComponent } from './app-sql/app-sql.component';
import { AppUiComponent } from './app-ui/app-ui.component';
import { AppMiscComponent } from './app-misc/app-misc.component';


@NgModule({
  declarations: [
    AppComponent,
    AppDotnetComponent,
    AppEntityFrameworkComponent,
    AppSqlComponent,
    AppUiComponent,
    AppMiscComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
