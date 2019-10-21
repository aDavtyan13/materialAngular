import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu-list',
  templateUrl: './menu-list.component.html',
  styleUrls: ['./menu-list.component.css']
})
export class MenuListComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}

// import { Student } from '../student.interface';



// @Component({
//   selector: 'app-students-list',
//   templateUrl: './app-students-list.component.html',
//   styleUrls: ['./app-students-list.component.scss']
// })
// export class AppStudentsListComponent implements OnInit {

//   students: Student[] = [{
//     name: 'Tom',
//     age: '17',
//     city: 'Yerevan',
//     active: false
//   },
//   {
//     name: 'John',
//     age: 18,
//     city: 'New York',
//     active: false
//   },
//   {
//     name: 'Fred',
//     age: 20,
//     city: 'London',
//     active: false
//   }];

//   constructor() { }

//   ngOnInit() {
//   }

//   onTripleClick(name) {
//     const activeStudent = this.students.find((student) => student.name === name);
//     if (activeStudent) {
//       activeStudent.active = true;
//     }
//   }

// }