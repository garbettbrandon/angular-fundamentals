import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeveloperDetail } from './developer-detail';

describe('DeveloperDetail', () => {
  let component: DeveloperDetail;
  let fixture: ComponentFixture<DeveloperDetail>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DeveloperDetail]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DeveloperDetail);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
