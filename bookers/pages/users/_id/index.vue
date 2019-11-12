<template>
  <div class="row">
    <SideBar @pushBook="pushBook" user="user" />
    <div class="col-sm-9">
      <h3>User Details</h3>
      <table class="table" v-if="user">
        <thead>
          <tr>
            <th>タイトル</th>
            <th>本文</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(book, i) in user.books" :key="i">
            <td v-if="!book.isEdit">{{book.title}}</td>
            <td v-if="!book.isEdit">{{book.body}}</td>
            <td v-if="book.isEdit">
              <input type="text" v-model="book.title" class="form-control" />
            </td>
            <td v-if="book.isEdit">
              <input type="text" v-model="book.body" class="form-control" />
            </td>
            <td
              v-if="book.user_id === currentUser.id && !book.isEdit"
              @click="book.isEdit = true"
              class="cursor"
            >編集</td>
            <td v-if="book.isEdit">
              <button class="btn btn-primary" @click="edit(book)">完了</button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
import SideBar from "@/components/layouts/SideBar";
import axios from "@/plugins/axios";
export default {
  data() {
    return {
      user: null
    };
  },
  components: {
    SideBar
  },
  computed: {
    currentUser() {
      return this.$store.state.currentUser;
    }
  },
  async created() {
    const { data } = await axios.get(`/users/${this.$route.params.id}`);
    const books = data.books.map(book => {
      book.isEdit = false;
      return book;
    });
    this.user = { ...data, books };
  },
  methods: {
    routerPush(book) {
      this.$router.push({
        name: "books-id",
        params: {
          id: book.id,
          book: book
        }
      });
    },
    pushBook(book) {
      this.books.push(book);
    },
    async edit(book) {
      book.isEdit = false;
      const { title, body } = book;
      await axios.put(`/books/${book.id}`, {
        book: {
          title,
          body
        }
      });

      this.$store.commit("setNotice", {
        status: true,
        message: "更新しました"
      });
      setTimeout(() => {
        this.$store.commit("setNotice", {});
      }, 2000);
    }
  }
};
</script>

<style>
.cursor {
  cursor: pointer;
}
</style>