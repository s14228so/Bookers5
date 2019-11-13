<template>
  <div class="row">
    <SideBar @pushBook="pushBook" />
    <div class="col-sm-9" v-if="currentUser">
      <v-card-title>
        Books
        <v-spacer></v-spacer>
        <v-text-field v-model="search" label="Search" single-line hide-details></v-text-field>
      </v-card-title>
      <v-data-table
        :search="search"
        :headers="headers"
        :items="books"
        :items-per-page="15"
        class="elevation-1"
      ></v-data-table>
    </div>
  </div>
</template>

<script>
import SideBar from "@/components/layouts/SideBar";
import axios from "@/plugins/axios";
export default {
  data() {
    return {
      books: [],
      search: "",
      headers: [
        {
          text: "title",
          align: "left",
          sortable: false,
          value: "title"
        },
        { text: "body", value: "body" },
        { text: "username", value: "user.name" },
        { text: "編集", value: "user.name" }
      ]
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
    },
    next() {
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