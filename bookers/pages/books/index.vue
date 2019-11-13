<template>
  <div class="row">
    <SideBar @pushBook="pushBook" />
    <div class="col-sm-9">
      <h3>Books</h3>
      <table class="table">
        <thead>
          <tr>
            <th>タイトル</th>
            <th>本文</th>
            <th>ユーザー名</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(book, i) in books" :key="i">
            <td v-if="!book.isEdit">{{book.title}}</td>
            <td v-if="!book.isEdit">{{book.body}}</td>
            <td v-if="book.isEdit">
              <input type="text" v-model="book.title" class="form-control" />
            </td>
            <td v-if="book.isEdit">
              <input type="text" v-model="book.body" class="form-control" />
            </td>

            <td>{{book.user.name}}</td>
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
      books: []
    };
  },
  //   fetch({ store, redirect }) {
  //     if (!store.state.currentUser.status) {
  //       redirect("/login");
  //     }
  //   },
  computed: {
    currentUser() {
      return this.$store.state.currentUser;
    }
  },
  components: {
    SideBar
  },
  async created() {
    const { data } = await axios.get("http://localhost:5000/v1/books");
    this.books = data.map(book => {
      book.isEdit = false;
      return book;
    });
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