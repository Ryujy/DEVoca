import { ref } from "vue"
import { useRouter } from "vue-router"
import { defineStore } from "pinia"

export const useMemberStore = defineStore("memberStore", () => {
  const router = useRouter()

  const isLogin = ref(false)
  const isLoginError = ref(false)
  const userInfo = ref({
    id: null,
    token: null,
    userYn: null,
    userId: '',
    userName: '',
    userEmail: '',
    userBirth: '',
    userNickname: ''
  })
  const isValidToken = ref(false)


  // const getUserInfo = (token) => {
  //   let decodeToken = jwtDecode(token);
  //   console.log("decodeToken : ", decodeToken);
  //   console.log("2. decodeToken", decodeToken);
  //   findById(
  //     decodeToken.userId,
  //     (response) => {
  //       if (response.status === httpStatusCode.OK) {
  //         userInfo.value = response.data.userInfo;
  //         console.log("3. getUserInfo data >> ", response.data);
  //       } else {
  //         console.log("유저 정보 없음!!!!");
  //       }
  //     },
  //     async (error) => {
  //       console.error(
  //         "getUserInfo() error code [토큰 만료되어 사용 불가능.] ::: ",
  //         error.response.status
  //       );
  //       isValidToken.value = false;

  //       await tokenRegenerate();
  //     }
  //   );
  // };

  // const tokenRegenerate = async () => {
  //   console.log("토큰 재발급 >> 기존 토큰 정보 : {}", sessionStorage.getItem("accessToken"));
  //   await tokenRegeneration(
  //     JSON.stringify(userInfo.value),
  //     (response) => {
  //       if (response.status === httpStatusCode.CREATE) {
  //         let accessToken = response.data["access-token"];
  //         console.log("재발급 완료 >> 새로운 토큰 : {}", accessToken);
  //         sessionStorage.setItem("accessToken", accessToken);
  //         isValidToken.value = true;
  //       }
  //     },
  //     async (error) => {
  //       // HttpStatus.UNAUTHORIZE(401) : RefreshToken 기간 만료 >> 다시 로그인!!!!
  //       if (error.response.status === httpStatusCode.UNAUTHORIZED) {
  //         console.log("갱신 실패");
  //         // 다시 로그인 전 DB에 저장된 RefreshToken 제거.
  //         await logout(
  //           userInfo.value.userid,
  //           (response) => {
  //             if (response.status === httpStatusCode.OK) {
  //               console.log("리프레시 토큰 제거 성공");
  //             } else {
  //               console.log("리프레시 토큰 제거 실패");
  //             }
  //             alert("RefreshToken 기간 만료!!! 다시 로그인해 주세요.");
  //             isLogin.value = false;
  //             userInfo.value = null;
  //             isValidToken.value = false;
  //             router.push({ name: "user-login" });
  //           },
  //           (error) => {
  //             console.error(error);
  //             isLogin.value = false;
  //             userInfo.value = null;
  //           }
  //         );
  //       }
  //     }
  //   );
  // };

  // const userLogout = async (userid) => {
  //   await logout(
  //     userid,
  //     (response) => {
  //       if (response.status === httpStatusCode.OK) {
  //         isLogin.value = false;
  //         userInfo.value = null;
  //         isValidToken.value = false;
  //       } else {
  //         console.error("유저 정보 없음!!!!");
  //       }
  //     },
  //     (error) => {
  //       console.log(error);
  //     }
  //   );
  // };

  return {
    isLogin,
    isLoginError,
    userInfo,
    isValidToken,
    // userLogin,
    // getUserInfo,
    // tokenRegenerate,
    // userLogout,
  };
},{persist:true});
