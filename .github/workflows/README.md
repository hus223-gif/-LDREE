# مؤسسة التطوير الريادي العقارية | LDREE Real Estate

## 🏢 نظرة عامة
منصة شاملة للتسويق العقاري الاحترافي تقدم حلول عقارية متكاملة في المملكة العربية السعودية.

## ✨ المميزات
- 🌐 دعم اللغتين العربية والإنجليزية
- 📱 تصميم متجاوب مع جميع الأجهزة
- 🎨 تصميم احترافي وعصري
- 📞 روابط التواصل المباشر
- 🗺️ دعم خرائط Google (اختياري)
- 🔐 نظام تسجيل دخول آمن عبر نفاذ
- 📊 لوحة تحكم شاملة للمستخدمين

## 🛠️ التقنيات المستخدمة
- **Frontend:** React 18 + TypeScript
- **Styling:** Tailwind CSS
- **Icons:** Lucide React
- **Maps:** Google Maps API (اختياري)
- **Authentication:** نظام نفاذ (محاكاة)
- **Build Tool:** Vite
- **Routing:** React Router DOM

## 🚀 التشغيل المحلي

### المتطلبات
- Node.js 18+ 
- npm أو yarn

### خطوات التشغيل
```bash
# استنساخ المشروع
git clone https://github.com/username/ldree-real-estate-website.git

# الانتقال لمجلد المشروع
cd ldree-real-estate-website

# تثبيت التبعيات
npm install

# تشغيل الخادم المحلي
npm run dev
```

### إعداد خرائط Google (اختياري)
1. احصل على مفتاح API من [Google Cloud Console](https://console.cloud.google.com/)
2. فعّل هذه الخدمات:
   - Maps JavaScript API
   - Geocoding API
   - Places API
3. أنشئ ملف `.env` ونسخ المحتوى من `.env.example`
4. أضف مفتاح API الخاص بك

## 📁 هيكل المشروع
```
src/
├── components/           # مكونات React
│   ├── AuthPage.tsx     # صفحة تسجيل الدخول
│   ├── GoogleMap.tsx    # مكون الخرائط
│   ├── UserProfile.tsx  # الملف الشخصي
│   └── ...
├── App.tsx              # المكون الرئيسي
├── main.tsx            # نقطة الدخول
└── index.css           # الأنماط الرئيسية
```

## 🌐 النشر

### النشر على Netlify
```bash
# بناء المشروع
npm run build

# رفع مجلد dist إلى Netlify
```

### النشر على Vercel
```bash
# ربط المشروع بـ Vercel
vercel

# أو استخدام Vercel CLI
vercel --prod
```

### النشر على GitHub Pages
```bash
# تثبيت gh-pages
npm install --save-dev gh-pages

# إضافة سكريبت النشر في package.json
"deploy": "gh-pages -d dist"

# النشر
npm run build
npm run deploy
```

## 📞 معلومات التواصل
- **الهاتف:** +966 50 483 7135
- **البريد الإلكتروني:** hus223@gmail.com
- **الموقع:** [www.ldree.com.sa](https://www.ldree.com.sa)

## 📄 الترخيص
- **رقم السجل التجاري:** 2051158893
- **الرقم الضريبي:** 310588816700003
- **مرخص من:** الهيئة العامة للعقار

## 🤝 المساهمة
نرحب بالمساهمات! يرجى:
1. عمل Fork للمشروع
2. إنشاء branch جديد للميزة
3. إرسال Pull Request

## 📝 الملاحظات
- المشروع يدعم RTL/LTR للغتين العربية والإنجليزية
- خرائط Google اختيارية - الموقع يعمل بدونها
- جميع البيانات الحساسة في ملف `.env`

---

**مؤسسة التطوير الريادي العقارية** - شريك في تحقيق رؤية المملكة 2030 🇸🇦
