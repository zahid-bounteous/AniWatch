import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardListComponent } from './card-list.component';

describe('CardListComponent', () => {
  let component: CardListComponent;
  let fixture: ComponentFixture<CardListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CardListComponent]
    });
    fixture = TestBed.createComponent(CardListComponent);
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
