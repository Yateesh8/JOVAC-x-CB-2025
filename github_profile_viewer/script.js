fetch("https://api.github.com/users/Yateesh8")
  .then(res => res.json())
  .then(data => {
    document.getElementById("profile").innerHTML = `
      <img src="${data.avatar_url}" alt="Avatar">
      <h2>${data.name || data.login}</h2>
      <a href="${data.html_url}" target="_blank">
        <img src="https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png" 
             alt="GitHub">
        Visit GitHub
      </a>
    `;
  });
