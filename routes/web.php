<?php

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function () {return view('welcome');} );
Route::get('/index', function () {return view('index');} );
Route::get('/home', function () {return view('home');} );

/*ROTAS DE USUÁRIO*/
Route::post('/user/save',['uses'=>'UserController@save']);
Route::get('/user/create',['uses'=>'UserController@create']);
Route::get('/users',['uses'=>'UserController@show']);
Route::get('/user/show/{id}',['uses'=>'UserController@showOne']);
Route::post('/user/update/{id}',['uses'=>'UserController@update']);
Route::get('/user/delete/{id}',['uses'=>'UserController@delete']);

/*ROTAS DE ANIMAL*/
Route::post('/animal/save',['uses'=>'AnimalController@save']);
Route::get('/animal/create',['uses'=>'AnimalController@create']);
Route::get('/animals',['uses'=>'AnimalController@show']);
Route::get('/animal/show/{id}',['uses'=>'AnimalController@showOne']);
Route::post('/animal/update/{id}',['uses'=>'AnimalController@update']);
Route::get('/animal/delete/{id}',['uses'=>'AnimalController@delete']);

/*ROTAS DE SERVICO*/
Route::post('/servico/save',['uses'=>'ServicoController@save']);
Route::get('/servico/create',['uses'=>'ServicoController@create']);
Route::get('/servicos',['uses'=>'ServicoController@show']);
Route::get('/servico/show/{id}',['uses'=>'ServicoController@showOne']);
Route::post('/servico/update/{id}',['uses'=>'ServicoController@update']);
Route::get('/servico/delete/{id}',['uses'=>'ServicoController@delete']);

