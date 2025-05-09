'use client'
import { ReactNode } from 'react'
import { useAuth } from '@/hooks/auth'
import { MainAuthWidget } from '@/components/shared/general';


const AppLayout = ({ children }: { children: ReactNode }) => {
    const { user } = useAuth({ middleware: 'auth' })

    return (
        <MainAuthWidget user={user}>
            {children}
        </MainAuthWidget>
    )
}

export default AppLayout
