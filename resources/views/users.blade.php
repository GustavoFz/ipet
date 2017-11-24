@foreach($users as $user)
	<p>{{$user->id}}</p>
	<p>{{$user->nome}}</p>

	@if($user->animais()->get()->isNotEmpty())
		Animais: 
		@foreach($user->animais()->get() as $animal)
			<a href="{{route('animal.show.one', $animal->id)}}">{{$animal->nome}}</a>, 
		@endforeach
	<br>
	@else
		Animais: Não há animais <br>
	@endif
	
	@if($user->servicos()->get()->isNotEmpty())
		Serviços: <br>
		<table border="1px solid" style="text-align: center;">
			<thead>
				<th>ID</th>
				<th>Tipo</th>
				<th>Animal atendido</th>
				<th>Status</th>
				<th>Ação</th>
			</thead>
			@foreach($user->servicos()->get() as $servico)
			<tbody>
				<td>{{$servico->id}}</td>
				<td>{{$servico->tipo}}</td>
				<td>{{$servico->animal->nome}}</td>
				<td>{{$servico->status}}</td>
				<td><a href="{{route('servico.show.one', $servico->id)}}">Ver detalhes</a></td>
			</tbody>
			@endforeach
		</table>

	@else
		<br>
		Serviços: Não há serviços<br>
	@endif
	<br>
	<hr>
@endforeach