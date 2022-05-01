const about = document.querySelector('.about');
const buttons = document.querySelectorAll('.tab-btn');
const articles = document.querySelectorAll('.content');

const createTabBtn = ({ id, title, classList }) => {
  const tabBtn = document.createElement('button');
  tabBtn.setAttribute('data-id', id);
  tabBtn.innerHTML = title;

  tabBtn.classList.add(...classList);

  return tabBtn;
};

const createBtnContainer = (content) => {
  const btnContainer = document.createElement('div');
  btnContainer.classList.add('btn-container');

  let tabBtns = [];

  content.forEach(({ id, title }, index) => {
    tabBtns.push(
      createTabBtn({
        id,
        title,
        classList: index === 0 ? ['tab-btn', 'active'] : ['tab-btn'],
      }),
    );
  });

  btnContainer.append(...tabBtns);

  return btnContainer;
};

const createContent = ({ id, title, text, classList }) => {
  const content = document.createElement('div');
  content.setAttribute('id', id);
  content.classList.add(...classList);

  const contentTitle = document.createElement('h4');
  contentTitle.innerHTML = title;

  const contentText = document.createElement('p');
  contentText.innerHTML = text;

  content.append(contentTitle);
  content.append(contentText);

  return content;
};

const createAboutContent = (content) => {
  const aboutContent = document.createElement('div');
  aboutContent.classList.add('about-content');

  let contentList = [];

  content.forEach(({ id, title, text }, index) => {
    contentList.push(
      createContent({
        id,
        title,
        text,
        classList: index === 0 ? ['content', 'active'] : ['content'],
      }),
    );
  });

  aboutContent.append(...contentList);

  return aboutContent;
};

const handleChangeActiveArticle = (e) => {
  const id = e.target.dataset.id;

  if (id) {
    // TODO: implement hide & show logic here
  }
};

const getContent = () => {
  // TODO: make API call to https://tabs-api.herokuapp.com/ to get a content
};

about.addEventListener('click', handleChangeActiveArticle);

window.addEventListener('load', async () => {
  const content = await getContent();
  about.append(createBtnContainer(content));
  about.append(createAboutContent(content));
});
