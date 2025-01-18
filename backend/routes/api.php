<?php

use App\Http\Controllers\AuthController;
use App\Http\Controllers\SubjectController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

Route::get('/user', function (Request $request) {
    return $request->user();
})->middleware('auth:sanctum');

Route::post('/register', [AuthController::class, 'Register']);
Route::post('/login', [AuthController::class, 'Login']);

// Subject routes
Route::controller(SubjectController::class)->prefix('subjects')->group(function () {
    Route::post('/add', 'create');
    Route::get('/{id?}', 'get');
    Route::put('/{id}', 'update');
    Route::delete('/{id}', 'delete');
});
