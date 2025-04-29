import { IconTextElement } from "@/components/layout/ui/Header/IconTextElement";
import Profile from "@/components/layout/ui/Header/Profile";
import { Award, AwardIcon, Trophy } from "lucide-react";
import { Awards } from "@/components/layout/ui/award";

export default function AwardPage() {
    return(
        <div>
            <header className="flex justify-between mb-10">
                <IconTextElement icon={Award} text="Достижения"/>
                <Profile />
            </header>

            <section>
                <Awards 
                    label="Лучший дизайн" 
                    icon={AwardIcon}
                    place={2}
                    awardType="medal"
                />
            </section>
        </div>
    )
}