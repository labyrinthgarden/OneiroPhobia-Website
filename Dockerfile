FROM node:18-alpine

WORKDIR /app

# Copiar archivos de dependencias primero como root
COPY package*.json ./
COPY tsconfig.json ./

# Instalar dependencias como root
RUN npm ci

# Copiar el resto del código como root
COPY . .

# Dar permisos completos al usuario node en todo el directorio /app
RUN chown -R node:node /app && \
    chmod -R 755 /app

# Cambiar al usuario node
USER node

EXPOSE 3000

CMD ["npm", "run", "dev"]
