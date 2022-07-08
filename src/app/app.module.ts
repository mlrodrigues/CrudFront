import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { TableuserComponent } from './tableuser/tableuser.component';
import { MatTableModule} from '@angular/material/table';
import { FormsModule }   from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';



@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    TableuserComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatTableModule,
    FormsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
