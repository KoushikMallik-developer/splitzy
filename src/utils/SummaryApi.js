export const baseURL =
  import.meta.env.VITE_BACKEND_API_URL || "http://localhost:8080/";

const SummaryApi = {
  register: {
    url: "/auth/api/v2/create-users",
    method: "post",
  },
  login: {
    url: "/auth/api/v2/sign-in",
    method: "post",
  },
  forgot_password: {
    url: "auth/api/user/forgot-password",
    method: "put",
  },
  verify_otp: {
    url: "/auth/api/v2/verify-otp",
    method: "post",
  },
  updatePassword: {
    url: "/api/user/update-password",
    method: "put",
  },
  refreshToken: {
    url: "api/user/refresh-token",
    method: "post",
  },
  friendSearch: {
    url: "auth/api/v2/all-users",
    method: "get",
  },
  logout: {
    url: "/api/user/logout",
    method: "get",
  },
  getUserByToken: {
    url: "/auth/api/v2/user-details",
    method: "get",
  },
  updateUserByID: {
    url: "/auth/api/v2/update-profile",
    method: "post",
  },
  searchUser: {
    url: "/auth/api/v2/search-users",
    method: "post",
  },
  userDetailsbyID: {
    url: "/auth/api/v2/user-details-by-id",
    method: "post",
  },
  sendFriendRequest: {
    url: "/friends/api/v2/send-friend-request",
    method: "post",
  },
  removeFriendRequest: {
    url: "/friends/api/v2/remove-friend-request",
    method: "post",
  },
  acceptFriendRequest: {
    url: "/friends/api/v2/accept-friend",
    method: "post",
  },
  removeFriend: {
    url: "/friends/api/v2/remove-friend",
    method: "post",
  },
  getAllFriendRequests: {
    url: "/friends/api/v2/my-received-friend-requests",
    method: "get",
  },
  getAllFriends: {
    url: "friends/api/v2/my-friends",
    method: "get",
  },
};

export default SummaryApi;
