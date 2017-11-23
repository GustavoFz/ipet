<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Servico;

class ServicoController extends Controller
{
    public function create(){

    	// IMPLEMENTAR PARA PEGAR O ID DO DONO DO CACHORRO AUTOMATICAMENTE
    	// EXEMPLO, "id_user = Cachorro->id_user", ja pega o dono do cachorro pelo id do cachorro
    	// Já que a tabela cachorro ja armazena essa informação do user
	$dados = [
		'tipo'=>'Cortar unha',
		'id_user'=>1,
		'id_animal'=>1,
		'status'=>'PENDENTE',
	];
	//dd($dados);
	Servico::create($dados);
	}

	public function save(Request $req){
        $dados = $req->all();
        //dd($dados);
        Servico::create($dados);
        }

	public function show(){
	$servicos = Servico::all();

	foreach ($servicos as $servico) {
		echo "ID: ".$servico->id."<br>";
		echo "Usuario que contratou: ";
		echo $servico->user->nome."<br>";
		echo $servico->tipo."<br>";
		echo $servico->animal->nome."<br>";
		echo "<hr>";
		}
	}

	public function showOne($id){

		if(Servico::find($id)){
			$servico = Servico::find($id);
			echo "Mostrando o servico N° ".$id."<br>";
			echo "ID: ".$servico->id."<br>";
			echo "Usuario que contratou: ";
			echo $servico->user->nome."<br>";
			echo $servico->tipo."<br>";
			echo $servico->animal->nome."<br>";
			echo "<hr>";
		} else {
			echo "Não existe servico com ID N° ".$id;
		}
	}

	public function update(Request $req ,$id){
        $dados = $req->all();

        if(Servico::find($id)){
            Servico::find($id)->update($dados);
            echo "Atualizando o servico N° ".$id;
        } else {
            echo "Não existe servico com ID N° ".$id;
        }
    }

	public function delete($id){
		//Tenta encontrar com o ID, se encontrar deleta, se não da erro.
		if(Servico::find($id)){
			Servico::find($id)->delete();
			echo "Deletado o servico N° ".$id;
		} else {
			echo "Não existe servico com ID N° ".$id;
		}
	}
}
