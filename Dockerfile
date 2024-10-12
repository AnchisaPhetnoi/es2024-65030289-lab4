# ใช้ Nginx official image
FROM nginx:alpine

# คัดลอกไฟล์ HTML และโฟลเดอร์ css และ js ไปยัง Nginx directory
COPY ./Public/html /usr/share/nginx/html
COPY ./Public/css /usr/share/nginx/html/css
COPY ./Public/js /usr/share/nginx/html/js

# คัดลอกไฟล์ nginx.conf ไปยังตำแหน่งที่เหมาะสม
COPY nginx.conf /etc/nginx/conf.d/default.conf

