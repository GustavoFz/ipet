<!-- Botão add -->
<div class="fixed-action-btn horizontal">
    <a class="btn-floating btn-large waves-effect waves-light red modal-trigger" href="#modal-servico">
        <i class="large material-icons">add</i>
    </a>
</div>

<div class="row">
    <div class="col s8">
        @if(Auth::user()->servicos()->count() > 0)
        <ul class="collapsible" data-collapsible="accordion">

            @foreach(Auth::user()->servicos as $servico)
            <li>
            <div class="collapsible-header"><i class="material-icons">pets</i>{{$servico->status}}</div>
                <div class="collapsible-body">
                    <span><b>Nome: </b>{{$animal->nome}}</span> <br>
                    <span><b>Idade: </b>{{$animal->idade}}</span> <br>
                    <span><b>Espécie: </b>{{$animal->especie}}</span> <br>
                    @if($animal->servicos->isNotEmpty())
                        <span><b>Serviços: </b> Esse animal já foi atendido {{$animal->servicos->count()}} vezes</span> <br>
                        @forelse($animal->servicos as $servico)
                            <ul class="collection">
                              <li class="collection-item">{{$loop->iteration}} / </li>
                            </ul>
                        @empty
                            Não há servicos
                        @endforelse
                    @else
                        Não há serviços
                    @endif
                </div>
            </li>
            @endforeach
        </ul>
        @endif
    </div>
</div>

<!-- /Botão add -->
@if(Auth::user()->servicos()->count() > 0)
    Serviços: <br>
    <table border="1px solid" style="text-align: center;">
        <thead>
        <th>ID</th>
        <th>Tipo</th>
        <th>Animal atendido</th>
        <th>Status</th>
        <th>Ação</th>
        </thead>
        @foreach(Auth::user()->servicos as $servico)
            <tbody>
            <td>{{$servico->id}}</td>
            <td>{{$servico->tipo}}</td>
            <td>{{$servico->animal->nome}}</td>
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


  <script type="text/javascript">
      $(document).ready(function(){
        $('.collapsible').collapsible();
      });
  </script>
