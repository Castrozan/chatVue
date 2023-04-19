
<template>
  <div class="chat-screen">
    <header class="header">
      <h2 class="chat-title">Atendimento on-line</h2>
    </header>
    <main class="mx-7 mt-28 flex-grow lg:mx-6">
      <div class="mx-auto max-w-5xl">
        <RouterView />
      </div>
    </main>
  </div>
</template>

<style scoped>
.header {
  border: 2px solid black;
  color: blueviolet;
}

.chat-screen {
  background-color: rgb(255, 255, 255);
  border: 2px solid black;
  color: black;
  font-family: "Comic Sans MS", "Comic Sans", cursive;
}

.chat-title {
  padding: 7px;
}
</style>