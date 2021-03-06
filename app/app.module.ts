// Entry point to our app.

import { NgModule }      from '@angular/core';
import { FormsModule }   from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { FormApp }   from './form';
import { FormConfig } from './config';

@NgModule(
    {
        imports:      [ BrowserModule, FormsModule ],
        declarations: [ FormApp, FormConfig ], // Import our app.component
        bootstrap:    [ FormApp ],
    })
export class AppModule { }  
