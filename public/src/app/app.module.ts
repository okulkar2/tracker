import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent }  from './app.component';
import { HeaderComponent } from './header/header.component';
import { StudentComponent } from './student/student.component';
import { ProfessorComponent } from './professor/professor.component';

@NgModule({
  imports:      [ BrowserModule ],
  declarations: [
    AppComponent,
    HeaderComponent,
    StudentComponent,
    ProfessorComponent
  ],
  bootstrap:    [ AppComponent ]
})
export class AppModule {}
