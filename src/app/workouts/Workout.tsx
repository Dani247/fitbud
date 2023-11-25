'use client'
import Button from "@/components/Button";
import Modal from "@/components/Modal/Modal";
import { Workout } from "@/utils/definitions";
import useModal from "@/utils/hooks/useModal";

export default function Workout({ workout }: { workout: Workout }) {
    const { isOpen, open, close } = useModal()

    return <>
        <div onClick={() => open()} className="max-w-sm rounded overflow-hidden shadow-lg bg-white dark:bg-gray-500 p-4 my-4">
            <h2 className="font-bold text-xl mb-2">{workout.workoutname}</h2>
            <ul className="list-disc list-inside">
                {workout.exercises.map((exercise) => (
                    <li key={exercise.exerciseid}>{exercise.exercisename}</li>
                ))}
            </ul>
        </div>

        <Modal isOpen={isOpen} onClose={close} containerClassName="p-4" title={workout.workoutname}>
            <ul className="list-disc list-inside">
                {workout.exercises.map((exercise) => (
                    <li className="my-2" key={exercise.exerciseid}>{exercise.exercisename} - {exercise.sets.length} sets</li>
                ))}
            </ul>

            <Button type="success" className="w-full">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5.25 5.653c0-.856.917-1.398 1.667-.986l11.54 6.348a1.125 1.125 0 010 1.971l-11.54 6.347a1.125 1.125 0 01-1.667-.985V5.653z" />
                </svg>

                Start a session
            </Button>
        </Modal>
    </>
}