class AuthManager {

    authenticate(jwt, cb) {
      if (typeof window !== "undefined") {
        sessionStorage.setItem('jwt', JSON.stringify(jwt));
      }
      cb();
    }
  
    isAuthenticated() {
      if (typeof window === "undefined") {
        return false;
      }
      return !!sessionStorage.getItem('jwt');
    }
  
    // clearJWT(cb) {
    //   // if (typeof window !== "undefined") {
    //     sessionStorage.removeItem('jwt');
    //     cb();
    //     // Assuming signout() is defined and imported from somewhere
    //     signout().then((data) => {
    //       document.cookie = "t=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
    //     });
    //   // }
    // }
  }
  
  // Export the AuthManager class
  export default AuthManager;