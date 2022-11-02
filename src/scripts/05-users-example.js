let users = [];
fetch('https://jsonplaceholder.typicode.com/users')
  .then(response => response.json())
  .then(json => (users = json));

setTimeout(() => {
  users = users.map((user, index) => {
    user.avatar = `https://source.unsplash.com/100x120/?random=${index}&avatar,person,boy,girl`;
    return user;
  });
  console.log(users);
  loadData();
}, 1000);
//////////////////////////////////////////////////////////////////////////////////////////////////

// Object references
let refs = {
  userList: document.querySelector('.js-list-user'),
  userCard: document.querySelector('.js-user-card'),
  backDrop: document.querySelector('.js-backdrop'),
  userInfo: document.querySelector('.js-user-info'),
  firstModal: document.querySelector('.js-user-info'),
  secondModal: document.querySelector('.js-form-regestration'),
};

function loadData() {
  const markup = users
    .map(user => {
      return `
<li class="user-card js-user-card" data-id=${user.id}>
  <div class="snip1344">
    <img src="https://source.unsplash.com/100x100/?random=${user.id}&avatar,person,boy,girl" alt="profile-sample1" class="background"/>
    <img src="https://source.unsplash.com/100x100/?random=${user.id}&avatar,person,boy,girl" alt="profile-sample1" class="profile"/>
    <figcaption>
      <h3>${user.name}<span>${user.phone}</span></h3>
        <div>@${user.username}</div>
    </figcaption>
  </div>
</li>
    `;
    })
    .join('');

  refs.userList.innerHTML = markup;
}

refs.userList.addEventListener('click', e => {
  const userCard = e.target.closest('li');
  if (!userCard) return;

  const userId = userCard.dataset.id;
  const user = users.find(user => user.id === +userId);

  const markup = `
  <div class="box box-gorizont">
    <img src="${user.avatar}" alt="avatar">
    <div class="box">
        <h1>${user.name}</h1>
        ${user.email},<br> ${user.website},<br> ${user.phone}
        <br>
        <input type="button" value="Delete" class="js-delete-user-btn" data-id="${user.id}">
    </div>
  </div>
  `;

  refs.firstModal.innerHTML = markup;

  document.body.classList.add('show-modal');
});

refs.backDrop.addEventListener('click', e => {
  if (e.target === e.currentTarget)
    document.body.classList.remove('show-modal');
});

refs.firstModal.addEventListener('click', e => {
  if (e.target.nodeName === 'INPUT') {
    const id = +e.target.dataset.id;
    console.log(`delete - ${id}`);

    users = users.filter(user => user.id !== id);
    loadData();
    document.body.classList.remove('show-modal');
  }
});

//==========================================

/* 
<li class="user-card js-user-card" data-id=${user.id}>
  <div class="snip1344">
    <img src="https://source.unsplash.com/100x100/?random=${user.id}&avatar,person,boy,girl" alt="profile-sample1" class="background"/>
    <img src="https://source.unsplash.com/100x100/?random=${user.id}&avatar,person,boy,girl" alt="profile-sample1" class="profile"/>
    <figcaption>
      <h3>${user.name}<span>${user.phone}</span></h3>
        <div>@${user.username}</div>
    </figcaption>
  </div>
</li>
*/

/* 
<div class="box box-gorizont">
    <img src="${user.avatar}" alt="avatar">
    <div class="box">
        <h1>${user.name}</h1>
        ${user.email},<br> ${user.website},<br> ${user.phone}
        <br>
        <input type="button" value="Delete" class="js-delete-user-btn">
    </div>
</div>
*/
