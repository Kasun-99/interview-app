import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SharedWindowComponent } from './shared-window.component';

describe('SharedWindowComponent', () => {
  let component: SharedWindowComponent;
  let fixture: ComponentFixture<SharedWindowComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SharedWindowComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SharedWindowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
