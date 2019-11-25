upstream backend {
  server master_node:3000;
}
proxy_cache_path /data/nginx/cache keys_zone=one:10m;
server {
  listen 80;
  server_name master.mrtolerant.ru;

  root /app/public;
  proxy_cache mycache;
  location / {
  try_files $uri @backend;
}

location @backend {
  proxy_pass http://backend;
  proxy_set_header X-Real-IP $remote_addr;
  proxy_set_header Host $host;
  proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
  # Following is necessary for Websocket support
  proxy_http_version 1.1;
  proxy_set_header Upgrade $http_upgrade;
  proxy_set_header Connection "upgrade";
}
}