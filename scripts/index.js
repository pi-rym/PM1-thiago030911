class Activity{
    constructor(id, title, description, imgUrl){
        this.id = id;
        this.title = title;
        this.description = description;
        this.imgUrl = imgUrl;
    }
}

class Repository{
    constructor(){
        this.activity = [];
        this.id = 0;
    }

    getAllActivities(){
        return this.activity;
    }

    createActivity(title, description, imgUrl){
        const id = ++this.id;
        const activity = new Activity(id,title,description,imgUrl);
        this.activity.push(activity);
    }

    deleteActivity(id){
        this.activity.filter(activity => activity.id !== id);
    }

}

 const reposirorioUno = new Repository();

 function eliminarImagen (event){
    const botonId = event.target.id;
    const idActividad = botonId.filter("-").at(-1);
    console.log(idActividad);

    reposirorioUno.deleteActivity(idActividad);

    convertir();
 }

function crearHTML(activity){
    const {
        id,
        title,
        description,
        imgUrl
    } = activity;

    const titulo = document.createElement('h3');
    titulo.innerHTML = title
    titulo.classList.add = ('titulo2');
    
    const descripcion = document.createElement('p');
    descripcion.innerHTML = description;
    descripcion.className = 'descripcion2';

    const imagen = document.createElement('img');
    imagen.src = imgUrl;

    /*const boton = document.createElement('button');
    boton.id = "Id-actividad-" + id;
    boton.innerHTML = "borrar";

    boton.addEventListener('click', eliminarImagen);*/


    const contenedor = document.createElement('div');
    contenedor.appendChild(titulo);
    contenedor.appendChild(descripcion);
    contenedor.appendChild(imagen);
    contenedor.appendChild(boton);
    contenedor.className = 'card';
    contenedor.id = "Id-actividad-" + id;

    return contenedor;
}

function convertir (){
    const contenedor = document.getElementById('div');
    contenedor.innerHTML = '';

    const activities = reposirorioUno.getAllActivities();
    const htmlActivities = activities.map((activity) => crearHTML(activity));

    htmlActivities.forEach(activity => contenedor.appendChild(activity));

}

function buton (event){
    event.preventDefault();

    const tituloInput = document.getElementById('tituloInput');
    const descripcionInput = document.getElementById('descripInput');
    const urlInput = document.getElementById('urlInput');

    const valorTitulo = tituloInput.value;
    const valorDescripcion = descripcionInput.value;
    const valorUrl = urlInput.value;

    if(!valorTitulo || !valorDescripcion || !valorUrl){
        return alert("los valores no tiene contenido, ingrese nuevamente");
        
    }
    reposirorioUno.createActivity(valorTitulo,valorDescripcion,valorUrl);
    convertir();

    tituloInput.value = '';
    descripcionInput.value = '';
    urlInput.value = '';
}

const button = document.getElementById('button1');
button.addEventListener('click',buton);
 