import http from "../http-common";

class PostDataService {
    getHighlitedPosts() {
      return http.get("/topPosts");
    }

    getPostById(id) {
      return http.get(`/getpost/${id}`);
    }

    getPostsByCategoryId(id) {
        return http.get(`/getpostbycategory/${id}`);
      }
  }
  
  export default new PostDataService();