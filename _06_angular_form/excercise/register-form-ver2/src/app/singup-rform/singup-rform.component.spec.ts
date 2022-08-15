import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SingupRformComponent } from './singup-rform.component';

describe('SingupRformComponent', () => {
  let component: SingupRformComponent;
  let fixture: ComponentFixture<SingupRformComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SingupRformComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SingupRformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
