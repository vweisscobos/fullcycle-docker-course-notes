FROM nginx

# define em qual pasta estaremos ao executar os próximos comandos
WORKDIR /app
# instala vim
RUN apt-get update && apt-get install vim -y

copy html /usr/share/nginx