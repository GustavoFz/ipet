<!-- Botão add -->
<div class="fixed-action-btn horizontal">
    <a class="btn-floating btn-large waves-effect waves-light black modal-trigger" href="#modal-animal">
        <i class="large material-icons">add</i>
    </a>
</div>
<!-- /Botão add -->


@if($animais->isNotEmpty())
            <h2 class="header">Meu animais</h2>

    @foreach($animais as $animal)
        <div class="col s4">
            <div class="card horizontal">
                <div class="card-image">
                    <img src="https://lorempixel.com/100/190/nature/6">
                </div>
                <div class="card-stacked">
                    <div class="card-content">
                        <h5>Id: {{$animal->id}}</h5>
                        <h5>Nome: {{$animal->nome}}</h5>
                        <h5>Especie: {{$animal->especie}}</h5>
                        <h5>Idade:{{$animal->idade}}</h5>
                        <h5>Dono: {{$animal->user->nome}}</h5>
                        <h5>Serviços feitos:</h5>
                    </div>
                </div>
            </div>
        </div>
    @endforeach
@else
    Animais: Não há animais<br>
@endif

