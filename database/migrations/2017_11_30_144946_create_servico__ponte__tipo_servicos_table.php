<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateServicoPonteTipoServicosTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('servico__ponte__tipo_servicos', function (Blueprint $table) {
            $table->increments('id');
            $table->integer('id_servico')->unsigned();
            $table->foreign('id_servico')->references('id')->on('servicos')->onDelete('cascade');
            $table->integer('id_tipoServico')->unsigned();
            $table->foreign('id_tipoServico')->references('id')->on('tipo_servicos')->onDelete('cascade');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('servico__ponte__tipo_servicos');
    }
}
