import { Component } from '@angular/core';
import { Student } from '../student';
import { StudentService } from '../student.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-student',
  templateUrl: './add-student.component.html',
  styleUrls: ['./add-student.component.css']
})
export class AddStudentComponent {

  student:Student= new Student();

  constructor(private studentService: StudentService,private router:Router){

  }

  studentData(){
    console.log(this.student);
    this.studentService.getStudentData(this.student).subscribe(data=>{
      alert("record added sucessfully..");
      this.router.navigate(['/showStudent']);

    },error=>{
      alert("Data does not save");
    })
  }

}
