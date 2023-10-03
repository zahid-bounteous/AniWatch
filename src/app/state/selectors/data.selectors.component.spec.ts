import { TestBed } from '@angular/core/testing';
import { Store, StoreModule } from '@ngrx/store';
import { selectMyDataState, selectMyData } from 'src/app/state/selectors/data.selectors'; // Update this import path with your actual file path

describe('NgRx Selectors', () => {
  let store: Store<any>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [StoreModule.forRoot({})], // Provide a mock store state
    });

    store = TestBed.inject(Store);
  });

  // it('should select the MyData state', () => {
  //   let result;

  //   store.select(selectMyDataState).subscribe((value) => {
  //     result = value;
  //   });

  //   expect(result).toEqual({}); // Provide the expected initial state
  // });

  it('should select the data property from MyData state', () => {
    const myDataState = {
      data: [1, 2, 3], // Replace with your test data
    };

    let result;

    store.select(selectMyData).subscribe((value) => {
      result = value;
    });

    // store.setState({ myData: myDataState }); // Set the state

    // expect(result).toEqual();
  });
});
