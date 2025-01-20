<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;

class AuthController extends Controller
{
    public function Register(Request $request)
    {

        $validatedData = $request->validate([
            'role_id' => 'required|integer',
            'name' => 'required|string|max:255',
            'email' => 'required|email|unique:users,email',
            'password' => 'required|string|min:8|confirmed',
        ]);
        // dd($validatedData);

        $user = User::create([
            'role_id' => $validatedData['role_id'],
            'name' => $validatedData['name'],
            'email' => $validatedData['email'],
            'password' => Hash::make($validatedData['password']),
        ]);

        return response()->json([
            'message' => 'User created successfully',
            'data' => $user,
        ], 201);
    }
    public function Login(Request $request)
    {
        // Validate the incoming request
        $validatedData = $request->validate([
            'email' => 'required|email',
            'password' => 'required|string|min:8',
        ]);

        // Find the user by email
        $user = User::where('email', $validatedData['email'])->first();

        // Check if the user exists and the password matches
        if (!$user || !Hash::check($validatedData['password'], $user->password)) {
            return response()->json([
                'message' => 'Invalid email or password',
            ], 401);
        }

        // Generate a token (you can use Sanctum or Passport here)
        // $token = $user->createToken('auth_token')->plainTextToken;

        return response()->json([
            'message' => 'Login successful',
            'data' => [
                'user' => $user,
                // 'token' => $token,
            ],
        ], 200);
    }
}
