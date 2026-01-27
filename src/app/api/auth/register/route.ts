import { NextResponse } from 'next/server';
import bcrypt from 'bcryptjs';
import connectDB from '@/lib/db';
import User from '@/models/User';

export async function POST(req: Request) {
    try {
        const { full_name, email, password } = await req.json();

        if (!full_name || !email || !password) {
            return NextResponse.json(
                { detail: 'Please provide all fields' },
                { status: 400 }
            );
        }

        await connectDB();

        const userExists = await User.findOne({ email });

        if (userExists) {
            return NextResponse.json(
                { detail: 'User already exists' },
                { status: 400 }
            );
        }

        // Hash password
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);

        // Create user
        const user = await User.create({
            full_name,
            email,
            password: hashedPassword,
        });

        if (user) {
            return NextResponse.json({
                _id: user.id,
                full_name: user.full_name,
                email: user.email,
                detail: "User Registered Successfully"
            });
        } else {
            return NextResponse.json(
                { detail: 'Invalid user data' },
                { status: 400 }
            );
        }
    } catch (error: any) {
        console.error("Register Error:", error);
        return NextResponse.json(
            { detail: 'Server Error' },
            { status: 500 }
        );
    }
}
