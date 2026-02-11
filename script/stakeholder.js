document.getElementById("logo").addEventListener("click", () => {
  window.location.href = "../index.html";
});

async function init() {
  updateCount();
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
