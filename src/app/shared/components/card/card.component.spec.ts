import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailsComponent } from '../details/details.component';
import { DataService } from 'src/app/services/data.service';
import { Store } from '@ngrx/store';
import { ActivatedRoute } from '@angular/router';
import { of } from 'rxjs';

describe('DetailsComponent', () => {
  let component: DetailsComponent;
  let service:DataService;
  let store: jasmine.SpyObj<Store>;
  let fixture: ComponentFixture<DetailsComponent>;
  let route: jasmine.SpyObj<ActivatedRoute>;

  beforeEach(() => {
    store = jasmine.createSpyObj(Store, ['select']);
    route = jasmine.createSpyObj('ActivatedRoute', [], {
      snapshot: { paramMap: { get: (param: string) => null } },
    });
    TestBed.configureTestingModule({
      declarations: [DetailsComponent],
      providers:[{provide:DataService,useValue:service},{provide:Store,useValue:store},{provide:ActivatedRoute,useValue:route}]
    });
    fixture = TestBed.createComponent(DetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges()
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('should extract a amine data based on Id', () => {
    const mockData = {
      images: {
        jpg: {
          large_image_url: 'test_url'
        }
      },
      // other properties...
    };
    service.getAnimeData();
    store.select.and.returnValue(of({ data: mockData }));
    component.ngOnInit();
    expect(service.getAnimeData).toHaveBeenCalled();
    expect(component.details).toEqual(mockData);
  });
  

});