import { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { EyeIcon, EyeOffIcon } from '@heroicons/react/outline';
import Link from 'next/link';
import MainLayout from './pages/MainLayout';
import { useRouter } from 'next/navigation';
import { useSession } from 'next-auth/react';
import Image from 'next/image';
const Signup = () => {
    const router = useRouter();
    const { data: session, status } = useSession();
    const { register, handleSubmit, formState: { errors } } = useForm();
    const [showPassword, setShowPassword] = useState(false);
    useEffect(() => {
        if (status === 'authenticated') {
            router.push('/dashboard');
        }
    }, [session, status, router]);
    const onSubmit = async (data) => {
        try {
            const response = await fetch('/api/member', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(data)
            });
            const result = await response.json();
            if (result && result.email) {
                // router.push('/login');
                window.location.href = '/login';
            } else {
                console.error('Failed to create member:', result.message || 'Unknown error');
            }
        } catch (error) {
            console.error(error);
        }
    };


    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };

    return (
        <MainLayout>
            <div className="min-h-screen flex items-center justify-center bg-gray-50  py-12 px-4 sm:px-6 lg:px-8">
                <div className="max-w-md w-full space-y-8">
                    <div className='flex justify-center'>
                        <Image
                        width={200} 
                        height={50}
                            src="/logo.png"
                            alt="logo image"
                            className="w-48"
                        />
                    </div>
                    <div>
                        <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
                            Sign up for an account
                        </h2>
                    </div>
                    <form className="mt-8 space-y-6" onSubmit={handleSubmit(onSubmit)}>
                        <input type="hidden" name="remember" value="true" />
                        <div className="rounded-md shadow-sm -space-y-px">
                            <div>
                                <label htmlFor="name" className="sr-only">
                                    Full name
                                </label>
                                <input
                                    id="name"
                                    name="name"
                                    type="text"
                                    autoComplete="name"
                                    {...register("name", { required: true })}
                                    className={`appearance-none rounded-none relative block w-full px-3 py-2 border ${errors.name ? "border-red-500" : "border-gray-300"
                                        } placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-[#ff5722] focus:border-[#ff5722] focus:z-10 sm:text-sm`}
                                    placeholder="Full name"
                                />
                                {errors.name && (
                                    <span className="text-red-500 text-sm mt-1">
                                        Full name is required
                                    </span>
                                )}
                            </div>
                            <div>
                                <label htmlFor="email-address" className="sr-only">
                                    Email address
                                </label>
                                <input
                                    id="email-address"
                                    name="email-address"
                                    type="email"
                                    autoComplete="email"
                                    {...register("email", { required: true })}
                                    className={`appearance-none rounded-none relative block w-full px-3 py-2 border ${errors.email ? "border-red-500" : "border-gray-300"
                                        } placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-[#ff5722] focus:border-[#ff5722] focus:z-10 sm:text-sm`}
                                    placeholder="Email address"
                                />
                                {errors.email && (
                                    <span className="text-red-500 text-sm mt-1">
                                        Email is required
                                    </span>
                                )}
                            </div>
                            <div>
                                <label htmlFor="password" className="sr-only">
                                    Password
                                </label>
                                <div className="relative">
                                    <input
                                        id="password"
                                        name="password"
                                        type={showPassword ? "text" : "password"}
                                        autoComplete="current-password"
                                        {...register("password", { required: true })}
                                        className={`appearance-none rounded-none relative block w-full px-3 py-2 border ${errors.password ? "border-red-500" : "border-gray-300"
                                            } placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-[#ff5722] focus:border-[#ff5722] focus:z-10 sm:text-sm`}
                                        placeholder="Create Password"
                                    />
                                    <div
                                        className="absolute inset-y-0 right-0 pr-3 flex items-center cursor-pointer"
                                        onClick={togglePasswordVisibility}
                                    >
                                        {showPassword ? (
                                            <EyeOffIcon className="h-5 w-5 text-gray-500" />
                                        ) : (
                                            <EyeIcon className="h-5 w-5 text-gray-500" />
                                        )}
                                    </div>
                                </div>
                                {errors.password && (
                                    <span className="text-red-500 text-sm mt-1">
                                        Password is required
                                    </span>
                                )}
                            </div>
                        </div>
                        <div>
                            <button
                                type="submit"
                                className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-[#ff5722] hover:bg-[#ff5722] focus:outline-none "
                            >
                                <span className="absolute left-0 inset-y-0 flex items-center pl-3">
                                    {/* <!-- Heroicon name: lock-closed --> */}
                                </span>
                                Sign up
                            </button>
                        </div>
                    </form>

                    <div className="mt-6">

                        <div className="mt-6 grid grid-cols-1 gap-3">
                            <p className="mt-2 mb-0 pt-1 text-sm font-semibold">
                                Already have an account?
                                <Link
                                    href="/login"
                                    className="text-red-500 ml-2"
                                >LogIn
                                </Link>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </MainLayout>
    )
}
export default Signup
