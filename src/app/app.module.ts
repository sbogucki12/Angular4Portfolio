import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';


import { AppComponent } from './app.component';
import { AppDotnetComponent } from './app-dotnet/app-dotnet.component';
import { AppEntityFrameworkComponent } from './app-entity-framework/app-entity-framework.component';
import { AppSqlComponent } from './app-sql/app-sql.component';
import { AppUiComponent } from './app-ui/app-ui.component';
import { AppMiscComponent } from './app-misc/app-misc.component';
import { AppNavbarComponent } from './app-navbar/app-navbar.component';
import { NodeComponent } from './node/node.component';


@NgModule({
  declarations: [
    AppComponent,
    AppDotnetComponent,
    AppEntityFrameworkComponent,
    AppSqlComponent,
    AppUiComponent,
    AppMiscComponent,
    AppNavbarComponent,
    NodeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ], 
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
