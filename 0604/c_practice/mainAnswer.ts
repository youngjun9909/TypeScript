{
  const fetchUserDataBtn = document.getElementById('fetchUserData')!
.addEventListener('click', async () => {
  const userDataDiv = document.getElementById('userData') as HTMLDivElement
  const userIdElement = document.getElementById('userId') as HTMLInputElement
  
      const userId = userIdElement ? userIdElement.value : '';
  
      const response = await fetch(`https://jsonplaceholder.typicode.com/users/${userId}`)
      
  try {
    userDataDiv.innerHTML = '<p>비동기 작업 처리중...</p>'

    
    if(!response.ok)
      throw new Error('비동기 작업 처리 실패')

    const user = await response.json();

    userDataDiv.innerHTML = `
      <h2>User Details</h2>
      <p>Id: ${user.id}</p>
      <p>Name: ${user.name}</p>
      <p>Email: ${user.email}</p>
      <p>Username: ${user.username}</p>
      <p>Address: ${user.address.street}, ${user.address.city}</p>
    `

  }catch(error) {
    userDataDiv.innerHTML = `<p>${error}</p>`
  }
})

}