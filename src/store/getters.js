const getters = {
  user_name: state => state.user.name,
  user_avatar: state => state.user.avatar,
  user_email: state => state.user.email,
  permission_routers: state => state.permission.routers
}
export default getters
