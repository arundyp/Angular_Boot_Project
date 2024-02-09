import { Component } from '@angular/core';
import { StudentService } from '../student.service';
import { Student } from '../student';

@Component({
  selector: 'app-show-student',
  templateUrl: './show-student.component.html',
  styleUrls: ['./show-student.component.css']
})
export class ShowStudentComponent {

  student:Student[]=[];

  constructor(private studentService:StudentService){

  }

  ngOnInit(){
    this.studentService.getAllData().subscribe(data=>{
      this.student=data;
      console.log(this.student);
    })

  }
}
