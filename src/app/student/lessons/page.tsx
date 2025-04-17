import Profile from "@/components/layout/ui/Profile"
import { BookCheck } from "lucide-react"

export default function LessonPage() {
    return(
        <div>
            <div className="w-full h-16 flex justify-between">
                <div className="flex flex-row items-center px-4 gap-4 rounded-4xl w-3/4 bg-stone-50 text-violet-900">
                    <div className='[--icon-size:24px] md:[--icon-size:28px] lg:[--icon-size:32px]'>
                        <BookCheck className="w-[var(--icon-size)] h-[var(--icon-size)]"/>
                    </div>
                    <p className="font-semibold text-base md:text-lg lg:text-2xl">Предметы</p>
                </div>
                <Profile />
            </div>


        </div>
    )
}