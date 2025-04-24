import { IconTextElement } from "@/components/layout/ui/Header/IconTextElement";
import { MenuIcon } from "lucide-react";
import Link from 'next/link'


export default function MenuPage() {
    return(
        <header>
            <IconTextElement icon={MenuIcon} text="Меню" />
        </header>

    
    )
}