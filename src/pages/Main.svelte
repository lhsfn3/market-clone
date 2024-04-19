<script>
  let hour = new Date().getHours();
  let min = new Date().getMinutes();

  setInterval(() => (min = min + 1), 1000);
</script>

<header>
  <div class="info-bar">
    <div class="info-bar__time">{hour}:{min}</div>
    <div class="info-bar__icons">
      <img src="assets/chart-bar.svg" alt="" />
      <img src="assets/wifi.svg" alt="" />
      <img src="assets/battery.svg" alt="" />
    </div>
  </div>
  <div class="menu-bar">
    <div class="menu-bar__location">
      역삼1동
      <img src="assets/location-arrow-down.svg" alt="" />
    </div>
    <div class="menu-bar__icons">
      <img src="assets/search.svg" alt="" />
      <img src="assets/menu.svg" alt="" />
      <img src="assets/alert.svg" alt="" />
    </div>
  </div>
</header>

<main>
  <a href="#/Write" class="write-btn">+ 글쓰기</a>
</main>

<footer>
  <div class="footer-block">
    <div class="footer-icons">
      <div class="footer-icon__img">
        <img src="assets/home.svg" alt="" />
      </div>
      <div class="footer-icons__dsc">홈</div>
    </div>
    <div class="footer-icons">
      <div class="footer-icon__img">
        <img src="assets/chart-bar.svg" alt="" />
      </div>
      <div class="footer-icons__dsc">동네생활</div>
    </div>
    <div class="footer-icons">
      <div class="footer-icon__img">
        <img src="assets/location.svg" alt="" />
      </div>
      <div class="footer-icons__dsc">내 근처</div>
    </div>
    <div class="footer-icons">
      <div class="footer-icon__img">
        <img src="assets/chat.svg" alt="" />
      </div>
      <div class="footer-icons__dsc">채팅</div>
    </div>
    <div class="footer-icons">
      <div class="footer-icon__img">
        <img src="assets/user.svg" alt="" />
      </div>
      <div class="footer-icons__dsc">나의 당근</div>
    </div>
  </div>
</footer>
<div class="media-info-msg">화면 사이즈를 줄여주세요!</div>

<style>
  .info-bar__time {
    color: blue;
  }
</style>
