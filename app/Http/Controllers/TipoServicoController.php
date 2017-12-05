<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\TipoServico;

class TipoServicoController extends Controller
{
    public function create(){
    	return view ('teste');
    }

    public function save(Request $req){
	$dados = $req->all();

	TipoServico::create($dados);
	}

	
}
