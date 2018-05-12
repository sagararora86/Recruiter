import { Component, OnInit } from '@angular/core';

import { Candidate }  from '../candidate';

@Component({
  selector: 'app-candidate-form',
  templateUrl: './candidate-form.component.html',
  styleUrls: ['./candidate-form.component.css']
})
export class CandidateFormComponent implements OnInit {

  constructor() { }

  model = new Candidate('', '', '', '');

  ngOnInit() {
  }

}
