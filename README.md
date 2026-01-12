# 🕌 MuGöl İmsak Vakti - PWA (Progressive Web App)

## ✨ Özellikler

### 📱 PWA Özellikleri
- ✅ **Ana Ekrana Eklenebilir**: Telefonunuza uygulama gibi kurulur
- ✅ **Çevrimdışı Çalışma**: İnternet olmadan da çalışır
- ✅ **Bildirimler**: Ezan vakti gelince otomatik bildirim
- ✅ **Kerahat Uyarıları**: Kerahat vakitlerinde uyarı bildirimi
- ✅ **Arka Plan Desteği**: Uygulama kapatıldığında bile çalışır

### 🎯 Diğer Özellikler
- 📍 81 İl Namaz Vakitleri
- ⏰ Geri Sayım Sayacı
- 🔔 Sesli Ezan ve Kerahat Uyarısı
- 📊 Kaza Namazı Takibi
- 📿 Dijital Zikirmatik
- 🌙 Dini Günler Takvimi
- 🌓 Karanlık/Aydınlık Tema
- 📅 Aylık İmsakiye Tablosu

## 🚀 Kurulum

### 1. Dosyaları Web Sunucusuna Yükleme

Tüm dosyaları web sitenizin kök dizinine yükleyin:
```
index.html
manifest.json
sw.js
logo.png (Ana logo)
icon-192.png (PWA ikonu 192x192)
icon-512.png (PWA ikonu 512x512)
apple-touch-icon.png (iOS ikonu 180x180)
favicon.png (Tarayıcı ikonu 64x64)
```

### 2. HTTPS Zorunluluğu

⚠️ **ÖNEMLİ**: PWA özellikleri sadece HTTPS üzerinden çalışır!

- Yerel test için: `localhost` kullanabilirsiniz
- Canlı yayın için: SSL sertifikası gereklidir (Let's Encrypt ücretsiz)

### 3. Telefona Kurulum

#### Android (Chrome)
1. Web sitesini açın
2. Sağ üst menüden "Ana ekrana ekle" seçin
3. Uygulamayı onaylayın

#### iOS (Safari)
1. Web sitesini açın
2. Paylaş butonuna tıklayın
3. "Ana Ekrana Ekle" seçin
4. Ekle'ye tıklayın

## 📲 Bildirim İzinleri

### İlk Kullanım
1. Uygulamayı ilk açtığınızda bildirim izni isteyecek
2. **"İzin Ver"** seçeneğini tıklayın
3. 🔔 ikonu yanında **zil simgesi** tıklayın
4. **"Sürekli Bildirim ve Sesler"** aktif edin

### Bildirimler Gelmiyor mu?

#### Android
1. Ayarlar → Uygulamalar → Chrome
2. Bildirimler → Açık
3. Site İzinleri → Bildirimler → İzin Ver

#### iOS
Maalesef iOS'ta arka plan bildirimleri sınırlıdır. Uygulama açıkken bildirimler gelir.

## 🎵 Ses ve Bildirim Sistemi

### Nasıl Çalışır?
1. **🔔 Zil Butonuna** tıklayın (sağ üst köşe)
2. Uygulama arka planda **sessiz ses** çalarak canlı kalır
3. **Ezan vakti** gelince:
   - 🔊 Ezan sesi çalar
   - 📲 Bildirim gelir
4. **Kerahat vakti** girince:
   - ⚠️ Uyarı sesi çalar
   - 📲 Bildirim gelir

### Test Etme
- **Ezan Testi**: Ayarlar → "Ezan Sesini Test Et"
- **Kerahat Testi**: Ayarlar → "Kerahat Sesini Test Et"

## 🛠️ Teknik Detaylar

### Dosya Yapısı
```
index.html              → Ana uygulama
manifest.json           → PWA ayarları
sw.js                   → Service Worker (Arka plan işlemleri)
logo.png               → Ana logo (Header'da gösterilen)
icon-192.png           → PWA ikonu 192x192
icon-512.png           → PWA ikonu 512x512
apple-touch-icon.png   → iOS için özel ikon 180x180
favicon.png            → Tarayıcı sekmesi ikonu 64x64
```

### Service Worker
- Çevrimdışı önbellekleme
- Bildirim yönetimi
- Arka plan senkronizasyonu

### Tarayıcı Desteği
- ✅ Chrome (Android): Tam destek
- ✅ Edge (Android): Tam destek
- ✅ Samsung Internet: Tam destek
- ⚠️ Safari (iOS): Kısıtlı destek (arka plan bildirimleri yok)
- ❌ Firefox: PWA desteği sınırlı

## 🔧 Sorun Giderme

### "Service Worker Kayıtlı Değil"
- HTTPS kullanıyor musunuz?
- Tarayıcı uyumlu mu?
- Konsolu kontrol edin (F12)

### "Bildirimler Gelmiyor"
1. Bildirim izni verildi mi?
2. 🔔 Zil butonu aktif mi?
3. Telefon sessiz modda mı?
4. DND (Rahatsız Etme) modu açık mı?

### "Uygulama Kurulmuyor"
- HTTPS zorunludur
- `manifest.json` erişilebilir mi?
- İkonlar yüklendi mi?

## 📝 Özelleştirme

### Tema Renkleri (manifest.json)
```json
"background_color": "#0f172a",
"theme_color": "#fbbf24"
```

### Uygulama İsmi
```json
"name": "MuGöl İmsak Vakti",
"short_name": "İmsak Vakti"
```

## 🌟 İpuçları

1. **Batarya Tasarrufu**: Kerahat uyarısını kapatarak batarya tasarrufu yapabilirsiniz
2. **Ekran Açık Kalma**: Wake Lock özelliği ekranın kapanmasını önler
3. **Birden Fazla Şehir**: localStorage kullanarak şehir ayarı kaydedilir
4. **Çevrimdışı Kullanım**: Veriler önbelleklenir, internet olmadan çalışır

## 🤝 Destek

Sorularınız için:
- GitHub: [repo-link]
- E-posta: [email]

## 📜 Lisans

Bu proje açık kaynaklıdır ve özgürce kullanılabilir.

---

**Hayırlı günler! 🤲**
