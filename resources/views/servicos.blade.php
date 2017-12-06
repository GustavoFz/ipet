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
            <div class="collapsible-header"><i class="material-icons">pets</i>{{$servico->animal->nome}} - {{$servico->status}}</div>
                <div class="collapsible-body">
                    <span><b>Usuário: </b>{{$servico->user->name}}</span> <br>
                    <span><b>Animal atendido: </b>{{$servico->animal->nome}}</span> <br>
                    <span><b>Serviços feitos: </b></span> <br>
                    @foreach($servico->atendimentos as $atendimento)
                        {{$atendimento->tipo->tipo}}
                    @endforeach
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
