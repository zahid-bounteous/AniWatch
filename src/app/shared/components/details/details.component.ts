import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { DataService } from 'src/app/services/data.service';
import { selectMyData } from 'src/app/state/selectors/data.selectors';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent {
  hasResponse(hasResponse: any) {
    throw new Error('Method not implemented.');
  }
  data(data: any) {
    throw new Error('Method not implemented.');
  }
  public details :any;
  constructor(private api :DataService, private store:Store ,private route: ActivatedRoute){}

  ngOnInit():void{

    let x=this.route.snapshot.paramMap.get('id');
    // let y=this.route.snapshot.paramMap.get('title')
    if(x!=null){
    const id: number = parseInt(x);
    this.api.getAnimeData();
    this.store.select(selectMyData).subscribe((res)=>{
      this.details = res.data.find((item: { mal_id: number }) => item.mal_id === id);
    });
     }
    //  else if(y!=null){
    // const title:string=y;
    // this.api.getAnimeData();
    // this.store.select(selectMyData).subscribe((res)=>{
    //   this.details=res.data.find((item: { title: string; })=>item.title===title);
    // });
    //  }

  }
  
}
