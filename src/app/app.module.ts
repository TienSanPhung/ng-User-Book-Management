import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { UserLoginComponent } from './components/user-login/user-login.component';
import { AddBooksComponent } from './components/add-books/add-books.component';
import { BookDetailsComponent } from './components/book-details/book-details.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {RouterModule} from "@angular/router";


import {CheckboxModule} from 'primeng/checkbox';
import {CardModule} from 'primeng/card';
import {InputTextModule} from 'primeng/inputtext';
import {ButtonModule} from 'primeng/button';
import {RippleModule} from 'primeng/ripple';
import {FormsModule} from '@angular/forms';

import {TableModule} from 'primeng/table';
import {ToastModule} from 'primeng/toast';
import {CalendarModule} from 'primeng/calendar';
import {SliderModule} from 'primeng/slider';
import {MultiSelectModule} from 'primeng/multiselect';
import {ContextMenuModule} from 'primeng/contextmenu';
import {DialogModule} from 'primeng/dialog';
import {DropdownModule} from 'primeng/dropdown';
import {ProgressBarModule} from 'primeng/progressbar';
import {FileUploadModule} from 'primeng/fileupload';
import {ToolbarModule} from 'primeng/toolbar';
import {RatingModule} from 'primeng/rating';
import {RadioButtonModule} from 'primeng/radiobutton';
import {InputNumberModule} from 'primeng/inputnumber';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { ConfirmationService } from 'primeng/api';
import { MessageService } from 'primeng/api';
import { InputTextareaModule } from 'primeng/inputtextarea';
import {BooksService} from "./services/books.service";
import {PasswordModule} from "primeng/password";

import {HttpClientModule,HTTP_INTERCEPTORS} from "@angular/common/http";

import {HttpconfigInterceptor} from "./interceptor/httpconfig.interceptor";
import {AuthService} from "./services/auth.service";
import  {AuthenticationService} from "./services/authentication.service";
import {JwtModule} from "@auth0/angular-jwt";
import {NgModel} from "@angular/forms";


@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    UserLoginComponent,
    AddBooksComponent,
    BookDetailsComponent,

  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    CheckboxModule,
    CardModule,
    InputTextModule,
    ButtonModule,
    RippleModule,
    BrowserModule,
    BrowserAnimationsModule,
    TableModule,
    CalendarModule,
    SliderModule,
    DialogModule,
    MultiSelectModule,
    ContextMenuModule,
    DropdownModule,
    ButtonModule,
    ToastModule,
    InputTextModule,
    ProgressBarModule,
    FileUploadModule,
    ToolbarModule,
    RatingModule,
    FormsModule,
    RadioButtonModule,
    InputNumberModule,
    ConfirmDialogModule,
    InputTextareaModule,
    RouterModule,
    PasswordModule,
    JwtModule.forRoot({
      config: {}
    }),

  ],
  providers: [BooksService, AuthenticationService, AuthService,
    {provide:HTTP_INTERCEPTORS,useClass:HttpconfigInterceptor,multi:true}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
