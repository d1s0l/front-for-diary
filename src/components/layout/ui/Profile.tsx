'use client';

import { useRouter } from 'next/navigation';
import { cn } from '@/lib/utils';
import { UserIcon } from 'lucide-react';

interface ProfileProps {
  lastname?: string;
  firstname?: string;
  classnumber?: string | number;
}

export default function Profile({
  lastname = 'Соловьев',
  firstname = 'Дмитрий',
  classnumber = '7-Б'
}: ProfileProps) {
  const router = useRouter();

  const handleClick = () => {
    router.push('/student/account');
  };

  return (
    <button 
      type="button" 
      className='flex flex-row items-center justify-between px-4 py-1 rounded-4xl bg-violet-600 hover:bg-violet-800 transition-colors'
      onClick={handleClick}
    >
      <div className='flex flex-col items-baseline font-normal text-white'>
        <p className='text-sm md:text-sm lg:text-base'>{lastname} {firstname}</p>
        <p className='text-xs md:text-xs lg:text-sm'>{classnumber} класс</p>
      </div>
    </button>
  );
}