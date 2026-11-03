const masters = [
 {id:1,name:"Bekzod Ismoilov",job:"Bo‘yoqchi",city:"Toshkent",rating:5.0,years:7,reviews:42,phone:"+998 90 000 00 01",emoji:"🧑🏻‍🎨",image:"https://images.unsplash.com/photo-1562259949-e8e7689d7828?auto=format&fit=crop&w=700&q=80",about:"Ichki va tashqi devorlarni bo‘yash, pardozlash."},
 {id:2,name:"Ali Valiyev",job:"Santexnik",city:"Toshkent",rating:4.9,years:8,reviews:38,phone:"+998 90 000 00 02",emoji:"👨🏻‍🔧",image:"https://images.unsplash.com/photo-1607472586893-edb57bdc0e39?auto=format&fit=crop&w=700&q=80",about:"Suv quvurlari, kran va isitish tizimlarini ta’mirlash."},
 {id:3,name:"Otabek Rasulov",job:"Avtomobil ustasi",city:"Toshkent",rating:4.9,years:9,reviews:31,phone:"+998 90 000 00 03",emoji:"👨🏻‍🔧",image:"https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?auto=format&fit=crop&w=700&q=80",about:"Avtomobil diagnostikasi va ta’mirlash ishlari."},
 {id:4,name:"Jasur Karimov",job:"Elektrik",city:"Toshkent",rating:4.8,years:6,reviews:26,phone:"+998 90 000 00 04",emoji:"👨🏽‍🔧",image:"https://images.unsplash.com/photo-1621905251918-48416bd8575a?auto=format&fit=crop&w=700&q=80",about:"Uy elektr tarmoqlari va jihozlarini o‘rnatish."},
 {id:5,name:"Mirjalol Usmonov",job:"Konditsioner ustasi",city:"Buxoro",rating:4.8,years:6,reviews:22,phone:"+998 90 000 00 05",emoji:"🧑🏻‍🔧",image:"https://images.unsplash.com/photo-1631545806609-8e9e7f3c3b0a?auto=format&fit=crop&w=700&q=80",about:"Konditsioner o‘rnatish, tozalash va ta’mirlash."},
 {id:6,name:"Sardor Akbarov",job:"Quruvchi",city:"Samarqand",rating:4.7,years:10,reviews:19,phone:"+998 90 000 00 06",emoji:"👷🏻",image:"https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=700&q=80",about:"G‘isht terish, suvoq va qurilish ishlari."},
 {id:7,name:"Farrux Ergashev",job:"Santexnik",city:"Toshkent",rating:4.7,years:4,reviews:17,phone:"+998 90 000 00 07",emoji:"👨🏻‍🔧",image:"https://images.unsplash.com/photo-1504148455328-c376907d081c?auto=format&fit=crop&w=700&q=80",about:"Santexnika jihozlarini o‘rnatish va ta’mirlash."},
 {id:8,name:"Akmal Sobirov",job:"Duradgor",city:"Andijon",rating:4.6,years:5,reviews:15,phone:"+998 90 000 00 08",emoji:"🧔🏻",image:"https://images.unsplash.com/photo-1620626011761-996317b8d101?auto=format&fit=crop&w=700&q=80",about:"Eshik, rom va yog‘och mebellar tayyorlash."},
 {id:9,name:"Diyorbek Qodirov",job:"Payvandchi",city:"Toshkent",rating:4.8,years:7,reviews:21,phone:"+998 90 000 00 09",emoji:"👨🏽‍🏭",image:"https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?auto=format&fit=crop&w=700&q=80",about:"Darvoza, panjara va metall konstruksiyalar."},
 {id:10,name:"Shoxrux Islomov",job:"Mebel ustasi",city:"Samarqand",rating:4.7,years:8,reviews:18,phone:"+998 90 000 00 10",emoji:"🪚",image:"https://images.unsplash.com/photo-1538688423619-a81d3f23454b?auto=format&fit=crop&w=700&q=80",about:"Oshxona va uy mebellarini yasash, yig‘ish."},
 {id:11,name:"Temur Anvarov",job:"Tom ustasi",city:"Buxoro",rating:4.6,years:11,reviews:14,phone:"+998 90 000 00 11",emoji:"👷🏽",image:"https://images.unsplash.com/photo-1621905251189-08b45d6a269e?auto=format&fit=crop&w=700&q=80",about:"Tom yopish, ta’mirlash va gidroizolyatsiya."},
 {id:12,name:"Umidjon Sobirov",job:"Maishiy texnika ustasi",city:"Andijon",rating:4.9,years:6,reviews:25,phone:"+998 90 000 00 12",emoji:"🧑🏻‍🔧",image:"https://images.unsplash.com/photo-1581092921461-eab62e97a780?auto=format&fit=crop&w=700&q=80",about:"Kir yuvish mashinasi va maishiy texnikalarni ta’mirlash."}
];
const sectionHost=document.getElementById("professionSections");
const searchInput=document.getElementById("searchInput");
const citySelect=document.getElementById("citySelect");
const sortSelect=document.getElementById("sortSelect");
const resultsCount=document.getElementById("resultsCount");
const emptyState=document.getElementById("emptyState");
let activeCategory="all";

function card(m){
 return `<article class="master-card">
  <div class="master-photo"><img src="${m.image}" alt="${m.name}" loading="lazy" onerror="this.style.display='none';this.parentElement.classList.add('photo-fallback');this.parentElement.dataset.emoji='${m.emoji}'"><span class="rating">★ ${m.rating.toFixed(1)}</span></div>
  <div class="master-info"><h3>${m.name}</h3><p class="job">${m.job} · ${m.city}</p>
   <p class="experience">Tajriba: <b>${m.years} yil</b><span>${m.reviews} ta baho</span></p>
   <div class="card-actions"><button class="profile-btn" data-profile="${m.id}">Profilni ko‘rish</button><a class="phone-btn" href="tel:${m.phone.replaceAll(" ","")}">☎ Bog‘lanish</a></div>
  </div></article>`;
}
function render(){
 const q=searchInput.value.trim().toLocaleLowerCase("uz");
 let list=masters.filter(m=>(activeCategory==="all"||m.job===activeCategory)&&
 (citySelect.value==="all"||m.city===citySelect.value)&&
 `${m.name} ${m.job} ${m.city}`.toLocaleLowerCase("uz").includes(q));
 list.sort((a,b)=>sortSelect.value==="name"?a.name.localeCompare(b.name,"uz"):b.rating-a.rating);
 resultsCount.textContent=`${list.length} ta usta`;
 emptyState.hidden=list.length>0;
 const groups=activeCategory==="all"?[...new Set(list.map(m=>m.job))]:[activeCategory];
 sectionHost.innerHTML=groups.map(job=>{
  const items=list.filter(m=>m.job===job);
  if(!items.length)return "";
  return `<section class="profession-group"><div class="profession-title"><h3>${job}</h3><span>${items.length} nafar usta</span></div><div class="master-grid">${items.map(card).join("")}</div></section>`;
 }).join("");
}
document.querySelectorAll(".category").forEach(btn=>btn.addEventListener("click",()=>{
 document.querySelector(".category.active")?.classList.remove("active");
 btn.classList.add("active");activeCategory=btn.dataset.category;render();
}));
document.getElementById("searchForm").addEventListener("submit",e=>{e.preventDefault();render();document.getElementById("ustalar").scrollIntoView({behavior:"smooth"});});
searchInput.addEventListener("input",render);citySelect.addEventListener("change",render);sortSelect.addEventListener("change",render);

const modal=document.getElementById("masterModal");
sectionHost.addEventListener("click",e=>{
 const btn=e.target.closest("[data-profile]");if(!btn)return;
 const m=masters.find(x=>x.id===Number(btn.dataset.profile));if(!m)return;
 document.getElementById("modalContent").innerHTML=`<div class="modal-person">${m.emoji}</div><span class="eyebrow">${m.job.toUpperCase()}</span><h3>${m.name}</h3><p>★ ${m.rating.toFixed(1)} · ${m.reviews} ta baho · ${m.city}</p><p>Tajriba: <b>${m.years} yil</b></p><p>${m.about}</p><a class="modal-call" href="tel:${m.phone.replaceAll(" ","")}">☎ ${m.phone}</a>`;
 modal.classList.add("open");modal.setAttribute("aria-hidden","false");
});
modal.addEventListener("click",e=>{if(e.target.hasAttribute("data-close")){modal.classList.remove("open");modal.setAttribute("aria-hidden","true");}});
document.addEventListener("keydown",e=>{if(e.key==="Escape")modal.classList.remove("open");});
document.getElementById("menuToggle").addEventListener("click",()=>document.getElementById("mainNav").classList.toggle("open"));
document.querySelectorAll(".main-nav a").forEach(a=>a.addEventListener("click",()=>document.getElementById("mainNav").classList.remove("open")));
document.getElementById("registrationForm").addEventListener("submit",e=>{
 e.preventDefault();
 const data=Object.fromEntries(new FormData(e.currentTarget).entries());
 document.getElementById("formMessage").textContent=`Rahmat, ${data.name}! Arizangiz demo tarzida qabul qilindi. Haqiqiy yuborish uchun server ulanishi kerak.`;
 e.currentTarget.reset();
});
render();
