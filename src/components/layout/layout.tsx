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
      <section className="w-full lg:w-[calc(100%-16rem)]">
        {children}
      </section>
    </main>
  )
}