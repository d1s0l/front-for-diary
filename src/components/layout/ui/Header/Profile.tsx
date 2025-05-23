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
      className='hidden w-max lg:block px-4 py-1 rounded-4xl font-normal bg-violet-500 hover:bg-violet-800 transition-colors text-stone-50'
      onClick={handleClick}>
      <p className='text-sm md:text-sm lg:text-base'>{lastname} {firstname}</p>
      <p className='text-xs md:text-xs lg:text-sm'>{classnumber} класс</p>
    </button>
  );
}