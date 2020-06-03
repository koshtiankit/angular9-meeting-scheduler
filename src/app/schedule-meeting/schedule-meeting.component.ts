import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { UtilService } from '../shared/services';
@Component({
  selector: 'app-schedule-meeting',
  templateUrl: './schedule-meeting.component.html',
  styleUrls: ['./schedule-meeting.component.scss'],
})
export class ScheduleMeetingComponent implements OnInit {
  schduleMeetingForm: FormGroup;
  saveButtonDisabled: boolean = false;

  constructor(
    private formBuilder: FormBuilder,
    public utilService: UtilService
  ) {}

  ngOnInit(): void {
    this.createScheduleMeetingForm();
  }

  switchLanguage(isLang) {
    console.log('isLang', isLang);
  }
  switchTimeZone(timeZone) {}
  createScheduleMeetingForm() {
    this.schduleMeetingForm = this.formBuilder.group({
      fullName: [],
      // timeZone: [
      //   "",
      //   [Validators.required]
      // ],
      //timeZone: [],
      meetingDate: [],
      startTime: [],
      endTime: [],
    });
  }

  saveMeetingData() {
    console.log('submit data');
  }
}
