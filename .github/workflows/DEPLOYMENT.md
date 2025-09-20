# دليل النشر | Deployment Guide

## 🚀 خيارات النشر المتاحة

### 1. النشر على Netlify (مجاني)
```bash
# بناء المشروع
npm run build

# رفع مجلد dist إلى Netlify
# أو ربط GitHub repository مباشرة
```

**إعدادات Netlify:**
- Build command: `npm run build`
- Publish directory: `dist`
- Node version: 18

### 2. النشر على Vercel (مجاني)
```bash
# تثبيت Vercel CLI
npm i -g vercel

# النشر
vercel --prod
```

### 3. النشر على GitHub Pages
```bash
# تثبيت gh-pages
npm install --save-dev gh-pages

# إضافة سكريبت في package.json
"deploy": "gh-pages -d dist"

# النشر
npm run build
npm run deploy
```

### 4. النشر على الخادم الخاص (cPanel)

#### الملفات المطلوبة:
- `index.html`
- `.htaccess`
- `IMG_9819.PNG` (الشعار)
- جميع ملفات CSS/JS المبنية

#### خطوات النشر:
1. **بناء المشروع:**
   ```bash
   npm run build
   ```

2. **رفع الملفات:**
   - ادخل cPanel: `http://sl30.sahara.net.sa:2083/`
   - Username: `ldreecom`
   - File Manager → public_html
   - رفع جميع محتويات مجلد `dist`

3. **إعداد SSL:**
   - SSL/TLS → Let's Encrypt SSL
   - تفعيل Force HTTPS Redirect

## 🔧 متغيرات البيئة للإنتاج

### للنشر مع خرائط Google:
```env
VITE_GOOGLE_MAPS_API_KEY=your_production_api_key
```

### للنشر بدون خرائط:
لا حاجة لمتغيرات إضافية - الموقع يعمل بدون خرائط

## 📊 مراقبة الأداء

### أدوات مراقبة مقترحة:
- Google Analytics
- Google Search Console
- PageSpeed Insights
- GTmetrix

### تحسين الأداء:
- ✅ تحسين الصور تلقائياً
- ✅ ضغط CSS/JS
- ✅ Lazy loading للصور
- ✅ Service Worker للتخزين المؤقت

## 🔒 الأمان

### إعدادات الأمان المطبقة:
- Content Security Policy
- HTTPS إجباري
- حماية من XSS
- حماية الملفات الحساسة

### ملف .htaccess:
```apache
# Security headers
Header always set X-Content-Type-Options nosniff
Header always set X-Frame-Options DENY
Header always set X-XSS-Protection "1; mode=block"
```

## 📱 اختبار التوافق

### المتصفحات المدعومة:
- Chrome 90+
- Firefox 88+
- Safari 14+
- Edge 90+

### الأجهزة المختبرة:
- 📱 الهواتف الذكية (iOS/Android)
- 💻 أجهزة الكمبيوتر المحمولة
- 🖥️ أجهزة سطح المكتب
- 📱 الأجهزة اللوحية

## 🆘 استكشاف الأخطاء

### مشاكل شائعة:

**1. خرائط Google لا تعمل:**
- تحقق من مفتاح API
- تأكد من تفعيل الخدمات المطلوبة
- راجع console للأخطاء

**2. مشاكل الخطوط العربية:**
- تأكد من تحميل IBM Plex Sans Arabic
- تحقق من إعدادات direction: rtl

**3. مشاكل التوجيه:**
- تأكد من وجود ملف .htaccess
- تحقق من إعدادات الخادم

## 📞 الدعم الفني
- **البريد الإلكتروني:** hus223@gmail.com
- **الهاتف:** +966 50 483 7135
- **ساعات العمل:** 24/7

---
آخر تحديث: يناير 2025
