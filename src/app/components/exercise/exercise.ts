import { Component, Input } from '@angular/core';
import { Exercise as Ex } from '../../models/exercise';

@Component({
  selector: 'app-exercise',
  imports: [],
  templateUrl: './exercise.html',
  styleUrl: './exercise.css',
})
export class Exercise {
    @Input() exercise!: Ex;
}
