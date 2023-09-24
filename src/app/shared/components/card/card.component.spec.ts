import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { CardComponent } from './card.component';
import { DataService } from 'src/app/services/data.service';
import { Store } from '@ngrx/store';

describe('CardComponent', () => {
  let service: DataService;
  let store:Store;
  let component: CardComponent;
  let fixture: ComponentFixture<CardComponent>;
  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CardComponent],
      imports: [HttpClientTestingModule],
      providers: [
      { provide: DataService, useValue:service },
      { provide: Store, useValue: store }
    ]
      
    });
    fixture = TestBed.createComponent(CardComponent);
    component = fixture.componentInstance;
    store = TestBed.inject(Store);
    service = TestBed.inject(DataService);
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
  it('should get data from store and show as a carousel', () => {
    const mockData = {};
    component.ngOnInit();

    spyOn(component['store'], 'select').and.returnValue({
      subscribe: (callback: Function) => callback(mockData),
    } as any);
    service.getAnimeData();
    
    // expect(component.data).toEqual(mockData);
  });

});
