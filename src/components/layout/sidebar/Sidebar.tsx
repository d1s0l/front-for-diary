'use client'
import { usePathname } from 'next/navigation'
import { Award, BookCheck, BookOpen, Calendar, ChartNoAxesCombined, HomeIcon, MessageSquareText, Newspaper, User2 } from 'lucide-react';
import Link from 'next/link';

export function Sidebar() {

    const pathname = usePathname()

    const isActive = (href: string) => pathname === href

    return (
        <aside className='rounded-r-3xl h-screen flex flex-col justify-between py-9 text-violet-900  bg-stone-50'>
            <div className='text-lg font-medium px-4'>Название заведения</div>
  
            <div className=''>
                <Link 
                href='/student/account' 
                className={`flex items-center gap-3 py-4 px-4 ${
                    isActive('/student/account') 
                      ? 'bg-violet-100 text-violet-900' 
                      : 'hover:bg-gray-100'
                    }`}
                >
                <User2 size={22} />
                <span className='text-[18px] font-normal'>Профиль</span>
                </Link>
                <Link href='/student/chat'
                className={`flex items-center gap-3 py-4 px-4 ${
                    isActive('/student/chat') 
                      ? 'bg-violet-100 text-violet-900' 
                      : 'hover:bg-gray-100'
                    }`}
                >
                <MessageSquareText size={22} />
                <span className='text-[18px] font-normal'>Чат</span>
                </Link>
            </div>

            <div className='h-0.5 bg-violet-400'></div>

            <div className=''>
                <Link href='/student/home'
                className={`flex items-center gap-3 py-4 px-4 ${
                    isActive('/student/home') 
                      ? 'bg-violet-100 text-violet-900' 
                      : 'hover:bg-gray-100'
                    }`}
                >
                    <HomeIcon size={22} />
                    <span className='text-[18px] font-normal'>Главная</span>
                </Link>
                <Link href='/student/news' 
                className={`flex items-center gap-3 py-4 px-4 ${
                    isActive('/student/news') 
                      ? 'bg-violet-100 text-violet-900' 
                      : 'hover:bg-gray-100'
                    }`}
                >
                    <Newspaper size={22} />
                    <span className='text-[18px] font-normal'>Новости</span>
                </Link>
                <Link href='/student/schedule'
                className={`flex items-center gap-3 py-4 px-4 ${
                    isActive('/student/schedule') 
                        ? 'bg-violet-100 text-violet-900' 
                        : 'hover:bg-gray-100'
                    }`}                 >
                    <Calendar size={22} />
                    <span className='text-[18px] font-normal'>Расписание</span>
                </Link>
                <Link href='/student/homework' 
                className={`flex items-center gap-3 py-4 px-4 ${
                    isActive('/student/homework') 
                        ? 'bg-violet-100 text-violet-900' 
                        : 'hover:bg-gray-100'
                    }`}    
                >
                    <BookOpen size={22} />
                    <span className='text-[18px] font-normal'>Домашние задания</span>
                </Link>
                <Link href='/student/lessons' 
                className={`flex items-center gap-3 py-4 px-4 ${
                    isActive('/student/lessons') 
                        ? 'bg-violet-100 text-violet-900' 
                        : 'hover:bg-gray-100'
                    }`}    
                >
                    <BookCheck size={22} />
                    <span className='text-[18px] font-normal'>Предметы</span>
                </Link>
                <Link href='/student/analytics' 
                className={`flex items-center gap-3 py-4 px-4 ${
                    isActive('/student/analytics') 
                        ? 'bg-violet-100 text-violet-900' 
                        : 'hover:bg-gray-100'
                    }`}    
                >
                    <ChartNoAxesCombined size={22} />
                    <span className='text-[18px] font-normal'>Аналитика</span>
                </Link>
                <Link href='/student/awards' 
                className={`flex items-center gap-3 py-4 px-4 ${
                    isActive('/student/awards') 
                        ? 'bg-violet-100 text-violet-900' 
                        : 'hover:bg-gray-100'
                    }`}    
                >
                    <Award size={22} />
                    <span className='text-[18px] font-normal'>Достижения</span>
                </Link>
            </div>
        </aside>
    )
}