<?php

namespace App\Http\Controllers\Auth;

use App\User;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Validator;
use Illuminate\Foundation\Auth\RegistersUsers;
use Carbon\Carbon;

class RegisterController extends Controller
{
    /*
    |--------------------------------------------------------------------------
    | Register Controller
    |--------------------------------------------------------------------------
    |
    | This controller handles the registration of new users as well as their
    | validation and creation. By default this controller uses a trait to
    | provide this functionality without requiring any additional code.
    |
    */

    use RegistersUsers;

    /**
     * Where to redirect users after registration.
     *
     * @var string
     */
    protected $redirectTo = '/home';

    /**
     * Create a new controller instance.
     *
     * @return void
     */
    public function __construct()
    {
        $this->middleware('guest');
    }

    /**
     * Get a validator for an incoming registration request.
     *
     * @param  array  $data
     * @return \Illuminate\Contracts\Validation\Validator
     */
    protected function validator(array $data)
    {

        return Validator::make($data, [
            'name' => 'required|string|max:255',
            'email' => 'required|string|email|max:255|unique:users',
            'password' => 'required|string|min:6|confirmed',
            'cpf' => 'required',
            'nascimento' => 'required',
        ], [
            'name.required' => 'Informe seu nome!',
            'email.required' => 'Informe seu endereço de e-mail!',
            'email.unique' => 'Esse e-mail já está cadastrado!',
            'password.required' => 'Digite sua senha!',
            'password.min' => 'Sua senha deve ter pelo menos 6 caracteres!',
            'password.confirmed' => 'A senha deve ser igual à confirmação!',
            'cpf.required' => 'Informe seu CPF!',
            'nascimento.required' => 'Informe sua data de nascimento!',
        ]);
    }

    /**
     * Create a new user instance after a valid registration.
     *
     * @param  array  $data
     * @return \App\User
     */
    protected function create(array $data)
    {
            if(isset($data['sexo']) == "on"){
              $data['sexo'] = "Feminino";
            }
            else {
              $data['sexo'] = "Masculino";
            }

            if(!isset($data['celular'])){
              $data['celular'] = "";
            }

            if(!isset($data['telefone'])){
              $data['telefone'] = "";
            }

        $data['nascimento'] = Carbon::parse($data['nascimento']);
        return User::create([
            'name' => $data['name'],
            'email' => $data['email'],
            'password' => bcrypt($data['password']),
            'cpf' => $data['cpf'],
            'sexo' => $data['sexo'],
            'nascimento' => $data['nascimento'],
        ]);
    }
}
