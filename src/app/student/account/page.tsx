'use client'

import React from 'react';
import { User2 } from 'lucide-react'
import { DataField } from '@/components/layout/ui/DataField';

interface UserProfile {
    lastName: string;
    firstName: string;
    middleName: string;
    birthYear: string;
    clasName: string;
}

const staticUserData: UserProfile = {
    lastName: 'Соловьев',
    firstName: 'Дмитрий',
    middleName: 'Константинович',
    birthYear: '16.03.2004',
    clasName: '7-Б',
};

const AccountPage: React.FC = () => {
    const userData: UserProfile = staticUserData;

      
    return (
      <div>

        <header className='flex flex-row items-center px-4 gap-4 w-screen-min h-16 text-violet-900 bg-stone-50 rounded-2xl mb-10'>
          <User2 size={32}/>
          <span className='font-semibold text-2xl'>Профиль</span>
        </header>

        <div>
          <p className='text-3xl font-semibold text-violet-900 mb-4'>Персональные данные</p>

          <div className='flex flex-col gap-4 md:flex-row'>
            <ul className='flex-1 flex flex-col gap-2'>
              <DataField label='Фамилия' value={userData.lastName} />
              <DataField label="Имя" value={userData.firstName} />
              <DataField label="Отчество" value={userData.middleName} />
            </ul>
          
            <ul className='flex-1 flex flex-col gap-2'>
              <DataField label="День рождения" value={userData.birthYear} />
              <DataField label='Класс' value={userData.clasName} />
            </ul>
          </div>
        </div>
      </div>
    );
};
export default AccountPage;