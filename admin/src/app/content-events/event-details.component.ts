import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';

import {EventsService} from './events.service';

@Component({
  selector: 'app-event-details',
  templateUrl: './event-details.component.html'
})
export class EventDetailsComponent implements OnInit {

  constructor(private route: ActivatedRoute, private service: EventsService) {}

  ngOnInit() {
    this.route.params
      .map(params => params['id'])
      .subscribe((id) => this.service.getItem(id));
  }

}
