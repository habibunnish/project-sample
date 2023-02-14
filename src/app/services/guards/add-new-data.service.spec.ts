import{AddNewDataService} from 'src/app/services/guards/add-new-data.service'
import { TestBed } from '@angular/core/testing';


describe(' CartService ', () => {
  let service:  AddNewDataService ;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject( AddNewDataService );
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});