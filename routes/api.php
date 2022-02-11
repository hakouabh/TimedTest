<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\AuthController;
use App\Http\Controllers\SubjectController;

Route::post('login', [AuthController::class, 'login']);
Route::get('logout', [AuthController::class, 'logout']);

Route::group(['prefix' => 'subjects'], function()
{
    Route::get('/get', [SubjectController::class, 'get'])->middleware('auth:api');
});