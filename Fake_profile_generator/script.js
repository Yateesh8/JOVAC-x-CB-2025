async function generateProfile() {
  try {
    const response = await fetch('https://randomuser.me/api/');
    const data = await response.json();
    const user = data.results[0];

    const name = `${user.name.first} ${user.name.last}`;
    const age = user.dob.age;
    const location = `${user.location.city}, ${user.location.country}`;
    const avatar = user.picture.large;

    document.getElementById('name').textContent = name;
    document.getElementById('age').textContent = `Age: ${age}`;
    document.getElementById('location').textContent = `Location: ${location}`;
    document.getElementById('avatar').src = avatar;
  } catch (error) {
    alert("Failed to fetch profile. Please try again.");
    console.error(error);
  }
}
