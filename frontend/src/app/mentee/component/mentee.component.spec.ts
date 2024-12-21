import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenteeComponent } from './component/mentee.component';

describe('MenteeComponent', () => {
  let component: MenteeComponent;
  let fixture: ComponentFixture<MenteeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MenteeComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MenteeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
