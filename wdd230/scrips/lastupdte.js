
  const date1 = document.querySelector("#date1");
  try {
    const options = {
      weekday: "short",
      day: "numeric",
      month: "long",
      year: "numeric"
    };
    date1.innerHTML = `Last Update: <span class="highlight">${new Date().toLocaleDateString("en-UK", options)}</span>`;
  } catch (e) {
    alert("Error with code or your browser does not support Locale");
  }
    
  const date = new Date();
 const jsYear = document.getElementById("y-js");
 jsYear.innerHTML = date.getFullYear();
