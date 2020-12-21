FROM mhart/alpine-node:12
WORKDIR /app
COPY . .
RUN npm install
EXPOSE 3000
RUN npm run build
RUN npm install -g serve
ENTRYPOINT serve -s dist -l 3000 