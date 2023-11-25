import { Set } from "@/utils/definitions";

export default function Set({ set, i }: { set: Set, i: number }) {
    return <div className="flex my-2" key={set.setid}>
        <div className="w-1/4 text-center">{i + 1}</div>
        <div className="w-1/4">
            <input className="w-10 text-black" value={set.weight} />
        </div>
        <div className="w-1/4">
            <input className="w-10 text-black" value={set.reps} />
        </div>
        <div className="w-1/4">
            <input className="w-10 text-black" value={set.notes} />
        </div>
    </div>
}