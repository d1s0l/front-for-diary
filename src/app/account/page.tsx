'use client'
import React from 'react';
import { User2 } from 'lucide-react'

interface UserProfile {
    firstName: string;
    middleName: string;
    lastName: string;
    birthYear: string;
    clasName: string;
}

const staticUserData: UserProfile = {
    firstName: 'Роман',
    middleName: 'Не помню:(',
    lastName: 'Ченский',
    birthYear: '16.03.2004',
    clasName: '7-Б',
};

const AccountPage: React.FC = () => {
    const userData: UserProfile = staticUserData;

      
    return (
      <div className='px-4.5 py-7.5'>

        <div className='flex flex-row items-center px-4 gap-4 w-screen-min h-16 text-violet-950 bg-stone-50 rounded-2xl mb-10'>
          <User2 size={32}/>
          <h1 className='font-semibold text-2xl'>Профиль</h1>
        </div>

        <div className=''>
          <p className='text-3xl font-semibold text-violet-950 mb-4'>Персональные данные</p>

          <div className='flex flex-row gap-4'>
          {/* Первая колонка */}
            <div className='flex-1 flex flex-col gap-2'>
              <div className='flex flex-col gap-2'>
                <p className='font-medium text-violet-950'>Фамилия</p>
                <div className='flex items-center px-4 text-xl font-normal text-stone-900 h-12 bg-stone-50 rounded-xl '>
                  {userData.lastName}
                </div>
              </div>
              <div className='flex flex-col gap-2'>
                <p className='font-medium text-violet-950'>Имя</p>
                <div className='flex items-center px-4 text-xl font-normal text-stone-900 h-12 bg-stone-50 rounded-xl '>
                  {userData.firstName}
                </div>
              </div>
              <div className='flex flex-col gap-2'>
                <p className='font-medium text-violet-950'>Отчество</p>
                <div className='flex items-center px-4 text-xl font-normal text-stone-900 h-12 bg-stone-50 rounded-xl '>
                  {userData.middleName}
                </div>
              </div>
            </div>
          {/* Вторая колонка */}
            <div className='flex-1 flex flex-col gap-2'>
              <div className='flex flex-col gap-2'>
                <p className='font-medium text-violet-950'>День рождения</p>
                <div className='flex items-center px-4 text-xl font-normal text-stone-900 h-12 bg-stone-50 rounded-xl '>
                  {userData.birthYear}
                </div>
              </div>
              <div className='flex flex-col gap-2'>
                <p className='font-medium text-violet-950'>Класс</p>
                <div className='flex items-center px-4 text-xl font-normal text-stone-900 h-12 bg-stone-50 rounded-xl '>
                  {userData.clasName}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
};
export default AccountPage;