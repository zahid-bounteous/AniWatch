import { Component } from '@angular/core';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent {
  public details :any;
  constructor(private api :DataService){}
  ngOnInit():void{
    this.api.getAnimeData()
    .subscribe(res=>{
      this.details=res.data;
      console.log(this.details.data);
    })
  }
}
