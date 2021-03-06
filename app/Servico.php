<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Servico extends Model
{
	protected $fillable = [
		'tipo', 'id_user', 'id_animal', 'status'
	];

	public function user(){
		return $this->hasOne(User::class,'id', 'id_user');
	}

	public function animal(){
		return $this->hasOne(Animal::class,'id', 'id_animal');
	}

	public function atendimentos(){
		return $this->hasMany(Servico_Ponte_TipoServico::class,'id_servico', 'id');
	}

	public function data(){
		return "dataTESTE";
	}
}
