"use client";

import { useEffect, useState } from 'react';
import Loading from "../../components/admin/loading";
import MemberPage from '../../components/admin/MemberPage';
import { signIn, useSession } from 'next-auth/react';

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
    if (loading) {
        return <Loading />;
    }

    return (
        <>
            {session ? <MemberPage /> : <Loading />}
        </>
    );
}
