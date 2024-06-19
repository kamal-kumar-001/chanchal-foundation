"use client";

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import Loading from "../../components/admin/loading";
import MemberPage from '../../components/admin/MemberPage';

export default function Index() {
    const router = useRouter();
    const [loading, setLoading] = useState(true);
    const [isAuthenticated, setIsAuthenticated] = useState(false);

    useEffect(() => {
        const checkAuth = async () => {
            const token = localStorage.getItem('token');

            if (!token) {
                router.push('/login');
                return;
            }

            try {
                const response = await fetch('/api/auth/', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                        'Authorization': `Bearer ${token}`
                    }
                });
                
                if (response.ok) {
                    const result = await response.json();
                    if (result.isAuthenticated) {
                        setIsAuthenticated(true);
                    } else {
                        router.push('/login');
                    }
                } else {
                    router.push('/login');
                }
            } catch (error) {
                console.error('Error verifying token:', error);
                router.push('/login');
            } finally {
                setLoading(false);
            }
        };

        checkAuth();
    }, [router]);

    if (loading) {
        return <Loading />;
    }

    return (
        <>
            {isAuthenticated ? <MemberPage /> : <Loading />}
        </>
    );
}
