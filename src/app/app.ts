import { Component, inject, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Exercise } from './models/exercise';
import { Modal } from './components/modal/modal';
import { ExerciseService } from './service/exercise-service';


@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Modal],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  protected readonly title = signal('gym-app');
  isEditMode = false;
  showModal = false;
  selectedExercise!: Exercise;
  exerciseService = inject(ExerciseService);

  exercises: Exercise[] = [];

  async ngOnInit() {
    this.exercises = await this.exerciseService.getExercises();
  }

  insertExercise() {
    this.selectedExercise = {
      name: '',
      muscleGroup: '',
      sets: 0,
      reps: 0,
      weightKg: 0,
      notes: '',
    };
    this.showModal = true;
    this.isEditMode = false;
    
  }

  editExercise(id: number) {
    console.log('Modifica esercizio con id:', id);
    alert(`Funzione MODIFICA per esercizio ID ${id} - Da implementare! ✏️`);
  }

  deleteExercise(id: string) {
    console.log('Elimina esercizio con id:', id);
    const confirmed = confirm(`Sei sicuro di voler eliminare questo esercizio? 🗑️`);
    if (confirmed) {
      alert('Esercizio eliminato! ✅');
    }
  }
}
