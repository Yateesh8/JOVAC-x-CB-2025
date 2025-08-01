// Thanksgiving
function showMessage() {
  alert("Thank you for visiting my blog!");
  
}
// Show a popup alert
function showMessage() {
  alert("Hello Tezric! Thanks for visiting my blog.");
  console.log("Button clicked!");
  document.getElementById("output").innerText = "Message shown on the page!";
}

// Show today's date
function showDate() {
  const today = new Date();
  document.getElementById("date").innerText = "Today's date is: " + today.toDateString();
}

// Change background color randomly
function changeBackground() {
  const colors = ["#f3f3f3", "#d4edda", "#d1ecf1", "#fff3cd", "#f8d7da"];
  const randomColor = colors[Math.floor(Math.random() * colors.length)];
  document.body.style.backgroundColor = randomColor;
}

// Show custom user input
function displayUserMessage() {
  const userInput = document.getElementById("userInput").value;
  document.getElementById("userMessage").innerText = userInput || "You didn't type anything!";
}
function submitBlog() {
  const title = document.getElementById("title").value;
  const content = document.getElementById("content").value;

  if (!title || !content) {
    document.getElementById("blogStatus").innerText = "Please fill in all fields!";
    return;
  }

  fetch("http://localhost:3000/api/blogs", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ title, content })
  })
  .then(res => res.json())
  .then(data => {
    document.getElementById("blogStatus").innerText = "✅ Blog posted successfully!";
    console.log(data);
  })
  .catch(err => {
    document.getElementById("blogStatus").innerText = "❌ Failed to post blog.";
    console.error(err);
  });
}

function showSection(section) {
  const sections = ["home", "about", "contact"];
  sections.forEach(id => {
    const el = document.getElementById(id);
    if (el) el.style.display = id === section ? "block" : "none";
  });
}
