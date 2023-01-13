import { Component, Input, OnInit, Output } from '@angular/core';
import { Pokemon } from '../../interfaces/interfaces';


@Component({
  selector: 'app-list-item',
  templateUrl: './list-item.component.html',
  styleUrls: ['./list-item.component.css']
})
export class ListComponent{

  @Input() pokemon!:Pokemon


  

}
