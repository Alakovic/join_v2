document.getElementById("logo").addEventListener("click", () => {
  window.location.href = "../index.html";
});

async function init() {
  updateCount();
  greet();
  setInterval(updateCount, 2000);
}

async function updateCount() {
  let count = await getEmailCount();
  document.getElementById("requestCount").textContent = count;
  let text = document.getElementById("request");
  let limitMsg = document.querySelector(".limit_message");

  if (count >= 10) {
    text.style.color = "red";
    limitMsg.style.display = "flex";
  } else {
    text.style.color = "";
    limitMsg.style.display = "none";
  }
}

async function getEmailCount() {
  let response = await fetch(
    "https://join-5677e-default-rtdb.europe-west1.firebasedatabase.app/emailCounter/count.json",
  );
  return (await response.json()) ?? 0;
}

function greet() {
  let greetElement = document.getElementById("greet");
  let currentHour = new Date().getHours();
  let greeting;
     if (currentHour >= 5 && currentHour < 12) {
        greeting = "Good morning";
    } else if (currentHour >= 12 && currentHour < 18) {
        greeting = "Good afternoon";
    } else {
        greeting = "Good evening";
    }
    greetElement.textContent = greeting;
}