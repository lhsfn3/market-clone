<script>
  import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
  import { user$ } from "../store";

  const provider = new GoogleAuthProvider();
  const auth = getAuth();

  const loginWithgoogle = async () => {
    try {
      const result = await signInWithPopup(auth, provider);
      const credential = GoogleAuthProvider.credentialFromResult(result);
      const token = credential.accessToken;
      const user = result.user;
      user$.set(user);
      localStorage.setItem("token", token);
    } catch (error) {
      console.log(error);
    }
  };
</script>

<div>
  {#if $user$}
    <div>{$user$?.displayName}로그인 됨</div>
  {/if}
  <div>로그인하기</div>
  <button class="login-btn" on:click={loginWithgoogle}>
    <div>Google로 로그인하기</div>
  </button>
</div>

<style>
  .login-btn {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 200px;
    height: 30px;
    background-color: white;
  }
</style>
