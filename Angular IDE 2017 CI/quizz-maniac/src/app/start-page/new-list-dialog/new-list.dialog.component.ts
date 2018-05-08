import { Component, Inject } from '@angular/core';
import { MdDialog, MdDialogRef, MD_DIALOG_DATA } from '@angular/material';
import { HttpClient } from '@angular/common/http';

@Component({
    selector: 'app-newquizz-dialog',
    templateUrl: './new-list.dialog.component.html',
})
export class NewListDialogComponent {
    name: string;

    constructor(
        public dialogRef: MdDialogRef<NewListDialogComponent>,
        @Inject(MD_DIALOG_DATA) public data: any,
        public httpClient: HttpClient) { }

    onNoClick(): void {
        this.dialogRef.close();
    }

    ok() {
        if (!!this.name) {
            this.httpClient.post('/api/list/:name', this.name);
            this.dialogRef.close(this.name);
        }
    }

    cancel() {
        this.dialogRef.close();
    }

}
