<?php

namespace App\Http\Controllers\Api\Admin;

use App\Http\Controllers\Controller;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Log;

class UserController extends Controller
{
    public function index()
    {
        //si queremos restringir la informacion solo debemos ver el rol de usuario y no darle acceso segun su rol
        $data = User::get([ 'id', 'name']);
        return response()->json($data, 200);
    }
    public function show($id)
    {
        $data = User::find($id);
        return response()->json($data, 200);
    }

    public function store()
    {
        
    }

    public function update(Request $request, $id)
    {
        Log::info(json_encode($request));
        $data = User::find($id);
        $data->aprobado = $request->aprobado;
        $data->name = $request->name ?? $data->name;
        // $data->fill($request);
        $data->save();
        return response()->json($data, 200);
    }


}
