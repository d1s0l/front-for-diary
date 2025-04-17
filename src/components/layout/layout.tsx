'use client';

import { Sidebar } from './sidebar/Sidebar'

export function MainLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <main className="flex">
      <div className="hidden lg:block">
        <Sidebar />
      </div>
      <section className="w-full py-7.5 pr-8 pl-4">
        {children}
      </section>
    </main>
  )
}