import DarkModeToggle from "@/components/DarkModeToggle"
import MobileLayout from "@/components/MobileLayout"

function SettingsPage() {
    return <MobileLayout>
        <div>
            <DarkModeToggle />
        </div>
    </MobileLayout>
}

export default SettingsPage