<script setup>
import { ref } from 'vue'

let msgs = ref([])
let msg = ref('')

function mandaMsg() {
  if (msg.value !== "") {
    msgs.value.push(
      {
        id: geraId(),
        mensagem: msg.value,
        pessoa: 'cliente'
      }
    )
    msg.value = ""
  }

}

function geraId() {
  return Math.random().toString(36).substr(2, 9);
}
</script>

<template>
  <div class="screen-messages">
    <div class="message-atendente">
      <div class="msg-user"><strong>Atendente diz:</strong></div>
      <div class="msg-chat">Blabla blabla blabla</div>
    </div>
    <div class="message-atendente">
      <div class="msg-user"><strong>Atendente diz:</strong></div>
      <div class="msg-chat">Blabla blabla blabla</div>
    </div>
    <div v-for="mensagem in msgs" :key="mensagem.id" class="">
      <div class="sla">
        <div class="message-voce">
          <p class="voc-diz"><strong>Você diz:</strong></p>
          <div class="msg-chat">{{ mensagem.mensagem }}</div>
        </div>
      </div>
    </div>
  </div>
  <footer class="message">
    <input v-model="msg" class="newItemName" style="width: 75%;border: 3px solid black; height: 32px; padding: 7px;"
      placeholder="Digite sua mensagem..." type="text">
    <button class="chat-button" @click="mandaMsg"
      style="height: 32px;width: 22.7%;color: darkcyan ;font-weight: bold;font-family: Comic Sans MS;border: 3px solid black;background-image: repeating-linear-gradient(-45deg, rgba(0, 0, 0, 0.25), rgba(0, 0, 0, 0.25) 2px, transparent 2px, transparent 6px);background-size: 8px 8px; ">ENVIAR</button>
  </footer>
</template>

<style scoped>
.msg-chat {
  border: 3px solid black;
  padding: 5px 5px;
}

.chat-button {
  margin-left: 10px;
}

.screen-messages {
  border: 3px solid black;
  padding: 30px 20px;
  margin: 2%;
  height: 450px;
  overflow-y: auto;
}

.sla {
  display: flex;
  justify-content: flex-end;
}

.voc-diz {
  flex: auto;
  justify-content: flex-end;
  text-align: end;
  font-weight: 700;
}


.message-voce {
  min-width: 300px;
  margin-top: 1%;
  flex-direction: column;
}

.message-atendente {
  max-width: 300px;
  margin-top: 3%;
}



.message {
  margin: 2%;
}

input::placeholder {
  font-family: "Comic Sans MS", "Comic Sans", cursive;
  /* font-weight: bold; */
  font-size: medium;
  color: black;
}
</style>