<?php

namespace App;

use Illuminate\Notifications\Notifiable;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Silber\Bouncer\Database\HasRolesAndAbilities;

class User extends Authenticatable
{
    use Notifiable;
    use HasRolesAndAbilities;
    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'nome', 'email', 'password', 'cpf', 'sexo', 'telefone', 'celular', 'nascimento', 'name'
    ];

    /**
     * The attributes that should be hidden for arrays.
     *
     * @var array
     */
    protected $hidden = [
        'password', 'remember_token',
    ];

    protected $dates = ['nascimento'];

    //O usuario pode ter varios animais
    public function animais(){
      return $this->hasMany(Animal::class, 'id_user', 'id');
  }

  public function servicos(){
      return $this->hasMany(Servico::class, 'id_user', 'id');
  }

  public function habilidades()
  {
      return $this->getAbilities();
  }

}
