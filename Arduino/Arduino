#include <WiFi.h>
#include <DHT.h>
#include <HTTPClient.h>

#define DHTPIN 25    // Pin ที่เชื่อมต่อ DHT
#define DHTTYPE DHT11 // หรือ DHT22

DHT dht(DHTPIN, DHTTYPE);

const char* ssid = "YOUR SSID";
const char* password = "YOUR PASSWORD";
const char* server = "http://IP_ADDRESS/api/data";

void setup() {
  Serial.begin(9600);
  dht.begin();
  WiFi.begin(ssid, password);

  while (WiFi.status() != WL_CONNECTED) {
    delay(1000);
    Serial.println("Connecting to WiFi...");
  }
  Serial.println("Connected to WiFi");

  Serial.print("ESP32 IP address: ");
  Serial.println(WiFi.localIP());
}

void loop() {
  float h = dht.readHumidity();
  float t = dht.readTemperature();

  if (isnan(h) || isnan(t)) {
    Serial.println("Failed to read from DHT sensor!");
    return;
  }

  // สร้าง JSON payload
  String jsonData = String("{\"temperature\":") + t + ",\"humidity\":" + h + "}";

  // ส่งข้อมูลไปยัง server
  if (WiFi.status() == WL_CONNECTED) {
    HTTPClient http;
    http.begin(server); // เชื่อมต่อ URL
    http.addHeader("Content-Type", "application/json"); // แนบ header

    int httpResponseCode = http.POST(jsonData); // ส่ง POST request

    if (httpResponseCode > 0) {
      String response = http.getString(); // รับข้อมูลจาก server
      Serial.println(httpResponseCode); // แสดง status code
      Serial.println(response); // แสดง response
    } else {
      Serial.print("Error on sending POST: ");
      Serial.println(httpResponseCode);
    }
    http.end(); // ปิดการเชื่อมต่อ
  }

  delay(60000); // ส่งข้อมูลทุกๆ 60 วินาที
}
