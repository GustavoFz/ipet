    
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
    <br>
    <hr>
