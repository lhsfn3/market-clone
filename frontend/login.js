const form = document.querySelector("#login-form");

// let accessToken = null;

const handleSubmit = async (e) => {
  e.preventDefault();
  const formData = new FormData(form);
  const sha256Password = sha256(formData.get("password"));
  formData.set("password", sha256Password);
  console.log(formData);
  const res = await fetch("/login", {
    method: "POST",
    body: formData,
  });
  console.log(res.status);
  const data = await res.json();
  const accessToken = data.access_token;

  window.localStorage.setItem("token", accessToken);
  alert("로그인 되었습니다.");

  const infoDiv = document.querySelector("#info");
  infoDiv.innerHTML = "로그인 되었습니다";

  window.location.pathname = "/";

  //   const btn = document.createElement("button");
  //   btn.innerHTML = "상품 가져오기";
  //   btn.addEventListener("click", async () => {
  //     const res = await fetch("/items", {
  //       headers: {
  //         Authorization: `Bearer ${accessToken}`,
  //       },
  //     });
  //     const data = await res.json();
  //     console.log(data);
  //   });
  //   infoDiv.appendChild(btn);
  //   if (res.status === 200) {
  //     alert("로그인에 성공");
  //     // window.location.pathname = "/";
  //   } else if (res.status === 401) {
  //     alert("로그인 실패");
  //   }
};

form.addEventListener("submit", handleSubmit);
