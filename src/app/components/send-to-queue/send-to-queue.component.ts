import {Component, OnDestroy} from '@angular/core';
import {FormsModule} from "@angular/forms";
import {QueueService} from "../../services/queue.service";
import {Subject, takeUntil, tap} from "rxjs";

@Component({
  selector: 'app-send-to-queue',
  standalone: true,
  imports: [
    FormsModule
  ],
  templateUrl: './send-to-queue.component.html',
  styleUrl: './send-to-queue.component.scss'
})
export class SendToQueueComponent implements OnDestroy {

  public messageContent = '';
  public sending = false;
  private readonly destroyEvent = new Subject<void>();

  constructor(private readonly queueService: QueueService) {
  }

  public sendMessage(): void {
    console.log('message: ', this.messageContent);
    this.sending = true;
    this.queueService.pushMessageToQueue(this.messageContent)
      .pipe(
        takeUntil(this.destroyEvent),
        tap(() => this.sending = false)
      )
      .subscribe()
  }

  ngOnDestroy(): void {
    this.destroyEvent.next();
  }
}
