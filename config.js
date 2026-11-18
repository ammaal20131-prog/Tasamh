/*
  إعدادات الموقع
  --------------
  ١) SITE: اسم الإدارة والمدرسة والمديرة ومنفذة المبادرة وهدف عدد الأوراق.
  ٢) FIREBASE_CONFIG: الصقي القيم من
     Firebase Console ← إعدادات المشروع ← تطبيقاتك ← تطبيق الويب

  ما دامت قيم Firebase فارغة، يعمل الموقع في «وضع التجربة»
  (المشاركات تُحفظ على جهازك فقط ولا يراها الآخرون).
*/
window.SITE = {
  dept: "الإدارة العامة للتعليم بمنطقة عسير",
  deptShort: "تعليم عسير",          // يظهر في الشريط العلوي
  school: "متوسطة خيبر الجنوب",
  principal: "أ/ زهراء الشهراني",   // مديرة المدرسة
  teacher: "أ/ أمل الشهري",          // منفذة المبادرة
  goal: 200                          // عدد الأوراق المستهدف في شجرة التسامح
};

window.FIREBASE_CONFIG = {
  apiKey: "AIzaSyCDENsNxCuXXL4AscdxBSQVmqRfILaKjus",
  authDomain: "tasamh-bc4cf.firebaseapp.com",
  projectId: "tasamh-bc4cf",
  storageBucket: "tasamh-bc4cf.firebasestorage.app",
  messagingSenderId: "865163161196",
  appId: "1:865163161196:web:9e36b68a0347c3004ab249"
};
