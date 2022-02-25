interface User {
  id: number;
  email: string;
  firstname: string;
  hashed_password?: string;
}

interface WorkoutTemplate {
  name: string;
  exerciseTemplates: ExerciseTemplate[];
}

interface ExerciseTemplate {
  name: string;
  sets: number;
  resp: number;
}
