<h4 class="center-align">Meu Perfil</h4>
<form action="{{route('animal.save')}}" method="post">
    {{ csrf_field() }}
    <div class="row">
        <div class="input-field col s12">
            <i class="material-icons prefix">person</i>
            <input id="nome" name="nome" type="text" class="validate">
            <label for="nome">Nome</label>
        </div>
        <div class="input-field col s12">
            <i class="material-icons prefix">mail</i>
            <input id="email" name="email" type="email" class="validate">
            <label for="email">E-mail</label>
        </div>
        <div class="input-field col s12">
            <i class="material-icons prefix">person</i>
            <input id="password" name="password" type="password" class="validate">
            <label for="password">Senha</label>
        </div>
    </div>
    <div class="row">
        <div class="col s12">
            <button class="btn waves-effect waves-light right black yellow-text" type="submit"
                    name="action">
                Editar
                <i class="material-icons right">create</i>
            </button>
        </div>
    </div>
</form>
