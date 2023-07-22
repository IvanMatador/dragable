import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';
import { Component } from '@angular/core';

interface ListItem {
  text: string;
  height: number;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Angular-drag';

  todo: ListItem[] = [
    { text: '', height: 140 },
    { text: 'Drag me!', height: 140 },
    { text: '', height: 80 },
  ];

  done: ListItem[] = [
    {text: '', height: 80},
    {text: '', height: 80},
    {text: '', height: 140},
    {text: '', height: 180},
  ];

  done2: ListItem[] = [
    {text: '', height: 180},
  ];

  drop(event: CdkDragDrop<ListItem[]>) {
    const prevContainer = event.previousContainer;
    const currContainer = event.container;

    if (prevContainer === currContainer) {
      moveItemInArray(currContainer.data, event.previousIndex, event.currentIndex);
    } else {
      transferArrayItem(
        prevContainer.data,
        currContainer.data,
        event.previousIndex,
        event.currentIndex,
      );
    }
  }
}
