import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map, filter, switchMap, retry } from 'rxjs/operators';
import { usermodels, usermodelsform } from '../../models/usermodels';
import { GlobalVariable } from '../../GlobalVar';

@Injectable({
  providedIn: 'root'
})
export class UserserviceService {

  constructor(private http: HttpClient) {
  }

  getLocation() {
    console.log('trying to map');
    console.log('-------------');
    return this.http.get('http://freegeoip.net/json/').pipe(map(data => { })).subscribe(result => {
      console.log(result);
    });

  }

  getAll(): Observable<usermodels> {
    return this.http.get<usermodels>(GlobalVariable.USER_API_BASE_URL);//.pipe(map(response => response as productmodels));//.subscribe(result => {console.log(result);});
  }
  getbyid(id: any) {
    return this.http.get<usermodels>(GlobalVariable.USER_API_BASE_URL + '/' + id, { params: new HttpParams().set('id', id) }).pipe(map(response => response as productmodels));
  }
  update(id: any, obj: usermodels) {
    console.log(obj);

    return this.http.put<usermodels>(GlobalVariable.USER_API_BASE_URL + '/' + id, obj);
  }
  delete(id: any) {
    return this.http.delete<usermodels>(GlobalVariable.USER_API_BASE_URL + '/' + id);
  }
  Add(obj: usermodels) {
    console.log(obj);
    return this.http.post<usermodels>(GlobalVariable.USER_API_BASE_URL, obj);
  }
}
