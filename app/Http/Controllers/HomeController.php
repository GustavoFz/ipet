<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\TipoServico;
use App\Animal;
use App\User;
use Auth;

class HomeController extends Controller
{
    /**
     * Create a new controller instance.
     *
     * @return void
     */
    public function __construct()
    {
        $this->middleware('auth');
    }

    /**
     * Show the application dashboard.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {   

        $tipos = TipoServico::all();
        return view('principal.home', compact('tipos'));
    }
}
