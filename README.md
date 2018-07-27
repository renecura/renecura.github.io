# Ejecutar de forma interactiva el servidor

Esto abre la línea de comandos en el servidor. Remueve el contenedor al salir.

> docker run --rm -it --name server node-server /bin/sh

## Agregar un directorio de desarrollo

Realiza un bind-mount para asociar un directorio del filesystem local al contenedor. Los cambios realizados en los archivos de ese directorio desde el host se reflejan dentro del contenedor.

> docker run --rm -it --name firebase -p 9005:9005 --mount type=bind,source="$(pwd)"/app,target=/app renecura/botsyndicate /bin/sh

Inside, tu run firebase serve

> firebase serve -p 9005 -o 0.0.0.0

## Detener el servidor.
> docker container stop server


## Ejecutar el servidor en background.

> docker run -d --name server -p 4000:80 --mount type=bind,source="$(pwd)"/src,target=/app/src renecura/node-server:dev