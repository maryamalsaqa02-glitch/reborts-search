const copy = {
  en: {
    operations: "OPERATIONS",
    planning: "PLANNING",
    dashboard: "Dashboard",
    alerts: "Alerts",
    inventory: "Inventory",
    products: "Products",
    forecast: "AI forecast",
    orders: "Purchase orders",
    suppliers: "Suppliers",
    reports: "Reports",
    mainNavigation: "Main navigation",
    language: "Language",
    accountName: "Warehouse Manager",
    initials: "WM",
    manager: "Manager",
    popupRole: "Admin",
    usersTitle: "Active users",
    usersSubtitle: "Signed in to the website",
    connected: "online",
    employee: "Employee",
    trader: "Merchant",
    active: "Active now",
    lastSeen: "Active",
    minutes: "min ago",
    logout: "Log out",
    back: "Back",
    title: "Search reports",
    searchBy: "SEARCH BY",
    allFields: "All fields",
    productName: "Product name",
    sku: "SKU",
    company: "Company name",
    orderNumber: "Order number",
    category: "Category",
    reportName: "Report name",
    reportType: "Report type",
    generatedDate: "Generated date",
    format: "Format",
    status: "Status",
    footer: "© 2027 Smart Warehouse. All rights reserved.",
    seedByField: {
      allFields: "Stock",
      productName: "Stock",
      sku: "Stock",
      company: "Stock",
      orderNumber: "Stock",
      category: "Stock",
    },
    supplies: "",
    lastGenerated: "Last generated",
    results: (q, f, n) =>
      `Showing results for “<strong>${esc(q || "…")}</strong>” in <strong>${f}</strong> · <strong>${n}</strong> results`,
    empty: "No reports found",
    ready: "Ready",
    pending: "Pending",
    download: "Download",
    open: "Open",
  },
  ar: {
    operations: "العمليات",
    planning: "التخطيط",
    dashboard: "لوحة التحكم",
    alerts: "التنبيهات",
    inventory: "المخزون",
    products: "المنتجات",
    forecast: "توقعات الذكاء الاصطناعي",
    orders: "أوامر الشراء",
    suppliers: "الموردون",
    reports: "التقارير",
    mainNavigation: "التنقل الرئيسي",
    language: "اللغة",
    accountName: "مدير المخزن",
    initials: "م أ",
    manager: "مدير",
    popupRole: "مدير",
    usersTitle: "المستخدمون النشطون",
    usersSubtitle: "سجلوا الدخول إلى الموقع",
    connected: "متصلون",
    employee: "موظف",
    trader: "تاجر",
    active: "نشط الآن",
    lastSeen: "نشطة قبل",
    minutes: "دقائق",
    logout: "تسجيل الخروج",
    back: "رجوع",
    title: "البحث عن التقارير",
    searchBy: "البحث حسب",
    allFields: "كل الحقول",
    productName: "اسم المنتج",
    sku: "SKU",
    company: "اسم الشركة",
    orderNumber: "رقم الطلب",
    category: "الفئة",
    reportName: "اسم التقرير",
    reportType: "نوع التقرير",
    generatedDate: "تاريخ الإنشاء",
    format: "الصيغة",
    status: "الحالة",
    footer: "© ٢٠٢٧ Smart Warehouse. جميع الحقوق محفوظة.",
    seedByField: {
      allFields: "مخزون",
      productName: "مخزون",
      sku: "مخزون",
      company: "مخزون",
      orderNumber: "مخزون",
      category: "مخزون",
    },
    supplies: "",
    lastGenerated: "آخر إنشاء",
    results: (q, f, n) =>
      `عرض نتائج «<strong>${esc(q || "…")}</strong>» في <strong>${f}</strong> · <strong>${n}</strong> تقارير`,
    empty: "لا توجد تقارير",
    ready: "جاهز",
    pending: "قيد الانتظار",
    download: "تنزيل",
    open: "فتح",
  },
};
const reports = [
  {
    name: "Low Stock & Reorder",
    arName: "المخزون المنخفض وإعادة الطلب",
    type: "Daily",
    arType: "يومي",
    date: "15 Oct",
    arDate: "15 أكتوبر",
    format: "PDF",
    status: "ready",
  },
  {
    name: "Stock Movement",
    arName: "حركة المخزون",
    type: "Monthly",
    arType: "شهري",
    date: "01 Oct",
    arDate: "01 أكتوبر",
    format: "Excel",
    status: "ready",
  },
  {
    name: "Stock count",
    arName: "جرد المخزون",
    type: "Count sheet",
    arType: "كشف جرد",
    date: "",
    arDate: "",
    format: "",
    status: "pending",
  },
];
const users = [
  {
    en: "Ahmed Hassan",
    ar: "أحمد حسن",
    email: "ahmed@smartwh.com",
    enInitials: "AH",
    arInitials: "أح",
    role: "employee",
    online: true,
  },
  {
    en: "Sara Mostafa",
    ar: "سارة مصطفى",
    email: "sara@smartwh.com",
    enInitials: "SM",
    arInitials: "س م",
    role: "employee",
    online: true,
  },
  {
    en: "Karim Adel",
    ar: "كريم عادل",
    email: "karim@supplier.com",
    enInitials: "KA",
    arInitials: "ك ع",
    role: "trader",
    online: true,
  },
  {
    en: "Nour Youssef",
    ar: "نور يوسف",
    email: "nour@smartwh.com",
    enInitials: "NY",
    arInitials: "ن ي",
    role: "employee",
    online: true,
  },
  {
    en: "Mona Tarek",
    ar: "منى طارق",
    email: "mona@smartwh.com",
    enInitials: "MT",
    arInitials: "م ط",
    role: "trader",
    online: true,
  },
];
const $ = (selector) => document.querySelector(selector);
let field = "company";
function esc(value) {
  return String(value).replace(
    /[&<>"']/g,
    (ch) =>
      ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[
        ch
      ],
  );
}
function mark(value, term) {
  const index = value.toLocaleLowerCase().indexOf(term.toLocaleLowerCase());
  if (!term || index < 0) return esc(value);
  return (
    esc(value.slice(0, index)) +
    '<mark class="match">' +
    esc(value.slice(index, index + term.length)) +
    "</mark>" +
    esc(value.slice(index + term.length))
  );
}
function seedFor(d) {
  return d.seedByField[field] || d.seedByField.allFields;
}
function getValue(report, key, lang) {
  const name = lang === "ar" ? report.arName : report.name,
    type = lang === "ar" ? report.arType : report.type,
    status = copy[lang][report.status];
  if (key === "productName" || key === "company") return name;
  if (key === "sku") return report.format;
  if (key === "orderNumber") return report.date || type;
  if (key === "category") return `${type} ${status}`;
  return [name, type, report.date, report.arDate, report.format, status]
    .filter(Boolean)
    .join(" ");
}
function renderUsers() {
  const lang = document.documentElement.lang,
    d = copy[lang];
  $("#usersList").innerHTML = users
    .map((user, index) => {
      const status = d.active;
      const detail = `<bdi dir="ltr">${user.email}</bdi>`;
      return `<li class="user-row"><span class="user-avatar user-tone-${index + 1}">${lang === "ar" ? user.arInitials : user.enInitials}<i class="presence is-online" role="img" aria-label="${status}" title="${status}"></i></span><span class="user-details"><strong>${lang === "ar" ? user.ar : user.en}</strong><span class="user-detail">${detail}</span></span><span class="user-role ${user.role}">${d[user.role]}</span></li>`;
    })
    .join("");
  $("#usersList").setAttribute(
    "aria-label",
    lang === "ar" ? "المستخدمون" : "Users",
  );
  $(".online-count").textContent = String(
    users.filter((user) => user.online).length,
  );
}
function render() {
  const lang = document.documentElement.lang,
    d = copy[lang],
    query = $("#query").value.trim(),
    seed = seedFor(d),
    isSeed = query.toLocaleLowerCase() === seed.toLocaleLowerCase(),
    needle = isSeed ? "" : query.toLocaleLowerCase();
  const items = reports.filter(
    (report) =>
      !needle ||
      getValue(report, field, lang).toLocaleLowerCase().includes(needle),
  );
  const summaryField = field === "company" ? d.reportName : d[field];
  $(".summary").innerHTML = d.results(query, summaryField, items.length);
  $(".results").innerHTML = items.length
    ? items
        .map((report) => {
          const name = lang === "ar" ? report.arName : report.name,
            type = lang === "ar" ? report.arType : report.type,
            date = lang === "ar" ? report.arDate : report.date;
          const term =
            field === "company" ||
            field === "productName" ||
            field === "allFields"
              ? needle
              : "";
          const nameText = mark(name, term);
          const statusKey = report.status;
          const detail =
            report.status === "ready"
              ? `${type} · ${d.lastGenerated} <bdi dir="ltr">${date}</bdi> · <bdi dir="ltr">${report.format}</bdi>`
              : `${type} · ${lang === "ar" ? "بانتظار الموافقة" : "Waiting for approval"}`;
          const action = report.status === "ready" ? d.download : d.open;
          return `<li class="result"><span class="report-icon" aria-hidden="true">R</span><div class="result-copy"><strong>${nameText}</strong><p>${detail}</p></div><span class="report-status ${statusKey}">${d[statusKey]}</span><button type="button" class="report-action">${action}</button></li>`;
        })
        .join("")
    : `<li class="result empty">${d.empty}</li>`;
}
function setLanguage(lang) {
  const d = copy[lang];
  document.documentElement.lang = lang;
  document.documentElement.dir = lang === "ar" ? "rtl" : "ltr";
  document.title =
    lang === "ar"
      ? "البحث عن التقارير | المستودع الذكي"
      : "Search reports | Smart Warehouse";
  document.querySelectorAll("[data-i18n]").forEach((element) => {
    if (typeof d[element.dataset.i18n] === "string")
      element.textContent = d[element.dataset.i18n];
  });
  document.querySelectorAll("[data-lang]").forEach((button) => {
    const active = button.dataset.lang === lang;
    button.classList.toggle("active", active);
    button.setAttribute("aria-pressed", String(active));
  });
  document.querySelectorAll(".menu [data-field]").forEach((option) => {
    option.setAttribute(
      "aria-selected",
      String(option.dataset.field === field),
    );
  });
  $(".selected-field").textContent = d[field];
  $("#query").value = seedFor(d);
  $("#query").placeholder = seedFor(d);
  $("#query").setAttribute(
    "aria-label",
    lang === "ar" ? "البحث عن التقارير" : "Search reports",
  );
  $(".back").setAttribute("aria-label", d.back);
  $(".bell").setAttribute(
    "aria-label",
    lang === "ar" ? "التنبيهات" : "Notifications",
  );
  $("nav").setAttribute("aria-label", d.mainNavigation);
  $(".language").setAttribute("aria-label", d.language);
  $(".users").setAttribute(
    "aria-label",
    lang === "ar" ? "5 مستخدمين" : "5 users",
  );
  $(".logout").setAttribute("aria-label", d.logout);
  $(".logout").title = d.logout;
  renderUsers();
  localStorage.setItem("supplier-search-lang", lang);
  render();
}
$(".back").addEventListener("click", () => history.back());
document
  .querySelectorAll("[data-lang]")
  .forEach((button) =>
    button.addEventListener("click", () => setLanguage(button.dataset.lang)),
  );
$("#query").addEventListener("input", render);
$(".search-by").addEventListener("click", () => {
  const menu = $(".menu"),
    open = menu.hidden;
  menu.hidden = !open;
  $(".search-by").setAttribute("aria-expanded", String(open));
  document
    .querySelectorAll(".menu [data-field]")
    .forEach((option) =>
      option.setAttribute(
        "aria-selected",
        String(option.dataset.field === field),
      ),
    );
});
$(".menu").addEventListener("click", (event) => {
  const option = event.target.closest("[data-field]");
  if (!option) return;
  field = option.dataset.field;
  document
    .querySelectorAll(".menu [data-field]")
    .forEach((item) =>
      item.setAttribute("aria-selected", String(item === option)),
    );
  const d = copy[document.documentElement.lang];
  $(".selected-field").textContent = d[field];
  $("#query").value = seedFor(d);
  $("#query").placeholder = seedFor(d);
  $(".menu").hidden = true;
  $(".search-by").setAttribute("aria-expanded", "false");
  render();
});
document.addEventListener("click", (event) => {
  if (!event.target.closest(".select-wrap")) {
    $(".menu").hidden = true;
    $(".search-by").setAttribute("aria-expanded", "false");
  }
});
const usersToggle = $("#usersToggle"),
  usersPanel = $("#usersPanel");
function closeUsersPanel(returnFocus = false) {
  usersPanel.hidden = true;
  usersToggle.setAttribute("aria-expanded", "false");
  if (returnFocus) usersToggle.focus();
}
usersToggle.addEventListener("click", (event) => {
  event.stopPropagation();
  const open = usersPanel.hidden;
  usersPanel.hidden = !open;
  usersToggle.setAttribute("aria-expanded", String(open));
});
document.addEventListener("click", (event) => {
  if (
    !usersPanel.hidden &&
    !event.target.closest("#usersPanel") &&
    !event.target.closest("#usersToggle")
  )
    closeUsersPanel();
});
document.addEventListener("keydown", (event) => {
  if (event.key !== "Escape") return;
  if (!usersPanel.hidden) {
    closeUsersPanel(true);
    return;
  }
  if (!$(".menu").hidden) {
    $(".menu").hidden = true;
    $(".search-by").setAttribute("aria-expanded", "false");
    $(".search-by").focus();
  }
});
let saved = "en";
try {
  saved = localStorage.getItem("supplier-search-lang") === "ar" ? "ar" : "en";
} catch {}
setLanguage(saved);
