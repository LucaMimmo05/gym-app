export type MuscleGroup = 'petto' | 'schiena' | 'gambe' | 'spalle' | 'braccia' | 'core';

export const MUSCLE_GROUPS: MuscleGroup[] = [
  'petto',
  'schiena',
  'gambe',
  'spalle',
  'braccia',
  'core',
];

export interface Exercise {
  id?: string;
  name: string;
  muscleGroup: MuscleGroup;
  sets: number;
  reps: number;
  weightKg?: number;
  notes?: string;
}
