<template>
  <div>
    <Layout style="height:1000px;width:100%;">
      <Header>
        <Menu mode="horizontal" theme="dark" >
          <MenuItem to="/chat" name='chat'>
            <Tooltip content="问答" trigger="hover" placement="right" transfer>
              <Icon type="ios-cube-outline"></Icon>&nbsp;问答
            </Tooltip>
          </MenuItem>
        </Menu>
      </Header>
      <Layout>
        <router-view></router-view>
      </Layout>
    </Layout>

  </div>
</template>

<script>
// import Chat from './components/Chat.vue'

export default {
  name: 'App',
  components: {
  }
}
</script>

<style>

</style>
