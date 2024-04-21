<script>
  export let location;
  const moveToHome = () => {
    window.location.hash = "/";
  };

  const moveToMyPage = () => {
    window.location.hash = "/my";
  };
</script>

<footer>
  <div class="footer-block">
    <button class="footer-icons" on:click={moveToHome}>
      <div class="footer-icon__img">
        {#if location === "home"}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            class="w-6 h-6"
          >
            <path
              d="M11.47 3.841a.75.75 0 0 1 1.06 0l8.69 8.69a.75.75 0 1 0 1.06-1.061l-8.689-8.69a2.25 2.25 0 0 0-3.182 0l-8.69 8.69a.75.75 0 1 0 1.061 1.06l8.69-8.689Z"
            />
            <path
              d="m12 5.432 8.159 8.159c.03.03.06.058.091.086v6.198c0 1.035-.84 1.875-1.875 1.875H15a.75.75 0 0 1-.75-.75v-4.5a.75.75 0 0 0-.75-.75h-3a.75.75 0 0 0-.75.75V21a.75.75 0 0 1-.75.75H5.625a1.875 1.875 0 0 1-1.875-1.875v-6.198a2.29 2.29 0 0 0 .091-.086L12 5.432Z"
            />
          </svg>
        {:else}
          <img src="assets/home.svg" alt="" />
        {/if}
      </div>

      <div class="footer-icons__dsc">홈</div>
    </button>
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
    <button class="footer-icons" on:click={moveToMyPage}>
      <div class="footer-icon__img">
        {#if location === "my"}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            class="w-6 h-6"
          >
            <path
              fill-rule="evenodd"
              d="M7.5 6a4.5 4.5 0 1 1 9 0 4.5 4.5 0 0 1-9 0ZM3.751 20.105a8.25 8.25 0 0 1 16.498 0 .75.75 0 0 1-.437.695A18.683 18.683 0 0 1 12 22.5c-2.786 0-5.433-.608-7.812-1.7a.75.75 0 0 1-.437-.695Z"
              clip-rule="evenodd"
            />
          </svg>
        {:else}
          <img src="assets/user.svg" alt="" />
        {/if}
      </div>
      <div class="footer-icons__dsc">나의 당근</div>
    </button>
  </div>
</footer>

<style>
  button {
    outline: none;
    border: none;
    background: none;
  }
</style>
