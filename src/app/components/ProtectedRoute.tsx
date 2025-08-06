"use client"

import {useRouter} from 'next/navigation';
import {useEffect} from 'react';
import {useAuth} from '../context/AuthContext';

type ProtectedRouterProps = {
    children: React.ReactNode;
}

export default function ProtectedRouter({children}: ProtectedRouterProps) {
    const {user, loading} = useAuth();
    const router = useRouter();

    useEffect(() => {
        if (!loading && !user) {
            router.push('/login')
            console.log('Not logged in')
            console.log(user)
        }
    }, [user, loading, router]);

    if (loading || !user) return null;

    return <>{children}</>
}