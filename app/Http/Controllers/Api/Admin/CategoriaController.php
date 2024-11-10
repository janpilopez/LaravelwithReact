<?php

namespace App\Http\Controllers\Api\Admin;

use App\Http\Controllers\Controller;
use App\Models\Categoria;
use Illuminate\Http\Request;
use Illuminate\Support\Str;

class CategoriaController extends Controller
{
    public function index()
    {
        //si queremos restringir la informacion solo debemos ver el rol de usuario y no darle acceso segun su rol
        $data = Categoria::orderBy('orden')->get([ 'id', 'nombre']);
        return response()->json($data, 200);
    }
    public function show($id)
    {
        $data = Categoria::find($id);
        return response()->json($data, 200);
    }

    public function store(Request $request)
    {
        //validacion
        $data = new Categoria($request->all());
        if ($request->urlfoto) {
            $img = $request->urlfoto;

            $folderPath = '/img/categoria/';
            $image_parts = explode(';base64,', $img);
            $image_type_aux = explode('image/', $image_parts[0]);
            $image_type = $image_type_aux[1];
            $image_base64 = \base64_decode($image_parts[1]);
            $file = $folderPath . Str::slug($request->nombre).'.'.$image_type;
            file_put_contents(public_path($file), $image_base64);
            $data->urlfoto = Str::slug($request->nombre).'.'.$image_type;
        }
        $data->slug = Str::slug($request->nombre);
        $data->save();
        return response()->json($data, 200);
    }

    public function update(Request $request, $id)
    {
        $data = Categoria::find($id);
        $data->fill($request);
        if ($request->urlfoto) {
            $img = $request->urlfoto;

            $folderPath = '/img/categoria/';
            $image_parts = explode(';base64,', $img);
            $image_type_aux = explode('image/', $image_parts[0]);
            $image_type = $image_type_aux[1];
            $image_base64 = \base64_decode($image_parts[1]);
            $file = $folderPath . Str::slug($request->nombre).'.'.$image_type;
            file_put_contents(public_path($file), $image_base64);
            $data->urlfoto = Str::slug($request->nombre).'.'.$image_type;
        }
        $data->slug = Str::slug($request->nombre);
        $data->save();
        return response()->json($data, 200);
    }

    public function destroy($id)
    {
        $data = Categoria::find($id);
        $data->delete();

        return response()->json('Borrado', 200);
    }
}
