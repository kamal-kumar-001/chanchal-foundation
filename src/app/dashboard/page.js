"use client"; // This is a client-side component

import { useEffect, useState } from 'react';
import { useSession, signIn } from 'next-auth/react';
import Loading from "../components/admin/loading";
import DashboardLayout from '../components/pages/Dashboard';

export default function Index() {
    const { data: session, status } = useSession();
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        if (status === 'loading') {
            return; // Do nothing while loading
        }

        if (!session) {
            signIn(); // Redirect to the login page
        } else {
            setLoading(false); // User is authenticated
        }
    }, [session, status]);

    if (loading || status === 'loading') {
        return <Loading />;
    }

    return (
        <>
            {session ? <DashboardLayout user={session.user} /> : <Loading />}
        </>
    );
}
