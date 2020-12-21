FROM mhart/alpine-node:12
WORKDIR /app
COPY . .
RUN npm install
RUN chmod +x build.sh && npm run build
EXPOSE 3001
ENTRYPOINT [ "node", "build/index.js" ]