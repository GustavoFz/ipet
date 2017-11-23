<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\User;

class UserController extends Controller
{

    public function create(){
    	$dados = [];
    	//dd($dados);
    	User::create($dados);
    	}

    public function save(Request $req){
    	$dados = $req->all();
    	//dd($dados);
    	User::create($dados);
    	}

	public function show(){
		
		$users = User::all();
		return view('users', compact('users'));
    }

    public function showOne($id){

		if(User::find($id)){
			$usuario = User::find($id);
			echo "ID: ".$usuario->id."<br>";
			echo "Nome: ".$usuario->nome."<br>";
			echo "E-Mail: ".$usuario->email."<br>";

			$animais = $usuario->animais()->get();
			if($animais->isNotEmpty()){
				echo "<br>";
				echo "<strong>Animais: </strong><br>";
				foreach ($animais as $animal) {
					echo "Nome: ".$animal->nome."<br>";
					echo "Espécie: ".$animal->especie."<br>";
					echo "Idade: ".$animal->idade."<br>";
				}
			}
			$servicos = $usuario->servicos()->get();
			if($servicos->isNotEmpty()){
				echo "<strong><br>Serviços: </strong>";
				foreach ($servicos as $servico) {
					echo "<br>Tipo de serviço: ";
					echo $servico->tipo."<br>";
					echo "Animal atendido: ";
					echo $servico->animal->nome;
				}
			}
			echo "<hr>";
		} else {
			echo "Não existe usuário com ID N° ".$id;
		}
    }

	public function update(Request $req ,$id){
		$dados = $req->all();

		if(User::find($id)){
			User::find($id)->update($dados);
			echo "Atualizando o usuário N° ".$id;
		} else {
			echo "Não existe usuário com ID N° ".$id;
		}
	}

	public function delete($id){
		//Tenta encontrar com o ID, se encontrar deleta, se não da erro.
		if(User::find($id)){
			User::find($id)->delete();
			echo "Deletado o usuário N° ".$id;
		} else {
			echo "Não existe usuário com ID N° ".$id;
		}
	}
}
