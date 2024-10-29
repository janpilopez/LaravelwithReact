<?php

use App\Http\Controllers\Api\Admin\CategoriaController;
use App\Http\Controllers\Api\Admin\UserController;
use App\Http\Controllers\Api\AuthController;
use App\Http\Controllers\Api\Client\EmpresaController;
use App\Http\Controllers\Api\Admin\EmpresaController as AdminEmpresaController;

use App\Http\Controllers\Api\FrontController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

Route::get('/user', function (Request $request) {
    return $request->user();
})->middleware('auth:sanctum');


Route::prefix('v1')->group( function () {
    //Rutas Publicas
    Route::get('/public/{slug}', [FrontController::class, 'categoria']);

    Route::post('/auth/register', [AuthController::class, 'register']);
    Route::post('/auth/login', [AuthController::class, 'login']);

    //Rutas Privadas
    Route::group(['middleware' => 'auth:sanctum'], function () {
        //::auth
        Route::post('/auth/logout', [AuthController::class, 'logout']);

        //::rol client
        Route::apiResource('/client/empresa', EmpresaController::class ); //ApiResource: index,listado,store,update,delete

        //::rol admin
        Route::apiResource('/admin/empresa', AdminEmpresaController::class ); 
        Route::apiResource('/admin/categoria', CategoriaController::class ); 
        Route::apiResource('/admin/user', UserController::class ); 



    });

});