<script>
  import { getDatabase, ref, push } from "firebase/database";
  import Footer from "../components/footer.svelte";
  import {
    getStorage,
    ref as refImage,
    uploadBytes,
    getDownloadURL,
  } from "firebase/storage";

  let title;
  let price;
  let description;
  let place;
  let files;

  const db = getDatabase();
  const storage = getStorage();
  function writeUserData(imgUrl) {
    push(ref(db, "items/"), {
      title: title,
      price: price,
      description: description,
      place: place,
      insertAt: new Date().getTime(),
      imgUrl,
    });
    window.location.hash = "/";
  }

  // 'file' comes from the Blob or File API
  //   uploadBytes(storageRef, file).then((snapshot) => {
  //     console.log("Uploaded a blob or file!");
  //   });

  const uploadFile = async () => {
    const file = files[0];
    const name = file.name;
    const imgRef = refImage(storage, name);
    await uploadBytes(imgRef, file);
    const url = await getDownloadURL(imgRef);
    return url;
  };

  const handleSubmit = async () => {
    const url = await uploadFile();
    writeUserData(url);
  };
</script>

<form id="write-form" on:submit|preventDefault={handleSubmit}>
  <div>
    <label for="image">이미지</label>
    <input type="file" bind:files id="image" name="image" />
  </div>
  <div>
    <label for="title">제목</label>
    <input type="text" id="title" name="title" bind:value={title} />
  </div>
  <div>
    <label for="price">가격</label>
    <input type="number" id="price" name="price" bind:value={price} />
  </div>
  <div>
    <label for="description">설명</label>
    <input
      type="text"
      id="description"
      name="description"
      bind:value={description}
    />
  </div>
  <div>
    <label for="place">장소</label>
    <input type="text" id="place" name="place" bind:value={place} />
  </div>
  <div>
    <button class="write-button" type="submit">완료!</button>
  </div>
</form>

<Footer location="write" />

<style>
  .write-button {
    background-color: yellow;
  }
</style>
