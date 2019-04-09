import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map, filter, switchMap, retry } from 'rxjs/operators';
import { productmodelsform, productmodels } from '../../models/productmodels';
import { GlobalVariable } from '../../GlobalVar';
@Injectable({
  providedIn: 'root'
})
export class ProductdataserviceService {
  constructor(private http: HttpClient) {
  }
  
  getLocation() {
    console.log('trying to map');
    console.log('-------------');
    return this.http.get('http://freegeoip.net/json/').pipe(map(data => { })).subscribe(result => {
      console.log(result);
    });

  }

  getAll(): Observable<productmodels> {
    return this.http.get<productmodels>(GlobalVariable.PRODUCT_API_BASE_URL).pipe(map(response => response as productmodels));//.subscribe(result => {console.log(result);});
  }
  getbyid(id: any) {
    return this.http.get<productmodels>(GlobalVariable.PRODUCT_API_BASE_URL + '/' + id, { params: new HttpParams().set('id', id) }).pipe(map(response => response as productmodels));
  }
  update(id: any, obj: productmodels) {
    console.log(obj);
    
    return this.http.put<productmodels>(GlobalVariable.PRODUCT_API_BASE_URL + '/' + id, obj );
  }
  delete(id: any) {
    return this.http.delete<productmodels>(GlobalVariable.PRODUCT_API_BASE_URL + '/' + id);
  }
  Add(obj: productmodels) {
    console.log(obj);
    return this.http.post<productmodels>(GlobalVariable.PRODUCT_API_BASE_URL, obj);
  }
 
}
