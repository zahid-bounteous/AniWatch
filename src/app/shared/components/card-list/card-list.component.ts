import { Component } from '@angular/core';
import { DataService } from 'src/app/services/data.service';
import {Store} from '@ngrx/store'
import { selectMyData } from 'src/app/state/selectors/data.selectors';

@Component({
  selector: 'app-card-list',
  templateUrl: './card-list.component.html',
  styleUrls: ['./card-list.component.scss']
})
export class CardListComponent {
  hasResponse(hasResponse: any) {
    throw new Error('Method not implemented.');
  }
  duration(duration: any) {
    throw new Error('Method not implemented.');
  }
  score(score: any) {
    throw new Error('Method not implemented.');
  }
  type(type: any) {
    throw new Error('Method not implemented.');
  }
  image: any;
  title(title: any) {
    throw new Error('Method not implemented.');
  }
  rating(rating: any) {
    throw new Error('Method not implemented.');
  }

  public cardList :any;
  constructor(private api :DataService,private store: Store){}
  ngOnInit():void{
    this.api.getAnimeData();
    this.store.select(selectMyData).subscribe((res)=>{
      this.cardList=res.data;
    });
  }
}
