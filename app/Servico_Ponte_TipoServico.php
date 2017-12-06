<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use App\Servico;
use App\TipoServico;

class Servico_Ponte_TipoServico extends Model
{
	protected $fillable = [
		'id_servico', 'id_tipoServico',
	];

	public function servico(){
		return $this->hasOne(Servico::class,'id', 'id_servico');
	}

	public function tipo(){
		return $this->hasOne(TipoServico::class,'id', 'id_tipoServico');
	}

	public $timestamps = false;
}
