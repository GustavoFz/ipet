
<a class="btn waves-effect waves-light black-text" href="#">
    Adicionar Animal
</a>
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


    <div class="section">
        <div class="row">
            <div class="col s12">
                <div class="card-panel">
                    <h4 class="header2">Cadastre um Animal</h4>
                    <div class="row">
                        <form class="col s12">
                            <div class="row">
                                <div class="input-field col s12">
                                    <input id="name" type="text" style="cursor: pointer;">
                                    <label for="first_name">Nome</label>
                                </div>
                            </div>
                            <div class="row">
                                <div class="input-field col s12">
                                    <textarea id="message" class="materialize-textarea"></textarea>
                                    <label for="message">Message</label>
                                </div>
                                <div class="row">
                                    <div class="input-field col s12">
                                        <button class="btn cyan waves-effect waves-light right" type="submit" name="action">
                                            Submit
                                            <i class="material-icons right">send</i>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
