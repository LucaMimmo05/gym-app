import { Component, EventEmitter, inject, Input, Output } from '@angular/core';
import { Exercise, MUSCLE_GROUPS } from '../../models/exercise';
import { FormsModule } from '@angular/forms';
import { TitleCasePipe } from '@angular/common';

@Component({
  standalone: true,
  selector: 'app-modal',
  imports: [FormsModule, TitleCasePipe],
  templateUrl: './modal.html',
  styleUrl: './modal.css',
})
export class Modal {
  @Input() exercise!: Exercise;
  @Input() isEditMode: boolean = false;
  muscleGroups = MUSCLE_GROUPS;
  @Output() close = new EventEmitter<void>();
  @Output() submitExercise = new EventEmitter<Exercise>();
  closeModal() {
    this.close.emit();
    this.isEditMode = false;
  }

  onSubmit(form: any) {
    if (form.invalid) {
      form.control.markAllAsTouched();
      return;
    }

    this.submitExercise.emit({
      id: this.exercise.id,
      name: this.exercise.name,
      muscleGroup: this.exercise.muscleGroup,
      sets: this.exercise.sets,
      reps: this.exercise.reps,
      weightKg: this.exercise.weightKg,
      notes: this.exercise.notes,
    });

    this.closeModal();
  }
}
