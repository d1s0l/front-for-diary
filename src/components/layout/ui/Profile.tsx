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
      className='flex flex-row items-center justify-around rounded-3xl bg-violet-900 w-48 sm:w-56 md:w-60 lg:w-72 xl:w-80 hover:bg-violet-800 transition-colors'
      onClick={handleClick}
    >
      <div className='[--icon-size:24px] md:[--icon-size:28px] lg:[--icon-size:34px] xl:[--icon-size:38px]'>
        <UserIcon className="w-[var(--icon-size)] h-[var(--icon-size)] text-white" />
      </div>
      <div className='flex flex-col items-baseline font-normal text-white'>
        <p className='text-sm md:text-base lg:text-lg xl:text-xl'>{lastname} {firstname}</p>
        <p className='text-xs md:text-sm lg:text-base xl:text-lg'>{classnumber} класс</p>
      </div>
    </button>
  );
}