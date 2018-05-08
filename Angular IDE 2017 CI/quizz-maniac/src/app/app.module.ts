import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FlexLayoutModule } from '@angular/flex-layout';
import {
  MdButtonModule,
  MdCheckboxModule,
  MdTableModule,
  MdSortModule,
  MdMenuModule,
  MdIconModule,
  MdToolbarModule,
  MdListModule,
  MdCardModule,
  MdSlideToggleModule,
  MdInputModule,
  MdRadioModule,
  MdDialogModule,
} from '@angular/material';

import { RouterModule, Routes } from '@angular/router';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { AppRoutingModule, routingComponents } from './app.routes';
import { ListService } from './services/list.service';
import { AnswerComponent } from './answer/answer.component';
import { NewListDialogComponent } from './start-page/new-list-dialog/new-list.dialog.component';
import { QuizzManagerComponent } from './quizz-manager/quizz-manager.component';
import { PlayQuizzComponent } from './play-quizz/play-quizz.component';
import { QuizzResultsComponent } from './quizz-results/quizz-results.component';
import { ChuckService } from './services/chuck.service';
import { HttpClient } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    routingComponents,
    AnswerComponent,
    NewListDialogComponent,
    QuizzManagerComponent,
    PlayQuizzComponent,
    QuizzResultsComponent,
  ],
  entryComponents: [NewListDialogComponent],
  imports: [
    AppRoutingModule,
    BrowserModule,
    BrowserAnimationsModule,
    FlexLayoutModule,
    MdButtonModule,
    MdCheckboxModule,
    MdTableModule,
    MdSortModule,
    MdMenuModule,
    MdIconModule,
    MdToolbarModule,
    MdListModule,
    MdCardModule,
    MdSlideToggleModule,
    MdInputModule,
    MdRadioModule,
    FormsModule,
    MdDialogModule,
    HttpModule,
    HttpClient
  ],
  providers: [ListService, ChuckService],
  bootstrap: [AppComponent]
})
export class AppModule { }
