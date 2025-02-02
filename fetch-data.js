async function fetchUserData() {
  const apiUrl = 'https://jsonplaceholder.typicode.com/users'
  const dataContainer = document.getElementById("api-data")

  try {
    const response = await fetch(apiUrl)
    const users = await response.json()
    dataContainer.innerHTML = ""
    const userList = document.createElement('ul')

    users.forEach(function (user) {
      console.log(user)
      let li = document.createElement("li")
      li.innerHTML = user.name
      userList.appendChild(li)
    })

    dataContainer.appendChild(userList)
  } catch (error) {
    dataContainer.innerHTML = ""
    dataContainer.innerHTML = "Failed to load user data."
  }
}

document.addEventListener("DOMContentLoaded", fetchUserData)