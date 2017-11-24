    
    @if($animais->isNotEmpty())
        Serviços: <br>
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
                    <a href="{{route('servico.show.one', $servico->id)}}">Ver detalhes</a> <br>
                    <form action="{{route('servico.update', $servico->id)}}" method="POST">
                        <button type="submit">Atualizar status</button>
                    </form>
                </td>
            </tbody>
            @endforeach
        </table>

    @else
        <br>
        Serviços: Não há serviços<br>
    @endif
    <br>
    <hr>
