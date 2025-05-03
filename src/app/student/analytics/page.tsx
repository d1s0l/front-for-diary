'use client'
import { ChevronLeft, ChevronRight, ChartNoAxesCombined } from 'lucide-react'
import { IconTextElement } from '@/components/layout/ui/Header/IconTextElement'
import Profile from '@/components/layout/ui/Header/Profile'
import { useState } from 'react'

export default function GradeTable() {
  const [activeTab, setActiveTab] = useState<'current' | 'final'>('current')
  const [currentWeek, setCurrentWeek] = useState(new Date())

 
  const subjects = [
    'Литература',
    'Математика',
    'Русский язык',
    'Английский язык',
    'Биология',
    'Химия',
    'ИЗО',
    'Физкультура'
  ]

  
  const getWeekDates = () => {
    const start = new Date(currentWeek)
    start.setDate(start.getDate() - start.getDay() + 1) 
    
    return Array.from({ length: 5 }, (_, i) => {
      const date = new Date(start)
      date.setDate(date.getDate() + i)
      return date.toLocaleDateString('ru-RU', { day: 'numeric', month: 'short' })
    })
  }

  const weekDates = getWeekDates()

  return (
    <div>
        <header className="flex justify-between mb-10">
                <IconTextElement icon={ChartNoAxesCombined} text="Аналитика" />
                <Profile />
        </header>

        <h3 className='text-violet-900 font-semibold text-2xl p-6'>Успеваемость</h3>

        <section className="bg-stone-50 p-6 rounded-2xl shadow-sm">
        
            <div className="flex justify-center items-center flex-wrap mb-6 border-b gap-2 border-violet-400 pb-4
            min-[437px]:justify-between"
            >
                <div className="flex justify-between space-x-8
                min-[437px]:justify-between"    
                >
                    <button
                    className="relative pb-1 group cursor-pointer"
                    onClick={() => setActiveTab('current')}
                    >
                        <span className={`relative z-10 text-center ${activeTab === 'current' ? 'text-violet-900 font-medium' : 'text-gray-600'}`}>
                            Текущие
                        </span>
                        <span className={`
                            absolute bottom-0 left-1/2 h-0.5 bg-violet-900 
                            transform -translate-x-1/2
                            transition-all duration-300 ease-out
                            ${activeTab === 'current' ? 'w-full' : 'w-0 group-hover:w-full'}
                        `}></span>
                    </button>
                    <button
                    className="relative pb-1 group cursor-pointer"
                    onClick={() => setActiveTab('final')}>
                        <span className={`relative z-10 ${activeTab === 'final' ? 'text-violet-900 font-medium' : 'text-gray-600'}`}>
                            Итоговые
                        </span>
                        <span className={`
                            absolute bottom-0 left-1/2 h-0.5 bg-violet-900 
                            transform -translate-x-1/2
                            transition-all duration-300 ease-out
                            ${activeTab === 'final' ? 'w-full' : 'w-0 group-hover:w-full'}
                        `}></span>
                    </button>
                </div>
                
                <div className="flex items-center space-x-2">
                    <button 
                        onClick={() => {
                        const prevWeek = new Date(currentWeek)
                        prevWeek.setDate(prevWeek.getDate() - 7)
                        setCurrentWeek(prevWeek)
                        }}
                        className="p-1 rounded-full hover:bg-stone-200 text-violet-900 cursor-pointer"
                    >
                        <ChevronLeft className="w-6 h-6" />
                    </button>
                    <span className="font-medium text-violet-900 text-center">
                        {currentWeek.toLocaleDateString('ru-RU', { 
                        week: 'numeric', 
                        month: 'long', 
                        year: 'numeric' 
                        })}
                    </span>
                    <button 
                        onClick={() => {
                        const nextWeek = new Date(currentWeek)
                        nextWeek.setDate(nextWeek.getDate() + 7)
                        setCurrentWeek(nextWeek)
                        }}
                        className="p-1 text-violet-900 rounded-full hover:bg-stone-200 cursor-pointer"
                    >
                        <ChevronRight className="w-6 h-6" />
                    </button>
                </div>
            </div>

        
            <div className="overflow-x-auto">
                <table className="w-full border-collapse">
                    <thead>
                        <tr className="border-b border-violet-500">
                        <th className="text-left py-3 px-4 font-semibold text-violet-900">Предметы</th>
                        
                        {activeTab === 'final' ? (
                            <>
                            <th className="py-3 px-4 font-semibold text-violet-900">I ч</th>
                            <th className="py-3 px-4 font-semibold text-violet-900">II ч</th>
                            <th className="py-3 px-4 font-semibold text-violet-900">III ч</th>
                            <th className="py-3 px-4 font-semibold text-violet-900">IV ч</th>
                            <th className="py-3 px-4 font-semibold text-violet-900">За год</th>
                            </>
                        ) : (
                            <>
                            {weekDates.map((date, i) => (
                                <th key={i} className="py-3 px-4 font-semibold text-violet-900">{date}</th>
                            ))}
                            </>
                        )}
                        </tr>
                    </thead>
                    <tbody>
                        {subjects.map((subject, rowIndex) => (
                        <tr 
                            key={subject} 
                            className={`${rowIndex % 2 === 0 ? 'bg-stone-100' : 'bg-stone-50'} border-b border-stone-200`}
                        >
                            <td className="py-3 px-4 font-medium border-r border-violet-400 text-violet-800">{subject}</td>
                            
                            {activeTab === 'final' ? (
                            <>
                                <td className="py-3 px-4 text-center text-violet-800">-</td>
                                <td className="py-3 px-4 text-center text-violet-800">-</td>
                                <td className="py-3 px-4 text-center text-violet-800">-</td>
                                <td className="py-3 px-4 text-center text-violet-800">-</td>
                                <td className="py-3 px-4 text-center text-violet-800">-</td>
                                
                            </>
                            ) : (
                            <>
                                {weekDates.map((_, i) => (
                                <td key={i} className="py-3 px-4 text-center text-violet-800">-</td>
                                ))}
                            </>
                            )}
                        </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </section>
    </div>
  )
}