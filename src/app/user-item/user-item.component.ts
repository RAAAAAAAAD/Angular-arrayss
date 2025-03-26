import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-user-item',
  imports: [],
  templateUrl: './user-item.component.html',
  styleUrl: './user-item.component.css'
})
export class UserItemComponent implements OnInit {
  @Input() name!: string; // Ho utilizzato ! per "forzare" a typescript che questa variabile è stata dichiarata ed implementata nella classe.

  constructor() {
    // Oppure this.name = ''
  }

  ngOnInit() {}
}
