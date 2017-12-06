<!-- Botão add -->
<div class="fixed-action-btn horizontal">
    <a class="btn-floating btn-large waves-effect waves-light black modal-trigger" href="#modal-animal">
        <i class="large material-icons">add</i>
    </a>
</div>
<!-- /Botão add -->


<div class="row">
    <div class="col s8">
        @if(Auth::user()->animais()->count() > 0)
        <ul class="collapsible" data-collapsible="accordion">

            @foreach(Auth::user()->animais as $animal)
            <li>
            <div class="collapsible-header"><i class="material-icons">pets</i>{{$animal->nome}}</div>
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


  <script type="text/javascript">
      $(document).ready(function(){
        $('.collapsible').collapsible();
      });
  </script>

