<template>
  <div class="navbar">
    <img class="logo" src="@/assets/common/logoone.png" alt="">

    <div class="user">
      <img src="../../assets/common/user.png" alt="">
      <span class="user-text">欢迎您, {{ UserInfo.userName }}</span>
    </div>

    <div class="goout">
      <span @click="goout">退出</span>
      <i class="el-icon-caret-bottom" />
    </div>

  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import { getUserInfo } from '@/api/user'

export default {
  components: {
  },
  data() {
    return {
      UserInfo: {}
    }
  },
  computed: {
    ...mapGetters([
      'sidebar',
      'avatar',
      'userId'
    ])
  },

  async created() {
    try {
      const { data } = await getUserInfo(this.userId)
      this.UserInfo = data
    } catch (error) {
      console.log(error)
    }
  },
  methods: {
    toggleSideBar() {
      this.$store.dispatch('app/toggleSideBar')
    },
    async logout() {
      await this.$store.dispatch('user/logout')
      this.$router.push(`/login?redirect=${this.$route.fullPath}`)
    },
    goout() {
      this.$store.commit('user/removeToken')
      this.$router.push('/login')
    }
  }
}
</script>

<style lang="scss" scoped>
.navbar {
  width: 100%;
  height: 60px;
  overflow: hidden;
  position: fixed;
  background: blue;
  box-shadow: 0 1px 4px rgba(0,21,41,.08);
  background-image: url('~@/assets/common/backgroundone.png');
  z-index: 9999999;

  .logo {
    width: 88px;
    margin-top:10px;
    margin-left:15px;
  }

  .breadcrumb-container {
    float: left;
  }
.user {
  position: absolute;
  right: 125px;
  top: 14px;

  .user-text {
    float: right;
    height: 100%;
    line-height: 39px;
    margin-left:15px ;
    color: #fff;
  }
}

.goout {
  position: absolute;
  right: 30px;
  bottom: 20px;
  color: #fff;
  font-size: 12px;
  font-weight: 500;

  .el-icon-caret-bottom {
    font-size: 14px;
    font-weight: 700;
  }
}
}
</style>
