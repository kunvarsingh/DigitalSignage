import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
//import { FormsModule }   from '@angular/forms';
import { AppComponent }  from './app.component';
import {DataTableService} from './services/data.table.service';
import { TextboxDirective } from './services/Directives/textbox.directive';
import {NewDirective}  from './services/Directives/New.directive';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {DropdownDirective} from './services/Directives/dropdown.directive';
import {DropDownComponent} from './dropdown.component';

import { CapitalizePipe } from './services/pipes/capitalize.pipe';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,ReactiveFormsModule
  ],
  declarations: [
    AppComponent,
    TextboxDirective,NewDirective,DropdownDirective,DropDownComponent,CapitalizePipe
  ],
  providers: [
    DataTableService
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
