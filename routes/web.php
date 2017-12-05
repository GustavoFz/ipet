<?php

/*Rotas do site*/
Route::get('/', function () {return view('welcome');} );
Route::get('/index', function () {return view('principal.index');} );


Route::group(['middleware'=>'auth'],function(){
	
	/*DASHBOARD*/
	Route::get('/home', function () {return view('principal.home');} );


/*ROTAS DE USUÁRIO*/
Route::post('/user/save',['as'=>'user.save','uses'=>'UserController@save']);
Route::get('/user/create',['as'=>'user.create','uses'=>'UserController@create']);
Route::get('/users',['as'=>'users','uses'=>'UserController@show']);
Route::get('/user/show/{id}',['as'=>'user.show.one','uses'=>'UserController@showOne']);
Route::post('/user/update/{id}',['as'=>'user.update','uses'=>'UserController@update']);
Route::get('/user/delete/{id}',['as'=>'user.delete','uses'=>'UserController@delete']);

Route::get('/cadastro', function () {return view('conteudo.cadastro-animal');} );
Route::get('/perfil', function () {return view('conteudo.perfil');} );

/*ROTAS DE ANIMAL*/
Route::post('/animal/save',['as'=>'animal.save','uses'=>'AnimalController@save']);
Route::get('/animal/create',['as'=>'animal.create','uses'=>'AnimalController@create']);
Route::get('/animals',['as'=>'animals','uses'=>'AnimalController@show']);
Route::get('/animal/show/{id}',['as'=>'animal.show.one','uses'=>'AnimalController@showOne']);
Route::post('/animal/update/{id}',['as'=>'animal.update','uses'=>'AnimalController@update']);
Route::get('/animal/delete/{id}',['as'=>'animal.delete','uses'=>'AnimalController@delete']);

/*ROTAS DE SERVICO*/
Route::post('/servico/save',['as'=>'servico.save','uses'=>'ServicoController@save']);
Route::get('/servico/create',['as'=>'servico.create','uses'=>'ServicoController@create']);
Route::get('/servicos',['as'=>'servicos','uses'=>'ServicoController@show']);
Route::get('/servico/show/{id}',['as'=>'servico.show.one','uses'=>'ServicoController@showOne']);
Route::post('/servico/update/{id}',['as'=>'servico.update','uses'=>'ServicoController@update']);
Route::get('/servico/delete/{id}',['as'=>'servico.delete','uses'=>'ServicoController@delete']);
});
/*Rota de login*/
Auth::routes();

