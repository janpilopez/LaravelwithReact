<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;
use Throwable;

class AuthController extends Controller
{
    public function register(Request $request)
    {
        $response = [ 'success' => false ];

        $validator = Validator::make($request->all(), [
            "name" => "required",
            "email" => 'required|email',
            'password' => 'required',
        ]);
        if ($validator->fails())
        {
            $response = [ "error" => $validator->errors()];
            return response()->json($response, 200);
        }

        $input = $request->all();
        $input['password'] = bcrypt($input['password']);

        $user = User::create($input);
        $user->assignRole('user');
        $response['success'] = true;
        $response['token'] = $user->createToken('app')->plainTextToken;
        return response()->json($response, 200);
    }

    public function login(Request $request)
    {
        $response = [ 'success' => false ];

        $validator = Validator::make($request->all(), [
            "email" => 'required|email',
            'password' => 'required',
        ]);
        if ($validator->fails())
        {
            $response = [ "error" => $validator->errors()];
            return response()->json($response, 200);
        }

        if (auth()->attempt(
            ['email' => $request->email,
                        'password' => $request->password])) 
        {
            $user = auth()->user();
            $user->hasRole('client');
            $response['token'] = $user->createToken('sesion')->plainTextToken;
        };

        $response['token'] = $user->createToken('app')->plainTextToken;
        $response['user'] = $user;
        $response['success'] = true;
        return response()->json($response, 200);
    }

    public function logout()
    {
        $response['success'] =false;
        try {
            auth()->user( )->tokens()->delete();
        } catch (Throwable $th) {
            return response()->json('HOLA');
        }

        $response = [
            'success' => true,
            'message' => 'Sesion Cerrada'
        ];

        return response()->json($response, 200);
    }
}
