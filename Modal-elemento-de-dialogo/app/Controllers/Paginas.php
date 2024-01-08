<?php

// Define a classe Paginas que estende a classe Controller
class Paginas extends Controller
{

    // Método responsável por exibir a página inicial
    public function index()
    {
        $this->view('index');
    }

}

?>