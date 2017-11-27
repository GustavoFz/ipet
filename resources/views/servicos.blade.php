<a class="btn waves-effect waves-light modal-trigger black-text" href="#modal-servico">
    Solicitar uma Serviço
</a>
@if($servicos->isNotEmpty())
    Serviços: <br>
    <table border="1px solid" style="text-align: center;">
        <thead>
        <th>ID</th>
        <th>Tipo</th>
        <th>Animal atendido</th>
        <th>Solicitante</th>
        <th>Status</th>
        <th>Ação</th>
        </thead>
        @foreach($servicos as $servico)
            <tbody>
            <td>{{$servico->id}}</td>
            <td>{{$servico->tipo}}</td>
            <td>{{$servico->animal->nome}}</td>
            <td>{{$servico->user->nome}}</td>
            <td>{{$servico->status}}</td>
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
