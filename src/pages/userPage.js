import abstractArt from '../img/abstract-art.jpg';
import time from '../img/time.svg';
import avatar from '../img/avatar.jpg';
import telegram from '../img/telegram.svg';
import hh from '../img/hh.svg';
import twitter from '../img/twitter.svg';
import profile from '../img/profile.svg';
import balance from '../img/balance.svg';
import connections from '../img/connections.svg';
import friends from '../img/friends.svg';
import events from '../img/settings.svg';
import settings from '../img/settings.svg';

export default function () {
  const markup = `
  <div class="row p-4">
  <div class="col-lg-9 p-0">
    <div class="p-4 col-lg-12 bg-white" style="display: inline-block">
      <img
        src='${abstractArt}'
        class="img-fluid col-12"
        alt="abstract"
      />
    </div>
    <div class="accordion accordion-flush mt-4" id="sunset">
      <div class="accordion-item">
        <h2 class="accordion-header">
          <button
            class="accordion-button collapsed"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#flush-sunset"
            aria-expanded="false"
            aria-controls="flush-sunset"
          >
            Sunset Sunset Sunset
            <div class="d-flex">
              <img src='${time}' alt="time" />
              <span>53 minutes ago</span>
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
    <div class="accordion accordion-flush mt-4 mb-4" id="morning">
      <div class="accordion-item">
        <h2 class="accordion-header">
          <button
            class="accordion-button collapsed"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#flush-morning"
            aria-expanded="false"
            aria-controls="flush-morning"
          >
            Sunset Sunset Sunset
            <div class="d-flex">
              <img src='${time}' alt="time" />
              <span>53 minutes ago</span>
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
  </div>
  <div class="col-lg-3 d-fl flex-column">
    <div
      class="bg-white p-3 d-flex flex-column justify-content-center align-items-center"
    >
      <img
        src='${avatar}'
        class="rounded-circle img-fluid"
        style="width: 132px; height: 132px"
        alt="Аватар"
      />
      <span>Hanna Dorman</span>
      <span>UX/UI designer</span>
      <div class="d-fl">
        <a>
          <img src='${telegram}' alt="telegram" />
        </a>
        <a>
          <img src='${hh}' alt="hh" />
        </a>
        <a>
          <img src='${twitter}' alt="twitter" />
        </a>
      </div>
    </div>
    <div
      class="accordion accordion-flush pt-3"
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
          <div class="accordion-body">
            <a class="nav-link" href="#">
              <img src='${profile}' alt="profile" />
              My profile
            </a>
            <a class="nav-link" href="#">
              <img src='${balance}' alt="balance" />
              Balance
              <span>$ 1,430</span>
            </a>
            <a class="nav-link" href="#">
              <img src='${connections}' alt="connections" />
              Connections
              <span>29</span>
            </a>
            <a class="nav-link" href="#">
              <img src='${friends}' alt="friends" />
              Friends
            </a>
            <a class="nav-link" href="#">
              <img src='${events}' alt="events" />
              Events
            </a>
            <a class="nav-link" href="#">
              <img src='${settings}' alt="settings" />
              Account settings
            </a>
          </div>
        </div>
      </div>
    </div>
    <div class="accordion accordion-flush pt-3" id="message">
      <div class="accordion-item">
        <h2 class="accordion-header">
          <button
            class="accordion-button collapsed"
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
          <div class="accordion-body">
            <div class="form-floating">
              <textarea
                class="form-control"
                placeholder="Leave a comment here"
                id="floatingTextarea"
              ></textarea>
              <label for="floatingTextarea">Enter your message...</label>
            </div>
            <div class="d-grid gap-2 pt-2">
              <button class="btn btn-primary" type="button">Save</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>`;
  document.querySelector('#app').innerHTML = markup;
}
