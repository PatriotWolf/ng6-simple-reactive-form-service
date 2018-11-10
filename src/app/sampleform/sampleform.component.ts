import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { PostformService } from '../postform.service';
@Component({
  selector: 'app-sampleform',
  templateUrl: './sampleform.component.html',
  styleUrls: ['./sampleform.component.css']
})
export class SampleformComponent implements OnInit {
  profileForm = this.fb.group({
    firstName: [''],
  });
  constructor(private fb: FormBuilder, private formRequest : PostformService) { }

  ngOnInit() {
  }

  onSubmit() {
    // TODO: Use EventEmitter with form value
    console.warn(this.profileForm.value);
    this.formRequest.getGreetFromBot(this.profileForm.value);
  }
}
