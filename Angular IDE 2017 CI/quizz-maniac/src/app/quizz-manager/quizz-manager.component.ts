import { Component, OnInit } from '@angular/core';
import { MdDialog} from '@angular/material';
import { Router } from '@angular/router';
import { ListService } from '../services/list.service';
import { Quizz } from '../data.model';
import { NewListDialogComponent } from '../start-page/new-list-dialog/new-list.dialog.component';

@Component({
  selector: 'app-quizz-manager',
  templateUrl: './quizz-manager.component.html',
  styleUrls: ['./quizz-manager.component.css']
})
export class QuizzManagerComponent implements OnInit {
  public quizzes: Quizz[];

  constructor(private quizzService: ListService, private router: Router, public dialog: MdDialog) { }

  ngOnInit() {
    this.quizzes = this.quizzService.getQuizzes();
  }

  goToQuizz(quizzId: string) {
    this.router.navigate([`/manage/${quizzId}`]);
  }

  newQuizz() {
    const dialogRef = this.dialog.open(NewListDialogComponent, {
      width: '250px',
    });

    dialogRef.afterClosed().subscribe(result => {
      if (!result) {
        return;
      }
      const quizz = this.quizzService.createQuizz(result, []);
    });
  }
}
