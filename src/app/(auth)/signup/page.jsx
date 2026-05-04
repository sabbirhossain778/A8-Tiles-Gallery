"use client";
import { authClient } from "@/lib/auth-client";
import { Check } from "@gravity-ui/icons";
import { Button, Description, Form, Input, Label, TextField } from "@heroui/react";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { IoEyeOutline, IoEyeOffOutline, IoLogoGoogle } from "react-icons/io5";

import { toast } from 'react-toastify';

const SignUpPage = () => {
    const [isShowPassword, setIsShowPassword] = useState(false);
    const router = useRouter();
    const onSubmit = async (e) => {
        e.preventDefault();
        const formData = new FormData(e.currentTarget);
        const userData = Object.fromEntries(formData.entries());

        const { data, error } = await authClient.signUp.email({
            name: userData.name,
            email: userData.email,
            password: userData.password,
            image: userData.photoUrl
        });

        toast.dismiss();
        if (error) {
            toast.error(error.message);
        }

        if (data) {
            toast.success(`Success! Welcome ${userData.name}`);
            e.target.reset();
            router.push('/login')

            // setTimeout(() => {
            //     window.location.href = "/";
            // }, 500);
        }
    };

    return (
        <div className="flex flex-col items-center pt-10 min-h-screen bg-gray-50">
            <div className="bg-white p-4 md:p-8 rounded-2xl shadow-lg border border-gray-100">
                <h2 className="text-3xl font-semibold md:font-bold mb-6 text-center text-gray-800">Create an Account</h2>

                <Form className="flex w-90 md:w-96 flex-col gap-5" onSubmit={onSubmit}>
                    {/* Name Field */}
                    <TextField isRequired name="name">
                        <Label className="text-sm font-semibold text-gray-700">Name</Label>
                        <Input
                            className="p-3 border rounded-lg focus:ring-2 focus:ring-blue-500"
                            placeholder="Your Full Name"
                        />
                    </TextField>

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

                    {/* Photo URL Field */}
                    <TextField isRequired name="photoUrl" type="text">
                        <Label className="text-sm font-semibold text-gray-700">Photo Url</Label>
                        <Input
                            className="p-3 border rounded-lg focus:ring-2 focus:ring-blue-500 "
                            placeholder="Photo url"
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

                        <Description className="mt-2 text-[10px] text-gray-500">
                            Min 8 chars, 1 uppercase, 1 number
                        </Description>
                    </TextField>

                    {/* Buttons */}
                    <div className="flex flex-col mt-4 gap-4">
                        <Button
                            type="submit"
                            className="flex-1 bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 rounded-lg flex items-center justify-center gap-2 transition-all active:scale-95 w-full"
                        >
                            <Check size={20} />
                            Sign Up
                        </Button>
                        
                        <Button
                            type="reset"
                            variant="bordered"
                            className="px-6 py-3 border border-gray-300 text-gray-600 font-semibold rounded-lg hover:bg-gray-50 transition-all active:scale-95 w-full"
                        >
                            Reset
                        </Button>
                    </div>
                    {/* Or Divider */}
                    <div className="relative flex items-center py-2">
                        <div className="flex-grow border-t border-gray-200"></div>
                        <span className="flex-shrink mx-4 text-gray-400 text-xs uppercase">Or</span>
                        <div className="flex-grow border-t border-gray-200"></div>
                    </div>

                    {/* Google SignUp button */}
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
                        Sign Up with Google
                    </Button>

                    <div className="text-center text-sm text-gray-600">
                        Already have an account?{" "}
                        <button
                            onClick={() => router.push('/login')}
                            className="text-blue-600 font-bold hover:underline cursor-pointer"
                        >
                            Login here
                        </button>
                    </div>
                </Form>
            </div>
        </div>
    );
};

export default SignUpPage;