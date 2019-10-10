//Funciones para generar los modulos de la pagina admin
$('#archivos').click(function () { 
    $('#tituloModulo').html('Contenido Archivos');
    $('#contenidoModulo').html(`
    <!-- Page Heading -->

    <div class="d-sm-flex align-items-center justify-content-between mb-4 mt-4">
      <h1 class="h3 mb-0 text-gray-800">Archivos</h1>
      <a class="d-sm-inline-block btn btn-sm btn-black shadow-sm" data-toggle="modal" data-target="#modalArchivoimgvdo"><i class="fa fa-download fa-sm text-white-50"></i> Subir Archivo</a>
      <a class="d-sm-inline-block btn btn-sm btn-black shadow-sm" data-toggle="modal" data-target="#modalArchivo"><i class="fa fa-download fa-sm text-white-50"></i> Generate Archivos</a>
    </div>

    <!-- Content Row -->

    <div class="card  bordered-black">
      <!-- Content Row -->
          <div id="carga1" class="d-flex justify-content-center align-items-center">
            <div class="spinner-grow" style="width: 4rem; height: 4rem;" role="status">
              <span class="sr-only">Cargando...</span>
            </div>  
          </div> 
        <div class="d-none" id="crearArchivos">
                                        
        </div>
    </div>
    `);
    obtenerArchivos();
    
}); 

$('#usuarios').click(function () { 
    $('#tituloModulo').html('Usuarios');
    $('#contenidoModulo').html(`
    <div class="d-sm-flex align-items-center justify-content-between mb-4 mt-4">
        <a class=" d-sm-inline-block btn btn-sm btn-black shadow-sm" data-toggle="modal" data-target="#modalArchivo"><i class="fa fa-download fa-sm text-white-50"></i>Crea Usuarios</a>
        <a class=" d-sm-inline-block btn btn-sm btn-black shadow-sm" data-toggle="modal" data-target="#modalArchivo"><i class="fa fa-download fa-sm text-white-50"></i>Crea Rol</a>
    </div>
    <div class="row">
        <div class="col-auto col-md-6 col-lg-12 col-xl-12">
            <table class="table table-borderless table-hover table-responsive-sm table-responsive-md table-responsive-lg">
                <thead>
                    <td><b>Usuario</b></td>
                    <td><b>Email</b></td>
                    <td><b>Contraseña</b></td>
                    <td><b>Rol</b></td>
                    <td><b>Acciones</b></td>
                </thead>
                <tbody id="tablaUser">
                <tr>
                    <td>admin</td>
                    <td>admin@gmail.com</td>
                    <td>asd.456admin</td>
                    <td>Administrador</td>
                    <td><a href="#" class="btn btn-light" title="Editar" style="font-size:10px;"><span class="fas fa-user-edit"></span></a></td>
                </tr>
                </tbody>
            </table>
        </div>
    </div>
    `);
    generarUsuarios();
});

$('#paginas').click(function () { 
    $('#tituloModulo').html('Contenido Paginas');
    $('#contenidoModulo').html(`
        <div class="d-sm-flex align-items-center justify-content-between mb-4 mt-4">
            <h1 class="h3 mb-0 text-gray-800">Paginas</h1>
            <a class=" d-sm-inline-block btn btn-sm btn-black shadow-sm" data-toggle="modal" data-target="#modalArchivo"><i class="fa fa-download fa-sm text-white-50"></i> Generate Paginas</a>
        </div>
    <div class="row mt-2">
        <div class="col-12 col-md-6 mx-auto col-xl-12">
            <table class="table table-borderless table-hover table-responsive-sm table-responsive-md table-responsive-lg">
                <thead>
                    <td><b>Nombre de página</b></td>
                    <td><b>Ver</b></td>
                    <td><b>Editar</b></td>
                    <td><b>Eliminar</b></td>
                </thead>
                <tbody>
                    <tr>
                        <td>Página 1</td>
                        <td><a href="#" class="btn btn-light" title="Ver" style="font-size:10px;"><span class="fa fa-eye"></span></a></td>
                        <td><a href="#" class="btn btn-light" title="Editar" style="font-size:10px;"><span class="fa fa-edit"></span></a></td>
                        <td><a href="#" class="btn btn-light" title="Eliminar" style="font-size:10px;"><span class="fa fa-trash-alt"></span></a></td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
    `);
}); 

$('#entradas').click(function () { 
    $('#tituloModulo').html('Contenido Entradas');
    $('#contenidoModulo').html(`
    <div class="d-sm-flex align-items-center justify-content-between mb-4 mt-4">
        <h1 class="h3 mb-0 text-gray-800">Post</h1>
        <a class=" d-sm-inline-block btn btn-sm btn-black shadow-sm" data-toggle="modal" data-target="#modalArchivo"><i class="fa fa-download fa-sm text-white-50"></i> Generate Entradas</a>
    </div>
    <div class="row mt-2">
        <div class="col-12 col-xl-12">
            <table class="table table-borderless table-hover table-responsive-sm table-responsive-md table-responsive-lg">
                <thead>
                    <td><b>Título</b></td>
                    <td><b>Autor</b></td>
                    <td><b>Fecha</b></td>
                    <td><b>Categoría</b></td>
                    <td><b>Acciones</b></td>
                </thead>
                <tbody>
                    <tr>
                        <td>Entrada 1</td>
                        <td>Admin</td>
                        <td>00/00/00</td>
                        <td>Categoría 1</td>
                        <td>
                            <a href="#" class="btn btn-light mx-2" title="Ver" style="font-size:10px;"><span class="fas fa-eye"></span></a>
                            <a href="#" class="btn btn-light mx-2" title="Editar" style="font-size:10px;"><span class="fas fa-edit"></span></a>
                            <a href="#" class="btn btn-light mx-2" title="Eliminar" style="font-size:10px;"><span class="fas fa-trash-alt"></span></a>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
    `);
}); 

$('#comentarios').click(function () { 
    $('#tituloModulo').html('Contenido Comentarios');
    $('#contenidoModulo').html(`
    <div class="d-sm-flex align-items-center justify-content-between mb-4 mt-4">
        <h1 class="h3 mb-0 text-gray-800"></h1>
        <a class=" d-sm-inline-block btn btn-sm btn-black shadow-sm" data-toggle="modal" data-target="#modalArchivo"><i class="fa fa-download fa-sm text-white-50"></i> Generate comentario</a>
    </div>
    <div class="row">
        <div class="col-12 col-xl-12 mx-auto">
            <table class="table table-borderless table-hover table-responsive-sm table-responsive-md table-responsive-lg">
                <thead>
                    <td><b>Usuario</b></td>
                    <td><b>Entrada</b></td>
                    <td><b>Comentario</b></td>
                    <td colspan="2"><b class="ml-auto mr-auto text-center">Acciones</b></td>
                </thead>
                <tbody>
                    <tr>
                        <td>Admin</td>
                        <td>Entrada 1</td>
                        <td>Lorem Ipsum</td>
                        <td>
                            <button type="button" class="btn btn-light mx-2"  style="font-size:10px;" title="Eliminar"><span class="fas fa-trash-alt"></span>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
    `);
}); 

$('#temas').click(function () { 
    $('#tituloModulo').html('Contenido Temas');
    $('#contenidoModulo').html(`
    <div class="d-sm-flex align-items-center justify-content-between mb-4 mt-4">
        <h1 class="h3 mb-0 text-gray-800"></h1>
        <a class=" d-sm-inline-block btn btn-sm btn-black shadow-sm" data-toggle="modal" data-target="#modalArchivo"><i class="fa fa-download fa-sm text-white-50"></i> Generate Temas</a>
    </div>
    <div class="row mt-2">
        <div class="col-12 col-md-6 col-xl-12 mx-auto">
            <table class="table table-borderless table-hover table-responsive-sm table-responsive-md table-responsive-lg">
                <thead>
                    <td><b>Nombre del tema</b></td>
                    <td><b>Descripción</b></td>
                    <td><b>Ver</b></td>
                    <td><b>Editar</b></td>
                    <td><b>Eliminar</b></td>
                </thead>
                <tbody>
                    <tr>
                        <td>Plantilla 1</td>
                        <td>Lorem ipsum</td>
                        <td><a href="#" class="btn btn-light" title="Ver" style="font-size:10px;"><span class="fas fa-eye"></span></a></td>
                        <td><a href="#" class="btn btn-light" title="Editar" style="font-size:10px;"><span class="fas fa-edit"></span></a></td>
                        <td><a href="#" class="btn btn-light" title="Eliminar" style="font-size:10px;"><span class="fas fa-trash-alt"></span></a></td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div> 
    `);
}); 

function generarUsuarios() {
    $.ajax({
        type: "get",
        url: "/admin/usuarios",
        dataType: "json",
        success: function (res) {

            for (let i = 0; i < res.length; i++) {
                $('#tablaUser').append(`
                <tr>
                    <td>${res[i].usuario}</td>
                    <td>${res[i].correo}</td>
                    <td>${res[i].password}</td>
                    <td>Generico</td>
                    <td><a href="#" class="btn btn-light" title="Editar" style="font-size:10px;"><span class="fas fa-user-edit"></span></a></td>
                </tr>
                `);
            }
        }
    });
}

function obtenerArchivos(){
    let video;
    $.ajax({
        url:"/admin/videos",
        method:"GET",
        dataType:"json",
        success:function(res){
            video=res;
            console.log(video);
        },
        error:function(error){
            console.log(error);
        }
    });

    
    let imagenes;
    $.ajax({
        url:"/admin/imagenes",
        method:"GET",
        dataType:"json",
        success:function(res){

            imagenes=res;
            console.log(imagenes);
        
        },
        error:function(error){
            console.log(error);
        }
    });

    let archivo
    $.ajax({
        url:"/admin/archivos",
        method:"GET",
        dataType:"json",
        success:function(res){
            archivo=res;
            console.log(archivo);

        },
        error:function(error){
            console.log(error);
        }
    });

    const carga1 = document.getElementById('carga1');
    const contenidoArchivo = document.getElementById('crearArchivos');
    setTimeout(()=>{
        carga1.className = 'd-none'; 
        contenidoArchivo.className = 'row';
        formarArchivos(archivo,video,imagenes);
      }, 5000);
}    

function formarArchivos(archivo,video,imagenes){
    if(archivo.length==0&&video.length==0&&imagenes.length==0){
        $("#crearArchivos").html('No hay archivos Crea o Sube uno nuevo');
    }else{
        var txt;
        for(let i=0;i<archivo.length;i++){
            console.log(archivo[i].tipoArchivo);
            if(archivo[i].tipoArchivo=='.txt'){
                txt ='../img/archivo-de-texto.png';
            }else if(archivo[i].tipoArchivo=='.html'){
                txt = '../img/html.png';
            }else if(archivo[i].tipoArchivo=='.css'){
                txt = '../img/css.png';
            }else if(archivo[i].tipoArchivo=='.js'){
                txt = '../img/js.png'; 
            }else{
                txt = '../img/simbolo-de-archivo-pdf.png'
            }
            $("#crearArchivos").append(
                `
                <div id="${archivo[i]._id}" class="col-xl-3 col-12 col-md-6 mb-4">
                    <div class="card shadow py-2 view overlay"> 
                    <div class="row">
                        <div class="col-xl-2 col-2 col-md-2">                      
                        <div class="btn-group">
                            <button type="button" class="btn btn-link btn-sm position-relative text-right" data-toggle="dropdown">
                                <span class="caret"><i class="fa fa-ellipsis-v" aria-hidden="true"></i></span>
                            </button>

                            <ul class="dropdown-menu text-center" role="menu">
                                <li><a href="#" class="text-muted" onclick="eliminarArchivo(event, '${archivo[i]._id}')">Eliminar </a><i class="fa fa-trash" aria-hidden="true"></i></li>
                                <li class="divider"></li>
                                <li><a href="/compilador"  class="text-muted">Editar </a><i class="fa fa-cog" aria-hidden="true"></i></li>
                            </ul>
                        </div>
                        </div>
                    </div>
                        <img src="${txt}" class=" card-img-64 ml-auto mr-auto" alt="archivo">
                            <div class="card-body">
                                <div class="row ">
                                    <div class="col-auto mr-2">
                                        <!--<div class="text-xs font-weight-bold text-primary text-uppercase mb-1">Archivo</div>-->
                                        <div id="nomArchivo" class="h5 mb-0 font-weight-bold text-gray-800">${archivo[i].nombreArchivo.substring(0,11)}</div>
                                    </div>
                                    <div class="col-auto ">
                                        <i class="fa fa-file fa-2x text-gray-300"></i>
                                    </div>
                                    <!--<div class="text-xs mt-1 mb-n3"><button class="btn btn-link" onclick="eliminarArchivo(event, '${archivo[i]._id}')">Eliminar</button>
                                        | <a href="" onclick="EditarArchivo(event, '${archivo[i]._id}')" data-toggle="modal" data-target="#modalArchivoEditar">Editar</a></div>-->
                            </div>
                        </div>
                    </div>
                </div>`
            );
        }

        for(let i=0;i<imagenes.length;i++){
            console.log(imagenes[0]._id);
            $("#crearArchivos").append(
                `
                <div id="${imagenes[i]._id}" class="col-xl-3 col-12 col-md-6 mb-4">
                    <div class="card shadow py-2 view overlay"> 
                    <div class="row">
                        <div class="col-xl-2 col-2 col-md-2">                      
                        <div class="btn-group">
                            <button type="button" class="btn btn-link btn-sm position-relative text-right" data-toggle="dropdown">
                                <span class="caret"><i class="fa fa-ellipsis-v" aria-hidden="true"></i></span>
                            </button>

                            <ul class="dropdown-menu text-center" role="menu">
                                <li><a href="#" class="text-muted" onclick="eliminarImagenes(event, '${imagenes[i]._id}')">Eliminar </a><i class="fa fa-trash" aria-hidden="true"></i></li>
                                <li class="divider"></li>
                            </ul>
                        </div>
                        </div>
                    </div>
                        <img src="${imagenes[i].ubicacion}" class=" card-img-64 ml-auto mr-auto" alt="archivo">
                            <div class="card-body">
                                <div class="row ">
                                    <div class="col-auto mr-2">
                                        <!--<div class="text-xs font-weight-bold text-primary text-uppercase mb-1">Archivo</div>-->
                                        <div id="nomArchivo" class="h5 mb-0 font-weight-bold text-gray-800">${imagenes[i].nombre.substring(0,11)}</div>
                                    </div>
                                    <div class="col-auto ">
                                    <i class="fa fa-file-image fa-2x text-gray-300" aria-hidden="true"></i>

                                    </div>
                                    <!--<div class="text-xs mt-1 mb-n3"><a href="" onclick="eliminarImagenes(event, '${imagenes[i]._id}')">Eliminar</a>
                                        | <a href="" onclick="EditarArchivo(event, '${imagenes[i]._id}')">Editar</a></div>-->
                            </div>
                        </div>
                    </div>
                </div>`
            );
        }

        for(let i=0;i<video.length;i++){
            console.log(video[0]._id);
            $("#crearArchivos").append(
                `
                <div id="${video[i]._id}" class="col-xl-3 col-12 col-md-6 mb-4">
                    <div class="card shadow py-2 view overlay"> 
                    <div class="row">
                        <div class="col-xl-2 col-2 col-md-2">                      
                        <div class="btn-group">
                            <button type="button" class="btn btn-link btn-sm position-relative text-right" data-toggle="dropdown">
                                <span class="caret"><i class="fa fa-ellipsis-v" aria-hidden="true"></i></span>
                            </button>

                            <ul class="dropdown-menu text-center" role="menu">
                                <li><a href="#" class="text-muted" onclick="eliminarVideos(event, '${imagenes[i]._id}')">Eliminar </a><i class="fa fa-trash" aria-hidden="true"></i></li>
                                <li class="divider"></li>
                            </ul>
                        </div>
                        </div>
                    </div>
                        <img src="../img/tira-de-pelicula.png" class=" card-img-64 ml-auto mr-auto" alt="archivo">
                            <div class="card-body">
                                <div class="row ">
                                    <div class="col-auto mr-2">
                                        <!--<div class="text-xs font-weight-bold text-primary text-uppercase mb-1">Archivo</div>-->
                                        <div id="nomArchivo" class="h5 mb-0 font-weight-bold text-gray-800">${video[i].nombre.substring(0,11)}</div>
                                    </div>
                                    <div class="col-auto ">
                                    <i class="fa fa-file-video fa-2x text-gray-300" aria-hidden="true"></i>

                                    </div>
                                    <!--<div class="text-xs mt-1 mb-n3"><a href="" onclick="eliminarVideo(event, '${video[i]._id}')">Eliminar</a>
                                        | <a href="" onclick="EditarArchivo(event, '${video[i]._id}')">Editar</a></div>-->
                            </div>
                        </div>
                    </div>
                </div>`
            );
        }
    }    
}


$("#btncreararchivo").click(function(e){
    e.preventDefault();
	var parametro = `nombreArchivo=${$("#form4").val()}&tipoArchivo=${$("#form5").val()}`;
	console.log(parametro);
	$.ajax({
        method:"POST",
        url:"/admin/archivo",
        data:parametro,
		dataType:"json",
		success:function(res){
            console.log(res);
                if(res.status==0){
                    $("#errorArchivo").html('');
                    $("#errorArchivo").append(`<div class="alert alert-danger" role="alert">
                    ${res.mensaje}
                    </div>`);
                }
                if(res.status==1){
                    $("#errorArchivo").html('');
                    $("#errorArchivo").append(`<div class="alert alert-primary" role="alert">
                    ${res.mensaje}
                    </div>`);    
                    $("#crearArchivos").append(
                        `<div class="col-xl-3 col-md-6 mb-4">
                            <div class="card border-left-primary shadow h-100 py-2">
                                <div class="card-body">
                                    <div class="row no-gutters align-items-center">
                                        <div class="col mr-2">
                                            <div class="text-xs font-weight-bold text-primary text-uppercase mb-1">Archivo</div>
                                            <div class="h5 mb-0 font-weight-bold text-gray-800">${res.nombre}</div>
                                        </div>
                                        <div class="col-auto">
                                            <i class="fa fa-file fa-2x text-gray-300"></i>
                                        </div>
                                        <div class="text-xs mt-1 mb-n3"><a href="" onclick="verMas(event, '${res._id}')" data-toggle="modal" data-target="#modalArchivoProyecto">Ver más</a> | <a href="" onclick="eliminar(event, '${res._id}')">Eliminar</a>
                                            | <a href="/compilador" onclick="Editar(event, '${res._id}')">Editar</a></div>
                                    </div>
                                </div>
                            </div>
                        </div>`
                    );
                    obtenerArchivos();
                }
		},
		error:function(error){
			console.error(error);
		}
	});
});


    function eliminar(e,id){
        e.preventDefault(); //Evitar comportamiento por defecto de un anchor
        console.log('Eliminar el objeto: ' + id);
        alert("El proyecto se eliminara!");
            $.ajax({
                url:"/proyecto/eliminar/"+id,
                method:"delete",
                dataType:"json",
                success:function(res){
                    console.log(res);
                    if (res.status==1){
                        $("#"+id).remove();
                    }
                },
                error:function(error){
                    console.log(error);
                }
            });
            
    }

    function eliminarArchivo(e,id){
        e.preventDefault(); //Evitar comportamiento por defecto de un anchor
        console.log('Eliminar el objeto: ' + id);
        alert("El archivo se eliminara!");
            $.ajax({
                url:"/archivo/eliminar/"+id,
                method:"delete",
                dataType:"json",
                success:function(res){
                    console.log(res);
                    if (res.status==1){
                        $("#"+id).remove();
                    }
                },
                error:function(error){
                    console.log(error);
                }
            });
            
    }

    function EditarArchivo(e,id){
        e.preventDefault(); //Evitar comportamiento por defecto de un anchor
        var parametro = `nombreArchivo=${$("#form10").val()}&tipoArchivo=${$("#form11").val()}`;
        $('#btneditararchivo').click(()=>{
            $.ajax({
                url:"/editar/archivo/"+id,
                method:"put",
                data: parametro,
                dataType:"json",
                success:function(res){
                    console.log(res);
                    console.log('Archivo editado');
                    if(res.ok==1){
                        $('#nomArchivo').html('');
                        $('#nomArchivo').append(`${$("#form10").val()}`);
                    }
                    
                },
                error:function(error){
                    console.log(error);
                }
            });
        });    
            
    }

    $('#btnlogout').click(()=>{
        $.ajax({
            url:"/logout",
            method:"get",
            success:function(res){
                console.log(res);
                console.log('salir');
                location.href='/login';
                
            },
            error:function(error){
                console.log(error);
            }
        });
    });