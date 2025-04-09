'use client';
import { signIn } from 'next-auth/react';
import { useState } from 'react';


export default function login() {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    signIn('credentials', { email, password });
  };

  return (
    <div className='flex flex-col items-center justify-start h-screen'>
        <div className='flex flex-col items-center mt-33 mb-20'>
            <h1 className='font-inter text-4xl text-stone-800 font-bold mb-8.5'>Электронный школьный дневник</h1>
            <a className='font-inter font-semibold text-2xl text-violet-900'>Вход</a>
        </div>
        <div className='font-inter font-semibold w-86 flex flex-col justify-between items-center gap-y-7'>
            <form onSubmit={handleSubmit} className='w-full flex flex-col items-center justify-between gap-y-5'>
                <input className='bg-stone-50 h-14 rounded-2xl text-stone-400 w-full p-4'
                    type="email" 
                    value={email} 
                    placeholder="Email"
                    onChange={(e) => setEmail(e.target.value)} 
                    />
                <input className='bg-stone-50 h-14 rounded-2xl text-stone-400 w-full p-4'
                    type="password" 
                    placeholder="Пароль"
                    value={password} 
                    onChange={(e) => setPassword(e.target.value)} 
                    />
                <button type="submit" className='bg-violet-900 rounded-2xl w-full h-14 text-stone-50'>Войти</button>
            </form>
            <div className='w-full bg-violet-200 rounded-2xl h-1'></div>
            <button type="submit" className='font-inter font-semibold w-full h-14 border-3 border-violet-900 rounded-2xl text-violet-900 '>Войти через ГосУслуги</button>
        </div>
    </div>
  );
}