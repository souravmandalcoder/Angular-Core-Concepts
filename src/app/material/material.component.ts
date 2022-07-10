import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ConfirmationComponent } from '../core/dialogbox/confirmation/confirmation.component';

@Component({
  selector: 'app-material',
  templateUrl: './material.component.html',
  styleUrls: ['./material.component.scss']
})
export class MaterialComponent implements OnInit {

  constructor(public dialog: MatDialog) { }

  name: string;
  animal: string;

  openDialog(): void {

    // code to open dialog


    const openDialog = this.dialog.open(ConfirmationComponent, {
      disableClose: true,
      autoFocus: false,
      height: '400px',
      width: '600px',
      data: { name: 'chetan b' }
    });

    openDialog.componentInstance.someVariable = 'Atul and sayalee'

    openDialog.afterClosed().subscribe(x => {

      console.log(x);
    })


    // const dialogRef = this.dialog.open(ConfirmationComponent, {
    //   width: '250px',
    //   data: { name: this.name, animal: this.animal },
    // });

    // dialogRef.afterClosed().subscribe(result => {
    //   console.log('The dialog was closed');
    //   this.animal = result;
    // });
  }

  ngOnInit() {
  }

}
