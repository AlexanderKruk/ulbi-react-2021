import axios from "axios";

export class PostService {
  static async getAll(page = 1, limit = 10) {
    const response = await axios.get(
      `https://jsonplaceholder.typicode.com/posts`,
      {
        params: {
          _limit: limit,
          _page: page,
        },
      }
    );
    return response;
  }

  static async getOne(postId) {
    const response = await axios.get(
      `https://jsonplaceholder.typicode.com/posts/` + postId
    );
    return response;
  }

  static async getComments(postId) {
    const response = await axios.get(
      `https://jsonplaceholder.typicode.com/posts/${postId}/comments`
    );
    return response;
  }
}
