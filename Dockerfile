# Usamos imagen oficial de Nginx
FROM nginx:alpine

# Eliminamos configuración por defecto
RUN rm -rf /usr/share/nginx/html/*

# Copiamos nuestros archivos al servidor
COPY . /usr/share/nginx/html

# Exponemos el puerto 80
EXPOSE 80

# Comando para iniciar nginx
CMD ["nginx", "-g", "daemon off;"]