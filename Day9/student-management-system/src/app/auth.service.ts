import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Student } from './student';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
 url="https://worksheet-student.mashupstack.com";

  constructor(private http:HttpClient){}

  register(data:any){
    return this.http.post(`${this.url}/register`,data);
  }

  login(data:any){
    return this.http.post(`${this.url}/login`,data);
  }

  logout(){
    const token=localStorage.getItem('token');
    const headers=new HttpHeaders({
      Authorization:`Bearer ${token}`
    });
    return this.http.get(`${this.url}/logout`,{headers});
  }

  getStudents():Observable<Student[]>{
    const token=localStorage.getItem('token');
    const headers=new HttpHeaders({
      Authorization:`Bearer ${token}`
    });
    return this.http.get<Student[]>(`${this.url}/students`,{headers});
  }
}
