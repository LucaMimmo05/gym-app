import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Exercise as Ex } from '../../models/exercise';

@Component({
  standalone: true,
  selector: 'app-exercise',
  imports: [],
  templateUrl: './exercise.html',
  styleUrl: './exercise.css',
})
export class Exercise {
  @Input() exercise!: Ex;
  @Output() editExercise = new EventEmitter<string>();
  @Output() deleteExercise = new EventEmitter<string>();
}
