import { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { EyeIcon, EyeOffIcon } from '@heroicons/react/outline';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { getSession, signIn, useSession } from 'next-auth/react';
import MainLayout from './pages/MainLayout';
import Image from 'next/image';
const LogIn = () => {
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
        const result = await signIn('credentials', {
            redirect: false,
            email: data.email,
            password: data.password,
        });

        if (result?.error) {
            console.error('Login failed:', result.error);
        } else {
            // Assuming you have a isAdmin check in your session or user data
            const user = await getSession();
            if (user.isAdmin) {
                router.push('/admin'); // Redirect to admin page if the user is an admin
            } else {
                router.push('/dashboard'); // Redirect to a regular user dashboard or homepage
            }
        }
    };

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };

    return (
        <MainLayout>
            <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
                <div className="max-w-md w-full space-y-8">
                    <div className="flex justify-center">
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
                            Login
                        </h2>
                    </div>
                    <form className="mt-8 space-y-6" onSubmit={handleSubmit(onSubmit)}>
                        <input type="hidden" name="remember" value="true" />
                        <div className="rounded-md shadow-sm -space-y-px">
                            <div>
                                <label htmlFor="email-address" className="sr-only">
                                    Email address
                                </label>
                                <input
                                    id="email-address"
                                    name="email"
                                    type="email"
                                    autoComplete="email"
                                    {...register("email", { required: true })}
                                    className={`appearance-none rounded-t-md relative block w-full px-3 py-2 border ${errors.email ? "border-red-500" : "border-gray-300"
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
                                        placeholder="Password"
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
                        <div className="flex items-center justify-between">
                            <div className="flex items-center">
                                <input
                                    id="remember-me"
                                    name="remember-me"
                                    type="checkbox"
                                    className="h-4 w-4 text-[#ff5722] focus:ring-[#ff5722] border-gray-300 rounded"
                                />
                                <label htmlFor="remember-me" className="ml-2 block text-sm text-gray-900">
                                    Remember me
                                </label>
                            </div>

                            <div className="text-sm">
                                <a href="#" className="font-medium text-[#ff5722] hover:text-[#ff5722]">
                                    Forgot your password?
                                </a>
                            </div>
                        </div>

                        <div>
                            <button
                                type="submit"
                                className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-[#ff5722] hover:bg-[#ff5722] focus:outline-none"
                            >
                                <span className="absolute left-0 inset-y-0 flex items-center pl-3">
                                    {/* <!-- Heroicon name: lock-closed --> */}
                                </span>
                                LogIn
                            </button>
                        </div>
                    </form>

                    <div className="mt-6">
                        <p className="mt-2 mb-0 pt-1 text-sm font-semibold">
                            Do not have an account?
                            <Link
                                href="/signup"
                                className="text-red-500 ml-2"
                            >
                                SignUp
                            </Link>
                        </p>
                    </div>
                </div>
            </div>
        </MainLayout>
    );
};

export default LogIn;
