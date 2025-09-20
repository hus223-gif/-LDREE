# 📋 تعليمات الرفع على GitHub

## 🎯 الملفات جاهزة في مجلد `github-upload`

### الطريقة الأولى: رفع مباشر
1. ادخل على GitHub
2. اذهب لمستودعك `ldree-real-estate-website`
3. اضغط "Add file" → "Upload files"
4. اضغط **"choose your files"** (لا تستخدم السحب)
5. اختر جميع الملفات من مجلد `github-upload`
6. اكتب رسالة: `Update LDREE website files`
7. اضغط "Commit changes"

### الطريقة الثانية: رفع تدريجي
إذا لم تعمل الطريقة الأولى:

#### الخطوة 1: الملفات الأساسية
```
package.json
package-lock.json
vite.config.ts
tailwind.config.js
tsconfig.json
index.html
.gitignore
README.md
```

#### الخطوة 2: مجلد src
- اضغط "Add file" → "Create new file"
- اكتب: `src/App.tsx`
- انسخ محتوى الملف من مشروعك
- كرر لكل ملف في src/

#### الخطوة 3: مجلد public
- نفس الطريقة لملفات public/

### الطريقة الثالثة: GitHub Desktop
1. حمّل GitHub Desktop
2. Clone المستودع
3. انسخ الملفات
4. Commit & Push

## 📞 إذا واجهت مشكلة:
اتصل بي وسأساعدك خطوة بخطوة!
