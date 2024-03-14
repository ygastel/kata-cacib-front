import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Message} from "../components/model/message";

@Injectable({
  providedIn: 'root'
})
export class MessageDbService {

  constructor(private readonly httpClient: HttpClient) {
  }

  public loadMessages(): Observable<Message[]> {
    return this.httpClient.get<Message[]>('http://localhost:8080/message');
  }

}
