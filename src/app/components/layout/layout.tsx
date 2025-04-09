import { Sidebar } from "lucide-react";
import { Main } from "next/document";
import type { PropsWithChildren } from "react";

export default function LayoutClient({children}:
PropsWithChildren<unknown>) {
    return (
        <main>
            <Sidebar />
            <section>{children}</section>
        </main>
    )
}