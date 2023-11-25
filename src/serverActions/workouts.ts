import { Workouts } from '@/utils/definitions';
import { pool } from '@/utils/db'

export async function getWorkoutsByUserId(userId: string): Promise<Workouts> {
    try {
        const workoutsQuery = `SELECT WorkoutID, WorkoutName, Date FROM Workouts WHERE UserID = $1`;
        const workoutsResult = await pool.query(workoutsQuery, [userId]);
        const workouts = workoutsResult.rows;

        for (const workout of workouts) {
            const exercisesQuery = `
                SELECT e.ExerciseID, e.ExerciseName
                FROM WorkoutExercises we
                JOIN Exercises e ON we.ExerciseID = e.ExerciseID
                WHERE we.WorkoutID = $1
                ORDER BY we.OrderInWorkout`;
            const exercisesResult = await pool.query(exercisesQuery, [workout.workoutid]);
            workout.exercises = exercisesResult.rows;

            for (const exercise of workout.exercises) {
                const setsQuery = `
                    SELECT s.SetID, s.Weight, s.Reps, s.Notes
                    FROM Sets s
                    JOIN WorkoutExercises we ON s.WorkoutExerciseID = we.WorkoutExerciseID
                    WHERE we.WorkoutID = $1 AND we.ExerciseID = $2`;
                const setsResult = await pool.query(setsQuery, [workout.workoutid, exercise.exerciseid]);
                exercise.sets = setsResult.rows;
            }
        }

        return workouts;
    } catch (err) {
        console.error('Error fetching workouts', err);
        throw err;
    }
}
