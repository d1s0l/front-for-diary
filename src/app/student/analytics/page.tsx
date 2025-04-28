import { IconTextElement } from "@/components/layout/ui/Header/IconTextElement";
import Profile from "@/components/layout/ui/Header/Profile";
import { ChartNoAxesCombined } from "lucide-react";

export default function AnalyticsPage(){
    return(
        <main>
            <header className="flex justify-between mb-10">
                <IconTextElement icon={ChartNoAxesCombined} text="Аналитика" />
                <Profile />
            </header>

            <section>

            </section>
        </main>
    )
}