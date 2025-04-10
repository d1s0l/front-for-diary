import type { PropsWithChildren } from "react"
import { Sidebar } from "./sidebar/Sidebar"
import styles from './layout.module.scss'

export default function LayoutClient({
  children
}: PropsWithChildren<unknown>) {
  return (
    <main className='flex'>
        <div className="hidden lg:block">
            <Sidebar />
        </div>

        <section className="w-full lg:w-[calc(100%-16rem)]">
            {children}
        </section>
    </main>
  )
}