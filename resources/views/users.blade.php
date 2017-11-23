@foreach($users as $user)
	<p>{{$user->id}}</p>
	<p>{{$user->nome}}</p>

	@if($user->servicos()->get()->isNotEmpty())
		Animais: 
		@foreach($user->animais()->get() as $animal)
			{{$animal->nome.", "}}
		@endforeach
	<br>
	@else
		Animais: Não há animais
	@endif
	
	@if($user->servicos()->get()->isNotEmpty())
		Serviços: <br>
		<table border="1px solid" style="text-align: center;">
			<thead>
				<th>ID</th>
				<th>Tipo</th>
				<th>Animal atendido</th>
				<th>Status</th>
			</thead>
			<tbody>
		@foreach($user->servicos()->get() as $servico)
				<td>{{$servico->id}}</td>
				<td>{{$servico->tipo}}</td>
				<td>{{$servico->animal->nome}}</td>
				<td>{{$servico->status}}</td>
			</tbody>
		</table>
		@endforeach
	@else
		<br>
		Serviços: Não há serviços<br>
	@endif
	<br>
	<hr>
@endforeach
		

		