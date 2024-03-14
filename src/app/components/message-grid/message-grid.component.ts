import {Component, OnDestroy, OnInit} from '@angular/core';
import {AgGridAngular} from "ag-grid-angular";
import {ColDef, GridApi, GridReadyEvent} from "ag-grid-community";
import {merge, Subject, switchMap, takeUntil, tap} from "rxjs";
import {MessageDbService} from "../../services/message-db.service";
import {Message} from "../model/message";

@Component({
  selector: 'app-message-grid',
  standalone: true,
  imports: [
    AgGridAngular
  ],
  templateUrl: './message-grid.component.html',
  styleUrl: './message-grid.component.scss'
})
export class MessageGridComponent implements OnInit, OnDestroy {

  public readonly colDefs: ColDef[] = [
    {field: 'id', flex: 1, sort: 'asc'},
    {field: 'messageContent', flex: 10},
    {field: 'creationDateTime', flex: 3},
  ];
  private readonly onDestroy = new Subject<void>();
  private readonly onReady = new Subject<void>();
  private readonly onRefresh = new Subject<void>();
  private gridApi: GridApi<Message> | undefined;

  constructor(private readonly messageDb: MessageDbService) {
  }

  ngOnDestroy(): void {
    this.onDestroy.next();
  }

  ngOnInit(): void {
    merge(this.onReady, this.onRefresh)
      .pipe(
        takeUntil(this.onDestroy),
        tap(() => this.gridApi?.showLoadingOverlay()),
        switchMap(() => this.messageDb.loadMessages()),
        tap(messages => {
          this.gridApi?.setRowData(messages);
          this.gridApi?.hideOverlay();
        })
      ).subscribe();
  }

  public onGridReady(gridReadyEvent: GridReadyEvent<Message>): void {
    this.gridApi = gridReadyEvent.api;
    this.onReady.next();
    this.gridApi.showLoadingOverlay();
    this.onReady.next();
  }

  public queryRefresh(): void {
    this.onRefresh.next();
  }
}
