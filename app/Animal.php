<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Animal extends Model
{
    protected $fillable = [
        'nome', 'especie', 'idade', 'id_user'
    ];

    //O animal pertence à um dono
    public function user(){
      return $this->belongsTo(User::class, 'id_user', 'id');
    }

    public function servicos(){
      return $this->hasMany(Servico::class, 'id_animal', 'id');
    }
}
