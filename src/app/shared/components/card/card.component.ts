import { Component } from '@angular/core';
import { DataService } from 'src/app/services/data.service';
@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent {
  public cardBanner :any;
  constructor(private api :DataService){}
  ngOnInit():void{
    this.api.getAnimeData()
    .subscribe(res=>{
      this.cardBanner=res.data;
      console.log(this.cardBanner.data);
    })
  }
}