function toggleLang() {
  const current = document.getElementById("headline").textContent;
  if (current.includes("healthy")) {
    document.getElementById("headline").textContent = "نصائح لحمل صحي";
    document.getElementById("subtext").textContent = "تعرفي على الحمل واحصلي على نصائح حول التغذية، الأعراض، والرعاية السابقة للولادة.";
  } else {
    document.getElementById("headline").textContent = "Get tips for a healthy pregnancy";
    document.getElementById("subtext").textContent = "Learn more about pregnancy and get advice on topics like nutrition, symptoms, and prenatal care.";
  }
}
