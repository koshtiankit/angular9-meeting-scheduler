import { Component, OnInit } from '@angular/core';
import { UtilService } from '../shared';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
})
export class FooterComponent implements OnInit {
  constructor(public utilService: UtilService) {}

  ngOnInit(): void {}
}
