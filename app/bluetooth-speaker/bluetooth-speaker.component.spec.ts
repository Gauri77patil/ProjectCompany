import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BluetoothSpeakerComponent } from './bluetooth-speaker.component';

describe('BluetoothSpeakerComponent', () => {
  let component: BluetoothSpeakerComponent;
  let fixture: ComponentFixture<BluetoothSpeakerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BluetoothSpeakerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BluetoothSpeakerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
