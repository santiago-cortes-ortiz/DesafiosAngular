import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.css']
})
export class StudentsComponent implements OnInit {

  students: any[] = [

    {nombre: 'jeisson',apellido: 'cortes',correo: 'jeiss@gmail.co'},
    {nombre: 'luis',apellido: 'herrera',correo: 'herrera@gmail.co'},
    {nombre: 'jhoin',apellido: 'casas',correo: 'casas@gmail.co'},
    {nombre: 'laura',apellido: 'molina',correo: 'lau@gmail.co'},
    {nombre: 'kate',apellido: 'valencia',correo: 'valen@gmail.co'}

  ]

  constructor() { }

  ngOnInit(): void {
  }

}
