# Imagen base
FROM node:18-alpine

# Crear directorio de trabajo
WORKDIR /app

# Copiar archivos de dependencias
COPY package*.json ./

# Instalar dependencias
RUN npm install

# Copiar el resto del proyecto
COPY . .

# Exponer el puerto de Next.js
EXPOSE 3000

# Comando por defecto: iniciar servidor de desarrollo
CMD ["npm", "run", "dev"]
