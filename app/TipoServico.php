<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class TipoServico extends Model
{
	protected $fillable = [
		'tipo', 'descricao',
	];
	
	public $timestamps = false;
}
