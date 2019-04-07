import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map, filter, switchMap, retry } from 'rxjs/operators';
import { LoginserviceService } from './loginservice.service';
@Injectable({
  providedIn: 'root'
})
export class ProductdataserviceService {
  //token:any;//localStorage.getItem("jwt");
  constructor(private http: HttpClient) {
    //this.token = this.LoggService.getToken();
  }
  
  getLocation() {
    console.log('trying to map');
    console.log('-------------');
    return this.http.get('http://freegeoip.net/json/').pipe(map(data => { })).subscribe(result => {
      console.log(result);
    });

  }
  
  getAll() {

    return this.http.get('/api/Products');//.pipe(map(data => { })).subscribe(result => {console.log(result);});
  }
  getbyid(id: any) {
    return this.http.get('api/Products/' + id, { params: new HttpParams().set('id', id) });
  }
  update(id: any, obj: any) {
    console.log(obj);
    return this.http.put('api/Products/'+ id, obj );
  }
  delete(id: any) {
    return this.http.delete('/api/Products/' + id);
  }
  Add(obj: any) {
    console.log(obj);
    return this.http.post('/api/Products', obj);
  }
  /*updateAgent(stid: any, obj: any) {
    obj["_id"] = stid;
    console.log(obj);
    return this.http.post('/registeragent/updateagent', obj).map((res: any) => {
      if (res.status === 409) {
        return Observable.throw(new Error());
        //return [{ status: res.status, json: res }]
      }
      else if (res.status === 200) {
        console.log('we got 200 response');
        return [{ status: res.status, json: res }]
      }
    })
  }
  removeAgent(stid: any) {
    let params = new HttpParams().set('stid', stid);
    return this.http.get('/registeragent/removeagent', { params: params }).map((res: any) => {
      if (res.status === 409) {
        return Observable.throw(new Error());
        //return [{ status: res.status, json: res }]
      }
      else if (res.status === 200) {
        console.log('we got 200 response');
        return [{ status: res.status, json: res }]
      }
    })
  }
  viewAgentById(stid: string) {
    let params = new HttpParams().set('stid', stid);
    return this.http.get('/registeragent/viewAgentById', { params: params }).map(res => res);
  }
  getAllbyAgent(agid: any) {
    let params = new HttpParams().set('agid', agid);
    return this.http.get('/registeragent/viewAgentByusername', { params: params }).map(res => res);
  }
  ////////////
  checkLogin(username, password) {
    let Params = new HttpParams();
    // Begin assigning parameters
    Params = Params.append('username', username);
    Params = Params.append('password', password);
    return this.http.get('/registeragent/checkLogin', { params: Params }).map(res => res);
  }
  getRole(username) {
    let Params = new HttpParams();
    // Begin assigning parameters
    Params = Params.append('username', username);
    return this.http.get('/registeragent/getRole', { params: Params }).map((res: any) => {
      if (res.status === 409) {
        return Observable.throw(new Error());
        //return [{ status: res.status, json: res }]
      }
      else if (res.status === 200) {
        console.log('we got 200 response');
        return [{ status: res.status, json: res }]
      }
    })*/
  
  ////////////
}
