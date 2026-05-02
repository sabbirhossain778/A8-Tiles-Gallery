"use client";
import { authClient } from "@/lib/auth-client";
import { Check } from "@gravity-ui/icons";
import { Button, Description, Form, Input, Label, TextField } from "@heroui/react";
import { toast } from 'react-toastify';

const SignInPage = () => {
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
                        name="password"
                        type="password"
                        validate={(value) => {
                            if (value.length < 8) return "Min 8 characters required";
                            if (!/[A-Z]/.test(value)) return "Need at least one uppercase letter";
                            if (!/[0-9]/.test(value)) return "Need at least one number";
                            return null;
                        }}
                    >
                        <Label className="text-sm font-semibold text-gray-700">Password</Label>
                        <Input
                            type="password"
                            className="p-3 border rounded-lg focus:ring-2 focus:ring-blue-500"
                            placeholder="Your Password"
                        />
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
                </Form>
            </div>
        </div>
    );
};

export default SignInPage;