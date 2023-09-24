import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailsComponent } from './details.component';

describe('DetailsComponent', () => {
  let component: DetailsComponent;
  let fixture: ComponentFixture<DetailsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DetailsComponent]
    });
    fixture = TestBed.createComponent(DetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('should initialize data and properties correctly when reponse is false', () => {
    const mockData = {
      Response: 'False'
    };

    spyOn(component['store'], 'select').and.returnValue({
      subscribe: (callback: Function) => callback(mockData),
    } as any);

    component.ngOnInit();

    expect(component.data).toEqual(mockData);
    expect(component.hasResponse).toBeFalse();
  });

});
