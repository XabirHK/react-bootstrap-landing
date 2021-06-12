import http from "../http-common";

class HomePageDataService {
    getHighlitedPosts() {
      return http.get("/topPosts");
    }
  }
  
  export default new HomePageDataService();