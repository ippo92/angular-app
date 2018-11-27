import { Component, OnInit } from '@angular/core';
import {AppareilService} from '../services/appareil.service';
import { Subscription } from 'rxjs';
@Component({
  selector: 'app-appareil-view',
  templateUrl: './appareil-view.component.html',
  styleUrls: ['./appareil-view.component.css']
})
export class AppareilViewComponent implements OnInit {
  isAuth = false;
  appareils: any[];
  appareilSubscription: Subscription;
  constructor(private appareilService: AppareilService) {
    setTimeout(
      () => {
        this.isAuth = true;
      }, 4000 
    );
  }
  ngOnInit() {
    this.appareilSubscription = this.appareilService.appareilSubject.subscribe(
      (appareils: any[]) => {
        this.appareils = appareils;
      }
    )
    this.appareilService.emitAppareilSubject();
  }
  onAllumer() {
    this.appareilService.switchOnAll();
  }
  onEteindre() {
    this.appareilService.switchOffAll();
  }
  onSave() {
    this.appareilService.saveAppareilsToServer();
  }
  onFetch() {
    this.appareilService.getAppareilsFromServer();
  }

}
