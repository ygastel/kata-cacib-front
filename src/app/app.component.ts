import {Component} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterOutlet} from '@angular/router';
import {SendToQueueComponent} from "./components/send-to-queue/send-to-queue.component";
import {MessageGridComponent} from "./components/message-grid/message-grid.component"; // Column Definition Type Interface

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, SendToQueueComponent, MessageGridComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'kata-front';


}
