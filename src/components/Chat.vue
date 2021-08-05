<template>
  <div class="main">
    <div class="chatting-content" ref="chattingContent">
      <!-- 信息展示 -->
      <div v-for="item of msg" :key="item.date">
        <div v-if="item.self" class="chatting-item self">
          <div class="msg-date"> {{ item.date }}</div>
          <div class="msg-from"> <img src="../img/logo2.svg" alt="" /> </div>
          <div class="msg-content">{{ item.content }}</div>
        </div>

        <div v-else class="chatting-item other">
          <div class="msg-date"> {{ item.date }}</div>
          <div class="msg-from"> <img src="../img/logo1.svg" alt="" /> </div>
          <div class="msg-content">{{ item.content }}</div>
        </div>
      </div>
    </div>
    
    <!-- 输入框 -->
    <div class="chatting-input">
      <Input type="textarea" :rows="1" class="textarea" v-model="inputContent" placeholder="请输入您的疑问 ..."></Input>
      <Button @click="send">发送</Button>
    </div>
  </div>
</template>

<script>

export default {
  name: "Chat",

  data() {
    return {
      ws: null,
      inputContent: "",
      msg: localStorage.msgs && JSON.parse(localStorage.msgs) || [], 
    };
  },
  mounted() {
    // 滚动条置底
    this.$refs.chattingContent.scrollTop = this.$refs.chattingContent.scrollHeight;

    // ws 连接对象
    this.ws = new WebSocket("ws://localhost:8999/message");

    // 建立 ws 连接
    this.ws.onopen = (event) => {
      console.log("Successfully connected to the echo websocket server...", event)
      this.handleScroll()
    }

    // 接收消息
    this.ws.onmessage = (event) => {
      this.msg.push({
        date: this.moment().format("YYYY-MM-DD HH:mm:ss"),
        content: event.data,
        self: false,
      });

      // 要用 nextTick 设置 scrollTop 才不会失效
      this.handleScroll()
    }
  },
  watch: {
    msg(val) {
      localStorage.msgs = JSON.stringify(val);
    }
  },
  methods: {
    send() {
      // 发送消息
      this.msg.push({
        date: this.moment().format("YYYY-MM-DD HH:mm:ss"),
        content: this.inputContent,
        self: true,
      });
      
      this.ws.send(this.inputContent);
      this.handleScroll()
      this.inputContent = ""
    },

    handleScroll(){
      this.$nextTick(() => {
        this.$refs.chattingContent.scrollTop = this.$refs.chattingContent.scrollHeight;
      })
    }
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.main{
  background-color: #eee;
  height: 1050px;
  width: 40%;
  margin: auto;
}

.chatting-content {
  flex: 1;
  width: 100%;
  margin: auto;
  height: 1000px;
  background-color: rgba(0, 0, 0, 0.1);
  overflow: auto;
}

.chatting-item {
  padding: 10px;
  display: inline;
}

.msg-from {
  display: flex;
  align-items: center;
}

.msg-content {
  margin-top: -30px;
  background-color: white;
  width: 200px;
  padding: 6px 10px;
  border-radius: 10px;
}

.msg-date {
  text-align: center;
  color: gray;
  font-size: 80%;
}

img {
  width: 30px;
  height: 30px;
  border-radius: 15px;
}

/* self msg */
.self .msg-from {
  display: flex;
  justify-content: flex-end;
  align-items: center;
}

.self .msg-content {
  float: right;
  word-wrap: break-word;
  word-break: break-all;
  margin-right: 35px;
}

/* other msg */
.other .msg-from {
  display: flex;
  justify-content: flex-start;
  align-items: center;
}

.other .msg-content {
  margin-left: 35px;
  word-wrap: break-word;
  word-break: break-all;
}

/* 输入区域 */
.chatting-input {
  position: relative;
  bottom: 5px;
  display: flex;
  width: 100%;
  margin-top: 12px;
}

.chatting-input .textarea {
  flex: 1;
  padding-left: 5px;
  padding-right: 3px;
  font-size: 1.4rem;
}

.chatting-input button {
  width: 60px;
  height: 32px;
  background-color: #4AD295;
  color: white;
  font-size: 16px;
  margin-top: 2px;
  margin-right: 5px;
}
</style>
