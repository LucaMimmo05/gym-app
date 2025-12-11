import { inject, Injectable } from '@angular/core';
import { Exercise } from '../models/exercise';
import { firstValueFrom } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class ExerciseService {

    private apiUrl = 'https://693a84699b80ba7262ca3ec1.mockapi.io/exercise';
    private http = inject(HttpClient);
  
    async getExercises(): Promise<Exercise[]> {
        return await firstValueFrom(this.http.get<Exercise[]>(`${this.apiUrl}`));
    }

    async addExercise(exercise: Exercise): Promise<Exercise> {
        return await firstValueFrom(this.http.post<Exercise>(`${this.apiUrl}`, exercise));
    }

    async updateExercise( exercise: Exercise): Promise<Exercise> {
        return await firstValueFrom(this.http.put<Exercise>(`${this.apiUrl}/${exercise.id}`, exercise));
    }

    async deleteExercise(id: string): Promise<void> {
        await firstValueFrom(this.http.delete<void>(`${this.apiUrl}/${id}`));
    }
}
