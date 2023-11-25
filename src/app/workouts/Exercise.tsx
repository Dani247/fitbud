import { Exercise } from "@/utils/definitions";
import Set from "./Set";

export function Exercise({ exercise }: { exercise: Exercise }) {
    return <div className="mt-4">
        <h1 className="text-xl">{exercise.exercisename}</h1>
        <div>
            <div className="text-left">
                <div className="flex">
                    <div className="w-1/4 text-center">#</div>
                    <div className="w-1/4">Weight</div>
                    <div className="w-1/4">Reps</div>
                    <div className="w-1/4">Notes</div>
                </div>
                {exercise.sets.map((set, i) => {
                    return <Set i={i} set={set} key={set.setid} />
                })}
            </div>

        </div>
    </div>
}