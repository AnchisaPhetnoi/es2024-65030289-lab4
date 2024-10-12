# ใช้ nginx:alpine เป็นฐาน
FROM nginx:alpine

# คัดลอกไฟล์ nginx.conf ไปยัง container
COPY nginx.conf /etc/nginx/conf.d/default.conf

# คัดลอกไฟล์ HTML ไปยัง container
COPY public/html /usr/share/nginx/html

FROM nginx:alpine

# คัดลอกไฟล์ที่จำเป็นไปยังโฟลเดอร์ที่เหมาะสม
COPY ./Public/html /usr/share/nginx/html
COPY ./Public/css /usr/share/nginx/html/css
COPY ./Public/js /usr/share/nginx/html/js
COPY nginx.conf /etc/nginx/conf.d/default.conf
