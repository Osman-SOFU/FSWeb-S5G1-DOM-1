const siteContent = {
  // BU NESNEYİ DEĞİŞTİRMEYİN
  nav: {
    "nav-item-1": "Eğitimler",
    "nav-item-2": "Eğitmenler",
    "nav-item-3": "Sorular",
    "nav-item-4": "Blog",
    "nav-item-5": "Hakkımızda",
    "nav-item-6": "İletişim",
  },
  cta: {
    h1: "Full Stack Web Developer",
    button: "Kayıt Olun",
  },
  "top-content": {
    "left-h4": "Kabul Şartları",
    "left-content":
      "Öğrencilerimizde en başta şu iki özelliği arıyoruz: yazılımcı olmak için gereken analitik yatkınlık (ki bunu C-CAT testi ile ölçüyoruz) ve yazılımcı olma konusunda istek ve kararlılık. Şirket olarak başlangıçta öğretim ücreti almıyoruz ve her yetiştirdiğimiz öğrenci için bir maliyetin altına giriyoruz. Bu sebeple, mezun olup başarılı bir kariyere sahip olacağını öngördüğümüz öğrencilere öncelik vermeye gayret ediyoruz.",
    "right-h4": "Haftalık Program",
    "right-content":
      "Program haftada 40 saatinizi talep ediyor. Tam zamanlı bir işte çalışırken bu zamanı ayırmanız maalesef mümkün değil. Ancak, part-time bir iş veya daha az zorlayıcı son sınıf dersleriyle program rahatlıkla tamamlanabilir. Programın sunduğu önemli bir kolaylık da her ay yeni bir sınıfın açılıyor oluşu.",
  },
  "bottom-content": {
    "left-h4": "EN YETENEKLİLERİ 6 AY YETİŞTİRİYORUZ.",
    "left-content":
      "Workintech olarak binlerce başvurudan potansiyeli en yüksek olanları seçiyoruz. Her 9 başvurudan 1'i programımıza kabul alıyor. 6 ay süresince Full-Stack Yazılımcı olarak yetiştiriyoruz.",
    "middle-h4": "BOOTCAMPLER'DEN FARKLI-İLK GÜNDEN İŞE HAZIR ADAYLAR",
    "middle-content":
      "Workintech eğitim programı sıfırdan yazılımcı yetiştiren, toplamı bin saati aşan, yoğun ve zorlayıcı bir eğitim. Daha kısa süreli kurslara oranla çok daha sağlam bir temel atıyoruz. Ayrıca Workintech´te sınıf başına bir ücret ödemeniz gerekmiyor.",
    "right-h4":
      "ŞİRKETİNİZE EN UYGUN ADAYLARI SİZİN İÇİN İŞE HAZIR HALE GETİRİYORUZ",
    "right-content":
      "Workintech´in size özel atanmış ise alım uzmanı yıl boyunca sizi en ideal adaylarla buluşturuyor. Programın son aylarında seçtiğiniz adaylar için staj, part-time, oryantasyon gibi programlarınızı Workintech'e entegre etme imkanı sağlıyoruz. Böylece yeni çalışanınız daha ilk günden işe hazır hale geliyor.",
  },
  contact: {
    "contact-h4": "İLETİŞİM",
    address: "Bağdat Cad. No:302/1 D:4 Kadıköy İstanbul, Türkiye",
    phone: "+90 (216) 550-5905",
    email: "bilgi@birsirketsitesi.com.tr",
  },
  footer: {
    copyright: "Copyright Bir Şirket Sitesi 2023",
  },
  images: {
    "logo-img": "https://i.ibb.co/42PDMF2/logo.png",
    "cta-img": "https://i.ibb.co/XssVKxk/cta.png",
    "accent-img": "https://i.ibb.co/5FZmL26/accent.png",
  },
};

/* Kodlar Buradan aşağıya */

document.querySelectorAll("nav a")[0].textContent = "Eğitimler";
document.querySelectorAll("nav a")[1].textContent = "Eğitmenler";
document.querySelectorAll("nav a")[2].textContent = "Sorular";
document.querySelectorAll("nav a")[3].textContent = "Blog";
document.querySelectorAll("nav a")[4].textContent = "Hakkımızda";
document.querySelectorAll("nav a")[5].textContent = "İletişim";

document.querySelector(".cta-text h1").textContent = "Full Stack Web Developer";

document.querySelector(".cta-text button").textContent = "Kayıt Olun";

document.querySelectorAll(".top-content h4")[0].textContent = "Kabul Şartları";
document.querySelectorAll(".top-content h4")[1].textContent =
  "Haftalık Program";

document.querySelectorAll(".top-content p")[0].textContent =
  "Öğrencilerimizde en başta şu iki özelliği arıyoruz: yazılımcı olmak için gereken analitik yatkınlık (ki bunu C-CAT testi ile ölçüyoruz) ve yazılımcı olma konusunda istek ve kararlılık. Şirket olarak başlangıçta öğretim ücreti almıyoruz ve her yetiştirdiğimiz öğrenci için bir maliyetin altına giriyoruz. Bu sebeple, mezun olup başarılı bir kariyere sahip olacağını öngördüğümüz öğrencilere öncelik vermeye gayret ediyoruz.";
document.querySelectorAll(".top-content p")[1].textContent =
  "Program haftada 40 saatinizi talep ediyor. Tam zamanlı bir işte çalışırken bu zamanı ayırmanız maalesef mümkün değil. Ancak, part-time bir iş veya daha az zorlayıcı son sınıf dersleriyle program rahatlıkla tamamlanabilir. Programın sunduğu önemli bir kolaylık da her ay yeni bir sınıfın açılıyor oluşu.";

document.querySelectorAll(".bottom-content h4")[0].textContent =
  "EN YETENEKLİLERİ 6 AY YETİŞTİRİYORUZ.";
document.querySelectorAll(".bottom-content h4")[1].textContent =
  "BOOTCAMPLER'DEN FARKLI-İLK GÜNDEN İŞE HAZIR ADAYLAR";
document.querySelectorAll(".bottom-content h4")[2].textContent =
  "ŞİRKETİNİZE EN UYGUN ADAYLARI SİZİN İÇİN İŞE HAZIR HALE GETİRİYORUZ";

document.querySelectorAll(".bottom-content p")[0].textContent =
  "Workintech olarak binlerce başvurudan potansiyeli en yüksek olanları seçiyoruz. Her 9 başvurudan 1'i programımıza kabul alıyor. 6 ay süresince Full-Stack Yazılımcı olarak yetiştiriyoruz.";
document.querySelectorAll(".bottom-content p")[1].textContent =
  "Workintech eğitim programı sıfırdan yazılımcı yetiştiren, toplamı bin saati aşan, yoğun ve zorlayıcı bir eğitim. Daha kısa süreli kurslara oranla çok daha sağlam bir temel atıyoruz. Ayrıca Workintech´te sınıf başına bir ücret ödemeniz gerekmiyor.";
document.querySelectorAll(".bottom-content p")[2].textContent =
  "Workintech´in size özel atanmış ise alım uzmanı yıl boyunca sizi en ideal adaylarla buluşturuyor. Programın son aylarında seçtiğiniz adaylar için staj, part-time, oryantasyon gibi programlarınızı Workintech'e entegre etme imkanı sağlıyoruz. Böylece yeni çalışanınız daha ilk günden işe hazır hale geliyor.";

const iletisim = document.querySelector(".contact");
iletisim.querySelector("h4").textContent = "İLETİŞİM";
iletisim.querySelectorAll("p")[0].textContent = siteContent.contact.address;
iletisim.querySelectorAll("p")[1].textContent = siteContent.contact.phone;
iletisim.querySelectorAll("p")[2].textContent = siteContent.contact.email;

document.querySelector("footer a").classList.add("bold");
document.querySelector("footer a").textContent = siteContent.footer.copyright;

document.getElementById("logo-img").src = "https://i.ibb.co/42PDMF2/logo.png";

document.getElementById("cta-img").src = "https://i.ibb.co/XssVKxk/cta.png";

document.getElementById("middle-img").src =
  "https://i.ibb.co/5FZmL26/accent.png";

const menu = document.querySelectorAll("nav a");
for (let i = 0; i < menu.length; i++) {
  menu[i].classList.add("italic");
}
