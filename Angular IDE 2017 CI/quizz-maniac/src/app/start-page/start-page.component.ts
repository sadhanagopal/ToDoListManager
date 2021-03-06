import {Component, OnInit, Inject} from '@angular/core';
import {MdDialog} from '@angular/material';
import {Router} from '@angular/router';
import {ListService} from '../services/list.service';
import {ChuckService} from '../services/chuck.service';
import {Quizz, List} from '../data.model';

import {NewListDialogComponent} from './new-list-dialog/new-list.dialog.component';

interface ChuckNorrisWisdom {
  icon_url: string;
  id: string;
  url: string;
  value: string;
}

@Component({
  selector: 'app-start-page',
  templateUrl: './start-page.component.html',
  styleUrls: ['./start-page.component.css'],
})
export class StartPageComponent implements OnInit {
  public lists: List[];
  public chuckNorrisWisdom: ChuckNorrisWisdom;

  constructor(private listService: ListService, private chuckService: ChuckService, private router: Router, public dialog: MdDialog) {}

  ngOnInit() {
    this.lists = this.listService.getLists();
  }

  manageQuizz(listId: number) {
    this.router.navigate([`/manage/${listId}`]);
  }

  viewList(listId: number): List {
    return this.listService.getList(listId);
  }

  playQuizz(quizzId: string) {
    this.router.navigate([`/play/${quizzId}`]);
  }

  newList() {
    const dialogRef = this.dialog.open(NewListDialogComponent, {
      width: '250px',
    });

    dialogRef.afterClosed().subscribe(result => {
      if (!result) {
        return;
      }
      const list = this.listService.createList(result);
      this.manageQuizz(list.id);
    });
  }

  chuckNorris() {
    this.chuckService.getChuckNorrisWisdom().subscribe(wisdom => {
      this.chuckNorrisWisdom = wisdom.json();
    });
  }
}
