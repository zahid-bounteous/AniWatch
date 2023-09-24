import { Component } from '@angular/core';
import { DataService } from 'src/app/services/data.service';
import {of} from 'rxjs'
@Component({
  selector: 'app-card-list',
  templateUrl: './card-list.component.html',
  styleUrls: ['./card-list.component.scss']
})
export class CardListComponent {
  public cardList :any;
  constructor(private api :DataService){}
  ngOnInit():void{
    this.api.getAnimeData()
    .subscribe(res=>{
      this.cardList=res.data;
      console.log(this.cardList.data);
    })
  }
}


