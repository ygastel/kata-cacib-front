import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root',
})
export class QueueService {

  constructor(private readonly httpClient: HttpClient) {
  }

  public pushMessageToQueue(messageContent: string): Observable<void> {
    return this.httpClient.post<void>('http://localhost:8080/queue/send', messageContent);
  }
}
