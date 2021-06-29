import {ComponentFixture, fakeAsync, TestBed, tick} from '@angular/core/testing';

import { ServersComponent } from './servers.component';

describe('ServersComponent', () => {
  let component: ServersComponent;
  let fixture: ComponentFixture<ServersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ServersComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ServersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('should set serverCreated to false',  () => {
    expect(component.serverCreated).toBeFalse();
  });
  it('change serverCreated to true after onServerCreated() is called', () => {
    component.onServerCreated();
    expect(component.serverCreated).toBeTrue();
  });
  it('should call on onServerCreated()', fakeAsync(() => {
    spyOn(component, 'onServerCreated');
    fixture.debugElement.nativeElement.querySelector('button.add-server').click();
    tick()
    expect(component.onServerCreated).toHaveBeenCalled();
    })
  );
});
