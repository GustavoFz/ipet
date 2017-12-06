<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Servico;
use App\Servico_Ponte_TipoServico;
use App\TipoServico;


class ServicoController extends Controller
{
    public function create(){

    	// IMPLEMENTAR PARA PEGAR O ID DO DONO DO CACHORRO AUTOMATICAMENTE
    	// EXEMPLO, "id_user = Cachorro->id_user", ja pega o dono do cachorro pelo id do cachorro
    	// Já que a tabela cachorro ja armazena essa informação do user
	//dd($dados);
	Servico::create($dados);
	}

	public function save(Request $req){
        $dados = $req->all();
        //$dados['status'] => 'PENDENTE';

        $idServico = Servico::create($dados);
        dd($idServico);
        Servico_Ponte_TipoServico::create([

        ]);
        }

	public function show(){
	$servicos = Servico::all();
	return view('servicos', compact('servicos'));
	}

	public function teste(){
		$pontes = Servico_Ponte_TipoServico::all();

		foreach($pontes as $ponte){
			echo "Serviço <br>";
			echo $ponte->servico->user->name."<br>";
			echo $ponte->tipo->tipo."<br>";
			echo "<hr>";
		}
		echo "---------- SERVICOS ----------<br><br>";
		$servicos = Servico::all();

		foreach($servicos as $servico){
			echo "Serviço <br>";
			echo $servico->user->name."<br>";
			echo "<b>Tipos de serviço:</b><br>";
				foreach($servico->atendimentos as $atendimento){

					echo $atendimento->tipo->tipo."<br>";
				}
			echo "<hr>";
		}
	}

	public function addTipoServico($idServico, Request $req){
		$servico = Servico::find($idServico);
		$tipo = TipoServico::find($req->id_tipoServico);
		$ponte = new Servico_Ponte_TipoServico;
		$ponte->id_servico = $idServico;
		$ponte->id_tipoServico = $req->id_tipoServico;
		$ponte->save();
	}

	public function showOne($id){

		if(Servico::find($id)){
			$servico = Servico::find($id);
			echo "Mostrando o servico N° ".$id."<br>";
			echo "ID: ".$servico->id."<br>";
			echo "Usuario que contratou: ";
			echo $servico->user->name."<br>";
			echo $servico->tipo."<br>";
			echo $servico->animal->nome."<br>";
				echo "<b>Atendimentos: </b><br>";
			foreach($servico->atendimentos as $atendimento){

					echo $atendimento->tipo->tipo."<br>";
				}
			echo "<hr>";
		} else {
			echo "Não existe servico com ID N° ".$id;
		}
	}

	public function update(Request $req ,$id){
        $dados = $req->all();
        $dados['status'] = 'ATENDIDO';

        if(Servico::find($id)){
            Servico::find($id)->update($dados);
            echo "Atualizando o servico N° ".$id;
        } else {
            echo "Não existe servico com ID N° ".$id;
        }
        return redirect()->back();
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
