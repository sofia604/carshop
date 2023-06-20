# Carshop Bootcamp 

## Descripción

El proyecto consiste en una página para reservar servicios dentro de un taller mecánicos, donde los usuarios puede llenar sus datos, los datos
del vehículo y los servicios que desean obtener, finalmente que estos datos sean correctos para poder reservar la cita. 

## Desarrollo
Para el desarrollo de este proyecto se usaron librerías de React como react-router-dom para poder redireccionar cada una de las páginas dentro
de los distintos formularios que se deben llenar. También se usó la librería aws-sdk para conectar la aplicación con la base de datos Dynamo
de AWS misma que guarda la información de los formularios y tickets generados, así como también posee la información de los servicios disponibles. 
Todas las imágenes utilizadas dentro de la página se encuentran almacenadas en un Bucket S3 de AWS. 

## Despliegue
### Local
Para desplegar el proyecto de manera local se debe clonar el mismo.

```git clone https://github.com/sofia604/carshop.git```

Luego se debe ingresar a la carpeta clonada desde la terminal

```cd carshop```

Se debe correr los siguientes comandos

```npm install```
```npm start```

Luego automáticamente se abirá una pestaña en el navegadore dentro del localhost:3000

**Nota**: El proyecto no cuenta con las credenciales de AWS para evidenciar su total funcionamiento. Crear las respectivas tablas en Dynamo. 

### AWS

El proyecto se encuentra desplegado en un Bucket de AWS dentro de la siguiente dirección [http://carshop-espana.s3-website-us-east-1.amazonaws.com](http://deploi-react-aws.s3-website-us-east-1.amazonaws.com)

**Nota**: De momento se puede visualizar solo la página raiz. 
