import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { NgxMaterialTimepickerModule } from 'ngx-material-timepicker';
import { ScheduleMeetingRoutingModule } from './schedule-meeting.routing.module';
import { ScheduleMeetingComponent } from './schedule-meeting.component';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    NgxMaterialTimepickerModule,
    ScheduleMeetingRoutingModule,
  ],
  declarations: [ScheduleMeetingComponent],
  providers: [],
})
export class ScheduleMeetingModule {}
