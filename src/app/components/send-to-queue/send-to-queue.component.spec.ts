import {ComponentFixture, TestBed} from '@angular/core/testing';

import {SendToQueueComponent} from './send-to-queue.component';

describe('SendToQueueComponent', () => {
  let component: SendToQueueComponent;
  let fixture: ComponentFixture<SendToQueueComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SendToQueueComponent]
    })
      .compileComponents();

    fixture = TestBed.createComponent(SendToQueueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
