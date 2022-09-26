const getters = {
  sidebar: state => state.app.sidebar,
  device: state => state.app.device,
  avatar: state => state.user.avatar,
  name: state => state.user.name,
  token: state => state.user.data && state.user.data.token,
  userId: state => state.user.data.userId && state.user.data.userId
}
export default getters
