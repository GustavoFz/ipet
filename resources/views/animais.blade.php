<!-- Botão add -->
<div class="fixed-action-btn horizontal">
    <a class="btn-floating btn-large waves-effect waves-light black modal-trigger" href="#modal-animal">
        <i class="large material-icons">add</i>
    </a>
</div>
<!-- /Botão add -->

<div class="col s5">
    <h2 class="header">Meu animais</h2>
    <div class="card horizontal">
        <div class="card-image">
            <img src="https://lorempixel.com/100/190/nature/6">
        </div>
        <div class="card-stacked">
            <div class="card-content">
                <h5>Nome:</h5>
                <h5>Especie:</h5>
                <h5>Idade:</h5>
                <h5>Serviços feitos:</h5>
            </div>
        </div>
    </div>
</div>
@if($animais->isNotEmpty())
    Animais: <br>
    <table border="1px solid" style="text-align: center;">
        <thead>
        <th>ID</th>
        <th>Nome</th>
        <th>Espécie</th>
        <th>Idade</th>
        <th>Dono</th>
        <th>Ação</th>
        </thead>
        @foreach($animais as $animal)
            <tbody>
            <td>{{$animal->id}}</td>
            <td>{{$animal->nome}}</td>
            <td>{{$animal->especie}}</td>
            <td>{{$animal->idade}}</td>
            <td>{{$animal->user->nome}}</td>
            <td>
                <a href="{{route('animal.show.one', $animal->id)}}">Ver detalhes</a> <br>
                <form action="{{route('animal.update', $animal->id)}}" method="POST">
                    <button type="submit">Editar animal</button>
                </form>
            </td>
            </tbody>
        @endforeach
    </table>

@else
    <br>
    Animais: Não há animais<br>
@endif

