// گرفتن المنت های html
const toggleBtn = document.getElementById("toggleTheme") ;

// اضافه کردن رویداد کلیک به دکمه
toggleBtn.addEventListener("click" , function() {
  // بررسی اینکه ایا بدنه بادی کلاس بگراند لایت را دارد یا نه
  if(document.body.classList.contains("bg-light")) {
    // اگر داشت ان را حذف و کلاس های تاریک را اضافه میکنیم
    document.body.classList.remove("bg-light" , "text-dark") ;
    document.body.classList.add("bg-dark" , "text-light") ;
    // متن دکمه را تغییر میدهیم
    toggleBtn.textContent = "تغییر به حالت روشن" ;
    // اگر داشت یعنی تاریک بود برمیگردانیم به حالت روشن
  }else {
    document.body.classList.remove("bg-dark" , "text-light") ;
    document.body.classList.add("bg-light" , "text-dark") ;
    toggleBtn.textContent = "تغییر به حالت تاریک" ;
  }
}) ;