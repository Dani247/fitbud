import { Workout } from "@/utils/definitions";
import { Exercise } from "./Exercise";

export default function Workout({ workout }: { workout: Workout }) {
    return <div className="max-w-sm rounded overflow-hidden shadow-lg bg-white dark:bg-gray-500 p-4 my-4">
        <h2 className="font-bold text-xl mb-2">{workout.workoutname}</h2>
        <ul className="list-disc list-inside">
            {workout.exercises.map((exercise) => (
                <li key={exercise.exerciseid}>{exercise.exercisename}</li>
            ))}
        </ul>
    </div>
}