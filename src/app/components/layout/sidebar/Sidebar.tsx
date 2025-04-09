'use client'
import { usePathname } from 'next/navigation'
import { Award, BookCheck, BookOpen, Calendar, ChartNoAxesCombined, HomeIcon, MessageSquareText, Newspaper, User2 } from 'lucide-react';
import Link from 'next/link';
import styles from "./Sidebar.module.scss"

export function Sidebar() {

    const pathname = usePathname()

    const isActive = (href: string) => pathname === href

    return (
        <aside className='rounded-3xl h-screen flex flex-col text-violet-900 py-4 bg-stone-50'>
            <div className='text-lg font-medium mb-6 px-4'>Название заведения</div>
  
            <div className='mb-11'>
                <Link 
                href='/lk' 
                className={`flex items-center gap-3 py-4 px-4 ${
                    isActive('/lk') 
                      ? 'bg-violet-100 text-violet-900' 
                      : 'hover:bg-gray-100'
                    }`}
                >
                <User2 size={22} />
                <span className='text-[18px] font-normal'>Профиль</span>
                </Link>
                <Link href='/chat'
                className={`flex items-center gap-3 py-4 px-4 ${
                    isActive('/chat') 
                      ? 'bg-violet-100 text-violet-900' 
                      : 'hover:bg-gray-100'
                    }`}
                >
                <MessageSquareText size={22} />
                <span className='text-[18px] font-normal'>Чат</span>
                </Link>
            </div>

            <div className='h-1 bg-violet-400 mb-11'></div>

            <div className=''>
                <Link href='/home'
                className={`flex items-center gap-3 py-4 px-4 ${
                    isActive('/home') 
                      ? 'bg-violet-100 text-violet-900' 
                      : 'hover:bg-gray-100'
                    }`}
                >
                    <HomeIcon size={22} />
                    <span className='text-[18px] font-normal'>Главная</span>
                </Link>
                <Link href='/news' 
                className={`flex items-center gap-3 py-4 px-4 ${
                    isActive('/news') 
                      ? 'bg-violet-100 text-violet-900' 
                      : 'hover:bg-gray-100'
                    }`}
                >
                    <Newspaper size={22} />
                    <span className='text-[18px] font-normal'>Новости</span>
                </Link>
                <Link href='/schedule'
                className={`flex items-center gap-3 py-4 px-4 ${
                    isActive('/schedule') 
                        ? 'bg-violet-100 text-violet-900' 
                        : 'hover:bg-gray-100'
                    }`}                 >
                    <Calendar size={22} />
                    <span className='text-[18px] font-normal'>Расписание</span>
                </Link>
                <Link href='/homework' 
                className={`flex items-center gap-3 py-4 px-4 ${
                    isActive('/homework') 
                        ? 'bg-violet-100 text-violet-900' 
                        : 'hover:bg-gray-100'
                    }`}    
                >
                    <BookOpen size={22} />
                    <span className='text-[18px] font-normal'>Домашние задания</span>
                </Link>
                <Link href='/lessons' 
                className={`flex items-center gap-3 py-4 px-4 ${
                    isActive('/lessons') 
                        ? 'bg-violet-100 text-violet-900' 
                        : 'hover:bg-gray-100'
                    }`}    
                >
                    <BookCheck size={22} />
                    <span className='text-[18px] font-normal'>Предметы</span>
                </Link>
                <Link href='/analytics' 
                className={`flex items-center gap-3 py-4 px-4 ${
                    isActive('/analytics') 
                        ? 'bg-violet-100 text-violet-900' 
                        : 'hover:bg-gray-100'
                    }`}    
                >
                    <ChartNoAxesCombined size={22} />
                    <span className='text-[18px] font-normal'>Аналитика</span>
                </Link>
                <Link href='/awards' 
                className={`flex items-center gap-3 py-4 px-4 ${
                    isActive('/awards') 
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