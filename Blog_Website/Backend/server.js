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
