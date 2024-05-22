import abstractArt from '../../img/abstract-art.jpg';
import chat from '../../img/chat.svg';
import viewed from '../../img/viewed.svg';
import time from '../../img/time.svg';
import avatar from '../../img/avatar.jpg';
import telegram from '../../img/telegram.svg';
import hh from '../../img/hh.svg';
import twitter from '../../img/twitter.svg';
import profile from '../../img/profile.svg';
import balance from '../../img/balance.svg';
import connections from '../../img/connections.svg';
import friends from '../../img/friends.svg';
import events from '../../img/events.svg';
import settings from '../../img/settings.svg';

function renderContainer() {
  const markup = `
    <div class="wrapper">
      <div class="userBlogContent">
        <div id="userBlog"></div>
        <div id="accordion"></div>
      </div>
      <div id="sideBar">
         <div id="nav"></div>
         <div id="createMessage"></div>
       </div>
    </div>`;
  document.querySelector('#app').insertAdjacentHTML('afterbegin', markup);
}

function renderBlog() {
  const userBlog = document.querySelector('#userBlog');

  const markup = `
        <img src='${abstractArt}' class="img-fluid col-12" alt="abstract"/>
        <div class="commentBlock">
            <img src='${chat}' alt="chat">
            <a class="commentAuthor" href="#">Jason Anderson</a> commented:
            <P class="commentText">
                Don’t sit and wait. Get out there, feel life. 
                Touch the sun, and immerse in the sea. Keep love in your heart. 
                A life without it is like a sunless garden when the flowers are dead. 
                Because summer is passion, memories, light breeze, 
                the sun that appears on the skin and caresses the face.
                <span class="date">– Jason, 10:30 am</span>
            </P>
            <div class="details">
                <span class="viewsCount">
                <img src='${viewed}' alt="viewed">
                    <span>432</span>
                </span>
                <span class="commentCount">
                    <img src='${chat}' alt="viewed">
                    <span>47</span>
                </span>
            </div>
  `;
  userBlog.insertAdjacentHTML('afterbegin', markup);
}

function renderAccordion() {
  const accordionBlock = document.querySelector('#accordion');

  const markup = `
      <div class="accordion accordion-flush" id="sunset">
        <div class="accordion-item">
          <h2 class="accordion-header">
            <button
              class="accordion-button accordionButtonBlog collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#flush-sunset"
              aria-expanded="false"
              aria-controls="flush-sunset"
            >
              
              <div>Sunset Sunset Sunset</div>
              <div class="d-flex align-items-center time">
                <img src='${time}' alt="time" />
                <span class="minutes">53 minutes ago</span>
              </div>
            </button>
          </h2>
          <div
            id="flush-sunset"
            class="accordion-collapse collapse"
            data-bs-parent="#sunset"
          >
            <div class="accordion-body">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Perspiciatis ipsam saepe dignissimos sint natus cum earum
              molestias consectetur ipsum fuga ea iste quidem explicabo,
              optio autem, culpa aperiam, dolorum maxime.
            </div>
          </div>
        </div>
      </div>
      <div class="accordion accordion-flush" id="morning">
        <div class="accordion-item">
          <h2 class="accordion-header">
            <button
              class="accordion-button accordionButtonBlog collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#flush-morning"
              aria-expanded="false"
              aria-controls="flush-morning"
            >
              <div>Morning of Siberia</div>
              <div class="d-flex align-items-center time">
                <img src='${time}' alt="time" />
                <span class="minutes">53 minutes ago</span>
              </div>
            </button>
          </h2>
          <div
            id="flush-morning"
            class="accordion-collapse collapse"
            data-bs-parent="#morning"
          >
            <div class="accordion-body">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Perspiciatis ipsam saepe dignissimos sint natus cum earum
              molestias consectetur ipsum fuga ea iste quidem explicabo,
              optio autem, culpa aperiam, dolorum maxime.
            </div>
          </div>
        </div>
      </div>
  `;
  accordionBlock.insertAdjacentHTML('afterbegin', markup);
}

function renderProfileCard() {
  const profileCard = document.querySelector('#sideBar');

  const markup = `   
      <div
        class="profileCard"
      >
        <img
          src='${avatar}'
          class="rounded-circle img-fluid"
          style="width: 132px; height: 132px"
          alt="Аватар"
        />
        <span class="userName">Hanna Dorman</span>
        <span class="speciality">UX/UI designer</span>
        <div class="d-fl mt-3">
          <a>
            <img src='${telegram}' alt="telegram" />
          </a>
          <a>
            <img src='${hh}' alt="hh" />
          </a>
          <a>
            <img src='${twitter}' alt="twitter" />
          </a>
        </div>`;

  profileCard.insertAdjacentHTML('afterbegin', markup);
}
function renderNavigation() {
  const navigation = document.querySelector('#nav');
  const markup = ` 
    <div
     class="accordion accordion-flush"
     id="accordionFlushExample"
      >
        <div class="accordion-item">
          <h2 class="accordion-header">
            <button
              class="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#flush-collapseOne"
              aria-expanded="false"
              aria-controls="flush-collapseOne"
            >
              Navigation
            </button>
          </h2>
          <div
            id="flush-collapseOne"
            class="accordion-collapse collapse"
            data-bs-parent="#accordionFlushExample"
          >
            <div class="accordion-body accordionBodyNav">
                <a class="nav-link d-flex align-items-center" href="#">
                  <div class="iconWrapper">
                    <img src='${profile}' alt="profile" />
                  </div>
                  <span class="linkText">My profile</span>
                </a>
              <a class="nav-link d-flex align-items-center justify-content-between" href="#">
                <div class="d-flex align-items-center">
                  <div class="iconWrapper">
                    <img src='${balance}' alt="balance" />
                  </div>
                  <span class="linkText">
                    Balance
                  </span>
                </div>
                <span class="balance">$ 1,430</span>
              </a>
              <a class="nav-link navLink" href="#">
                <div class="d-flex align-items-center">
                <div class="iconWrapper">
                  <img src='${connections}' alt="connections" />
                </div>
                   <span class="linkText">Connections</span>
                </div>
                <span class="conncetedEntities">29</span>
              </a>
              <a class="nav-link navLink friends" href="#">
                <span class="d-flex align-items-center">
                  <div class="iconWrapper">
                    <img src='${friends}' style="width:20px; height:18px" alt="friends" />
                  </div>
                  <span class="linkText">Friends</span>
                </span>
              </a>
              <div class="customBorder"></div>
              <a class="nav-link events navLink" style="padding-top:10px" href="#">
                <span class="d-flex align-items-center">
                  <div class="iconWrapper">
                    <img src='${events}' alt="events" />
                  </div>
                  <span class="linkText">Events</span>
                </span>
                <span class="eventsEntities">45</span>
              </a>
              <a class="nav-link navLink" href="#">
                <span class="d-flex align-items-center">
                  <div class="iconWrapper">
                    <img src='${settings}' style="width:19px" alt="settings" />
                  </div>
                  <span class="linkText">Account settings</span>
                </span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>`;

  navigation.insertAdjacentHTML('afterbegin', markup);
}

function renderMessage() {
  const createMessage = document.querySelector('#createMessage');
  const markup = `
    <div class="accordion accordion-flush" id="message">
        <div class="accordion-item">
          <h2 class="accordion-header">
            <button
              class="accordion-button accordionbuttonMessage collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#flush-thoughts"
              aria-expanded="false"
              aria-controls="flush-thoughts"
            >
              Share your thoughts
            </button>
          </h2>
          <div
            id="flush-thoughts"
            class="accordion-collapse collapse"
            data-bs-parent="#thoughts"
          >
            <div class="accordion-body accordionMessageBody">
            <div class="form-floating">
                <textarea
                  class="form-control textarea"
                  placeholder="Leave a comment here"
                  id="floatingTextarea"
                >
                </textarea>
             <label for="floatingTextarea">Enter your message...</label>
                </div>
                    <div class="d-grid gap-2 pt-2">
                    <button class="btn btn-primary saveBtn" type="button">Save</button>
                </div>
            </div>
          </div>
        </div>
      </div>
    `;

  createMessage.insertAdjacentHTML('afterend', markup);
}

export function renderPage() {
  document.querySelector('#app').innerHTML = '';
  renderContainer();
  renderBlog();
  renderAccordion();
  renderProfileCard();
  renderNavigation();
  renderMessage();
}
