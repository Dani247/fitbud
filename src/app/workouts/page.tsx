import { Suspense } from 'react';
import WorkoutList from "./WorkoutList";
import WorkoutListFallback from './WorkoutListFallback';
import MobileLayout from '@/components/MobileLayout';

export default function Workouts() {
    return <MobileLayout>
        <Suspense fallback={<WorkoutListFallback />}>
            <WorkoutList />
        </Suspense>
    </MobileLayout>
}