import { Component, EventEmitter, inject, Input, Output } from '@angular/core';
import { Exercise } from '../../models/exercise';
import { FormsModule } from '@angular/forms';
import { ExerciseService } from '../../service/exercise-service';

@Component({
  standalone: true,
  selector: 'app-modal',
  imports: [FormsModule],
  templateUrl: './modal.html',
  styleUrl: './modal.css',
})
export class Modal {
  @Input() exercise!: Exercise;
  @Input() isEditMode: boolean = false;
  @Output() close = new EventEmitter<void>();
  service = inject(ExerciseService);

  closeModal() {
    this.close.emit();
    this.isEditMode = false;
  }

  onSubmit(form: any) {
    if (form.invalid) {
      form.control.markAllAsTouched();
      return;
    }

    // Logica per aggiungere o modificare
    if (this.isEditMode) {
      console.log('Modifica esercizio:', this.exercise);
    } else {
      this.service.addExercise(this.exercise).then((addedExercise) => {
        console.log('Esercizio aggiunto:', addedExercise);
      });
    }

    this.closeModal();
  }
}
