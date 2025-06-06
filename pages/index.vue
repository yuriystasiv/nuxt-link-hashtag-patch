<template>
  <div class="table-of-contents-wrapper">
    <div class="left-side">
      <section>
        <h2 id="section-1">section 1</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam,
          quos.
        </p>
      </section>
      <section>
        <h2 id="section-2">section 2</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam,
          quos.
        </p>
      </section>
      <section>
        <h2 id="section-3">section 3</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam,
          quos.
        </p>
      </section>
      <section>
        <h2 id="section-4">section 4</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam,
          quos.
        </p>
      </section>
    </div>
    <div class="right-side">
      <div class="right-side-links">
        <NuxtLink to="#section-1">section 1</NuxtLink>
        <NuxtLink to="#section-2">section 2</NuxtLink>
        <NuxtLink to="#section-3">section 3</NuxtLink>
        <NuxtLink to="#section-4">section 4</NuxtLink>
      </div>
    </div>
  </div>
</template>

<style>
.table-of-contents-wrapper {
  display: flex;
  flex-direction: row;
  gap: 20px;
}
.left-side {
  flex: 1;
  padding: 20%;
  border: 1px solid black;
}
.right-side {
  flex: 1;
  position: sticky;
  top: 0;
}
.right-side-links {
  position: sticky;
  top: 0;
}
.left-side section {
  margin-bottom: 20px;
  height: 45vh;
  border: 1px solid red;

  h2 {
    scroll-margin-top: 300px;
    scroll-padding-top: 300px;
  }
}
.right-side a {
  display: block;
  margin-bottom: 10px;
}
</style>
