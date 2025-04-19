import Profile from "@/components/layout/ui/Header/Profile"
import { MessageSquareText } from 'lucide-react'
import { IconTextElement } from "@/components/layout/ui/Header/IconTextElement"


export default function Chat(){
    return(
        <div>
            <div className="flex justify-between">
                <IconTextElement
                     icon={MessageSquareText} 
                     text="Чат"
                />
                <Profile />
            </div>
        </div>
    )
}