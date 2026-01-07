import { Component, inject, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Exercise } from './models/exercise';
import { Modal } from './components/modal/modal';
import { ExerciseService } from './service/exercise-service';
import { Exercise as ex } from './components/exercise/exercise';
import { Dropdown } from './components/dropdown/dropdown';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, Modal, ex, Dropdown],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  exerciseService = inject(ExerciseService);

  isEditMode = false;
  showModal = false;
  selectedExercise!: Exercise;

  exercises: Exercise[] = [];
  allExercises: Exercise[] = [];

  async ngOnInit() {
    this.exercises = await this.exerciseService.getExercises();
    this.allExercises = [...this.exercises];
  }

  insertExercise() {
    this.selectedExercise = {
      name: '',
      muscleGroup: '' as any,
      sets: 0,
      reps: 0,
      weightKg: 0,
      notes: '',
    };
    this.isEditMode = false;
    this.showModal = true;
  }

  async addExercise(data: Omit<Exercise, 'id'>) {
    const created = await this.exerciseService.addExercise(data);
    this.exercises.push(created);
    this.showModal = false;
  }

  editExercise(id: string) {
    this.selectedExercise = structuredClone(this.exercises.find((ex) => ex.id === id)!);
    this.isEditMode = true;
    this.showModal = true;
  }

  async updateExercise(updated: Exercise) {
    const saved = await this.exerciseService.updateExercise(updated);

    const index = this.exercises.findIndex((ex) => ex.id === saved.id);
    this.exercises[index] = saved;

    this.showModal = false;
  }
  async deleteExercise(id: string) {
    const confirmed = confirm('Sei sicuro?');
    if (!confirmed) return;

    await this.exerciseService.deleteExercise(id);
    this.exercises = this.exercises.filter((ex) => ex.id !== id);
  }

  onOptionSelected(option: string) {
    const selected = option.toLowerCase();

    if (selected === 'tutti') {
      this.exercises = structuredClone(this.allExercises);
      return;
    }

    this.exercises = this.allExercises.filter((ex) => ex.muscleGroup.toLowerCase() === selected);
  }
}
