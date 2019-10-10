//Funciones para generar los modulos de la pagina admin
$('#paginas').click(function () { 
    $('#tituloModulo').html('Contenido Archivos');
    $('#contenidoModulo').html(`
    <!-- Page Heading -->

    <div class="d-sm-flex align-items-center justify-content-between mb-4 mt-4">
      <h1 class="h3 mb-0 text-gray-800">Archivos</h1>
      <a class="d-none d-sm-inline-block btn btn-sm btn-black shadow-sm" data-toggle="modal" data-target="#modalArchivo"><i class="fa fa-download fa-sm text-white-50"></i> Generate Archivos</a>
    </div>

    <!-- Content Row -->

    <div class="card  bordered-black">
      <!-- Content Row -->
          <div id="" class="d-flex justify-content-center align-items-center">
            <div class="" style="width: 4rem; height: 4rem;" role="status">
              <span class="sr-only">Cargando...</span>
            </div>  
          </div> 
        <div class="" id="crearArchivos">
                                        
        </div>
    </div>
    `);
    
}); 