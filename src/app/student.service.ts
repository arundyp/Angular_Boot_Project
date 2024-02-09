import { Injectable } from '@angular/core';
import { Student } from './student';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  baseurl='http://localhost:9095/stud';

  constructor( private httpClient:HttpClient) {

   }

   getStudentData(student:Student){
    return this.httpClient.post(`${this.baseurl}`,student);

   }

   getAllData():Observable<Student[]>
   {
      return this.httpClient.get<Student[]>(`${this.baseurl}`);
   }
}
