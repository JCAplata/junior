# agregar referencias
## 1. entra a la carpeta contenido, luego a la carpeta imagenes, luego a la carpeta referencias y agrege los videos nuevos que subira
⚠️tengra presente los nombres que le ponga a los videos, recomiendo seguir la secuencia que tiene los otros videos r1,r2,r3... etc⚠️
## 2. entre a la carpeta contenido, luego a la carpeta html, luego al archivo Referencias.html
baje hasta encontrar <h1>📷 Referencias 🎥</h1> y debajo de ese copie lo que le dejare a continuacion 👇🏻
```html
<div class="galeria">
    <div class="galeria-item">
      <video controls>
        <source src="../Images/Referencias/r1.mp4" type="video/mp4">
        Tu navegador no soporta videos.
      </video>
</div>
```

## dependiendo de la cantidad de referencias que vaya a subir en ese momento asi mismo sera el numero de veces que copie y pegue eso
solo debe cambiar el nombre del o los videos por los agregados reemplazando r1 del ejemplo dado

# agregar torneo
## 1. agregar la imagen en la carpeta imagenes y tenga presente el nombre que le puso
## 2. entre a la carpeta contenido, luego a la carpeta html, luego al archivo Torneos.html
baje hasta encontrar <p class="no-torneo"><strong>❌ NO HAY TORNEOS PROGRAMADOS ❌</strong></p> y debajo de ese copie lo que le dejare a continuacion 👇🏻 

```html
<div class="torneo">
    <h2>Torneo por cuenta bonita</h2>
    <img src="../Images/G2.jpg" alt="torneo">
    <p><strong>Reglas:</strong> Eliminación directa</p>
    <p><strong>Fecha:</strong> 10 de octubre</p>
    <p><strong>HORA:</strong> 10 PM hora colombia</p>
</div>
```

## dependiendo de la cantidad de torneos que quiera programar asi mismo sera el numero de veces que copie y pegue eso
ya despues solo es cuestion de editar la informacion (imagen, reglas, fecha, hora)

### importante ⚠️
le dije que dejara presente el nombre de la imagen que agrego, del ejemplo que le deje <img src="../Images/G2.jpg" alt="torneo"> solo reemplace el G2.jpg por el nombre de la imagen agregada 

# agregar grupos de WhatsApp

## 1. agregar la imagen en la carpeta imagenes y tenga presente el nombre que le puso
## 2. entre a la carpeta contenido, luego a la carpeta html, luego al archivo Grupos.html
baje hasta encontrar el </div> que este debajo del titulo del ultimo grupo subido y debajo de ese copie lo que le dejare a continuacion 👇🏻
```html
<div class="tarjeta">
    <a href="https://chat.whatsapp.com/B9AdOUOt9cEJmvLmEUIPqO?mode=ems_copy_c"> 
    <img src="../Images/G4.jpg" alt="">
    </a>
    <h3>Grupo #4 </h3>
</div>
```

## dependiendo de la cantidad de Grupos que quiera agregar asi mismo sera el numero de veces que copie y pegue eso
ya despues solo es cuestion de editar la informacion (link del grupo, imagen, #del grupo ) el link del nuevo grupo va dentro de las comillas de <a href="https://chat.whatsapp.com/B9AdOUOt9cEJmvLmEUIPqO?mode=ems_copy_c"> para las imagnes reemplace el G4 por el nombre de la imagen que agrego, y por ultimo cambie el numero del grupo que es el titulo por el que corresponda 