import Profile from "@/components/layout/ui/Header/Profile"
import { IconTextElement } from "@/components/layout/ui/Header/IconTextElement"
import { BookCheck } from "lucide-react"


export default function MathPage() {
    return(
        <div>
            <header className="flex justify-between items-center mb-10">
                <IconTextElement
                    icon={BookCheck} 
                    text="Предметы"
                />
                <Profile />
            </header>

            <h3 className="">Математика</h3>


        </div>
    )
}