<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Animal;

class AnimalController extends Controller
{
    public function create(){
    	$dados = [
    		'nome'=>'Lessie',
    		'especie'=>'cachorro',
    		'idade'=>10,
    		'id_user'=>3,
    	];

    	//dd($dados);
    	Animal::create($dados);
    }

    public function save(Request $req){
        $dados = $req->all();
        //dd($dados);
        Animal::create($dados);
        }

    public function show(){
    	
    	$animais = Animal::all();

    	foreach ($animais as $animal) {
    		echo $animal->id."<br>";
    		echo $animal->nome."<br>";
    		echo $animal->user->nome."<br>";
    		
    		$servicos = $animal->servicos()->get();
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
    	}
    }

	public function showOne($id){

		if(Animal::find($id)){
			$animal = Animal::find($id);
			echo "ID: ".$animal->id."<br>";
    		echo "Nome: ".$animal->nome."<br>";
    		echo "Dono: ".$animal->user->nome."<br>";

    		$servicos = $animal->servicos()->get();
    		if($servicos->isNotEmpty()){
    			echo "<strong><br>Serviços: </strong>";

    			foreach ($servicos as $servico) {
    			echo "<br>Tipo de serviço: ";
    			echo $servico->tipo."<br>";
    			}
    		}
			echo "<hr>";
		} else {
			echo "Não existe animal com ID N° ".$id;
		}
	}

    public function update(Request $req ,$id){
        $dados = $req->all();

        if(Animal::find($id)){
            Animal::find($id)->update($dados);
            echo "Atualizando o animal N° ".$id;
        } else {
            echo "Não existe animal com ID N° ".$id;
        }
    }

	public function delete($id){

		//Tenta encontrar com o ID, se encontrar deleta, se não da erro.
		if(Animal::find($id)){
			Animal::find($id)->delete();
			echo "Deletado o animal N° ".$id;
		} else {
			echo "Não existe animal com ID N° ".$id;
		}
		
		
	}
}
