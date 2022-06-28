import { Component } from '@angular/core';
import { StudentDAO } from 'src/model/dao/student-DAO';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  repo = new StudentDAO();
}
