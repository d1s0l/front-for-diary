import { Award, BookCheck, BookOpen, Calendar, ChartNoAxesCombined, HomeIcon, MessageSquareText, Newspaper, User2 } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

export function Aside() {
    return (
        <aside className='bg-sky-50'>
            <div className=''>Название заведения</div>
            <div>
                <Link href='/lk'>
                    <User2 className='bg-amber-500'/>
                </Link>
                <Link href='/chat'>
                    <MessageSquareText />
                </Link>
            </div>
            <div>
                <Link href='/home'>
                    <HomeIcon />
                </Link>
                <Link href='/news'>
                    <Newspaper />
                </Link>
                <Link href='/schedule'>
                    <Calendar />
                </Link>
                <Link href='/homework'>
                    <BookOpen />
                </Link>
                <Link href='/lessons'>
                    <BookCheck />
                </Link>
                <Link href='/analytics'>
                    <ChartNoAxesCombined />
                </Link>
                <Link href='/awards'>
                    <Award />
                </Link>
            </div>
        </aside>
    )
}