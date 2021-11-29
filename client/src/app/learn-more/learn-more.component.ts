import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { AccountService } from '../_services/account.service';

@Component({
  selector: 'app-learn-more',
  templateUrl: './learn-more.component.html',
  styleUrls: ['./learn-more.component.css']
})
export class LearnMoreComponent implements OnInit {
  @Output() comeBackHome = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  cancel() {
    this.comeBackHome.emit(false);
  }
}
