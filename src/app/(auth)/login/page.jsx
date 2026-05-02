"use client";
import { authClient } from "@/lib/auth-client";
import { Check } from "@gravity-ui/icons";
import { Button, Description, Form, Input, Label, TextField } from "@heroui/react";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { toast } from 'react-toastify';
import { IoEyeOutline, IoEyeOffOutline, IoLogoGoogle } from "react-icons/io5";

const SignInPage = () => {
    const [isShowPassword, setIsShowPassword] = useState(false);
    const router = useRouter();
    const onSubmit = async (e) => {
        e.preventDefault();
        const formData = new FormData(e.currentTarget);
        const userData = Object.fromEntries(formData.entries());

        const { data, error } = await authClient.signIn.email({
            email: userData.email,
            password: userData.password,
            rememberMe: true,
            callbackURL: '/'
        });

        // console.log(data, error, 'login')

        toast.dismiss();
        if (error) {
            toast.error(error.message || "Something went wrong!");
        }

        if (data) {
            toast.success(`Success! Welcome ${userData.name}`);
            e.target.reset();
            router.push('/');
        }
    };

    return (
        <div className="flex flex-col items-center pt-10 min-h-screen bg-gray-50">
            <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100">
                <h2 className="text-3xl font-bold mb-6 text-center text-gray-800">Sign In</h2>

                <Form className="flex w-96 flex-col gap-5" onSubmit={onSubmit}>

                    {/* Email Field */}
                    <TextField isRequired name="email" type="email"
                        validate={(value) => {
                            if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(value)) {
                                return "Please enter a valid email address";
                            }
                            return null;
                        }} >
                        <Label className="text-sm font-semibold text-gray-700">Email</Label>
                        <Input
                            className="p-3 border rounded-lg focus:ring-2 focus:ring-blue-500 "
                            placeholder="Your Email"
                        />
                    </TextField>

                    {/* Password Field */}
                    <TextField
                        isRequired
                        name='password'
                        validate={(value) => {
                            if (value.length < 8) return "Min 8 characters required";
                            if (!/[A-Z]/.test(value)) return "Need at least one uppercase letter";
                            if (!/[0-9]/.test(value)) return "Need at least one number";
                            return null;
                        }}
                    >
                        <Label className="text-sm font-semibold text-gray-700">Password</Label>

                        <div className="relative flex items-center">
                            <Input
                                type={isShowPassword ? 'text' : "password"}
                                className="p-3 border rounded-lg focus:ring-2 focus:ring-blue-500 w-full pr-10"
                                placeholder="Your Password"
                            />

                            <button
                                type="button"
                                onClick={() => setIsShowPassword(!isShowPassword)}
                                className="absolute right-3 text-xl"
                            >
                                {isShowPassword ? <IoEyeOffOutline /> : <IoEyeOutline />}
                            </button>
                        </div>

                        <Description className="text-[10px] text-gray-500">
                            Min 8 chars, 1 uppercase, 1 number
                        </Description>
                    </TextField>

                    {/* Buttons */}
                    <div className="flex gap-3 mt-4">
                        <Button
                            type="submit"
                            className="flex-1 bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 rounded-lg flex items-center justify-center gap-2 transition-all active:scale-95"
                        >
                            <Check size={20} />
                            Sign Up
                        </Button>
                        <Button type="reset" variant="secondary">
                            Reset
                        </Button>
                    </div>

                    {/* Or*/}
                    <div className="relative flex items-center py-2">
                        <div className="flex-grow border-t border-gray-200"></div>
                        <span className="flex-shrink mx-4 text-gray-400 text-xs uppercase">Or</span>
                        <div className="flex-grow border-t border-gray-200"></div>
                    </div>

                    {/* Google signIn button */}
                    <Button
                        onPress={async () => {
                            await authClient.signIn.social({
                                provider: "google",
                                callbackURL: "/",
                            });
                        }}
                        className="w-full bg-white border border-gray-300 text-gray-700 py-3 rounded-lg flex items-center justify-center gap-2"
                    >
                        <IoLogoGoogle className="text-xl" />
                        Sign In with Google
                    </Button>

                    {/* Go to register page */}
                    <p className="text-center text-sm text-gray-600 mt-2">
                        Don't have an account?{" "}
                        <button
                            type="button"
                            onClick={() => router.push('/signup')}
                            className="text-blue-600 font-bold hover:underline"
                        >
                            Register here
                        </button>
                    </p>
                </Form>
            </div>
        </div>
    );
};


export default SignInPage;