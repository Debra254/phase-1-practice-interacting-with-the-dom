let counter = document.getElementById('counter');
const plusBtn = document.getElementById('plus');
const minusBtn = document.getElementById('minus');
const heartBtn = document.getElementById('heart');
const pauseBtn = document.getElementById('pause');
const commentForm = document.getElementById('comment-form');
const commentInput = document.getElementById('comment-input');
const commentList = document.getElementById('list');
const likesList = document.querySelector('.likes');

let count = parseInt(counter.innerText);
let timer = setInterval(incrementCounter, 1000);
let isPaused = false;
let likes = {};

function incrementCounter() {
  count++;
  counter.innerText = count;
}


plusBtn.addEventListener('click', () => {
  count++;
  counter.innerText = count;
});

minusBtn.addEventListener('click', () => {
  count--;
  counter.innerText = count;
});


heartBtn.addEventListener('click', () => {
  likes[count] = (likes[count] || 0) + 1;
  
  let existingLike = document.getElementById(`like-${count}`);
  if (existingLike) {
    existingLike.innerText = `${count} has been liked ${likes[count]} time(s)`;
  } else {
    let li = document.createElement('li');
    li.id = `like-${count}`;
    li.innerText = `${count} has been liked ${likes[count]} time(s)`;
    likesList.appendChild(li);
  }
});


pauseBtn.addEventListener('click', () => {
  if (!isPaused) {
    clearInterval(timer);
    pauseBtn.innerText = 'resume';
    plusBtn.disabled = true;
    minusBtn.disabled = true;
    heartBtn.disabled = true;
    isPaused = true;
  } else {
    timer = setInterval(incrementCounter, 1000);
    pauseBtn.innerText = 'pause';
    plusBtn.disabled = false;
    minusBtn.disabled = false;
    heartBtn.disabled = false;
    isPaused = false;
  }
});


commentForm.addEventListener('submit', (e) => {
  e.preventDefault();
  const comment = document.createElement('p');
  comment.innerText = commentInput.value;
  commentList.appendChild(comment);
  commentInput.value = '';
});
