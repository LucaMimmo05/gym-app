export interface Exercise {
  id?: string;
  name: string;
  muscleGroup: string; // per ora semplice stringa: 'petto', 'schiena', ecc.
  sets: number;
  reps: number;
  weightKg?: number;
  notes?: string;
}