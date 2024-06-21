import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { UserDetiales } from '../Contracts/User';

@Injectable({
  providedIn: 'root'
})
export class ApidataService {

  constructor(private http: HttpClient) {

  }
  public getdata(): Observable<any[]> {
    return this.http.get<any[]>("https://fakestoreapi.com/products");
  }
  public getwomen(val: string | null): Observable<any[]> {
    return this.http.get<any[]>(`https://fakestoreapi.com/products/category/${val}`);
  }
  public productdetailes(id: string | null): Observable<any> {
    return this.http.get<any>(`https://fakestoreapi.com/products/${id}`);
  }
  public getBeautyProducts(): Observable<any> {
    return this.http.get<any>(`https://dummyjson.com/products/category/beauty`);
  }

  public submitdata(data:any):Observable<UserDetiales>{
    return this.http.post<UserDetiales>("http://localhost:4000/submit",data);
  }
  public getuserdetailes():Observable<any>{
    return this.http.get<any>("http://localhost:4000/getusers") 
  }
  
}
