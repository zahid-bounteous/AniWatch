import { HttpClient} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http:HttpClient) { }

    getAnimeData(){
      return this.http.get<any>(environment.apiBaseUrl)
      .pipe(map((res:any)=>{
        return res;
      }))
  }
}


