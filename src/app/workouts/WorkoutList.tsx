import { getWorkoutsByUserId } from "@/serverActions/workouts";
import useUser from "@/utils/hooks/useUser";
import Workout from './Workout'
import Button from "@/components/Button";
import Modal from "@/components/Modal/Modal";
import useModal from "@/utils/hooks/useModal";

export default async function WorkoutList() {
    const { userid } = useUser()
    const workouts = await getWorkoutsByUserId(userid);


    return <section className="p-4">
        <h1 className="text-xl">Your workouts</h1>
        <Button type="info" className="w-full">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
            </svg>

            Add workout
        </Button>
        {[...workouts, ...workouts].map((workout) => {
            return <Workout key={workout.workoutid} workout={workout} />
        })}
    </section>
}