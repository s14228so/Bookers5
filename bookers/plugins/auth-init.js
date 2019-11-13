import firebase from "@/plugins/firebase"
import axios from "axios"

const init = ({ store }) => {
    firebase.auth().onAuthStateChanged(async user => {
        if (user) {
            store.commit("login", true)
            const { data } = await axios.get(`http://localhost:5000/v1/users?email=${user.email}`)
            store.commit("setUser", data)

        } else {
            store.commit("login", false)
            store.commit("setUser", null)
        }
    });
}

export default init
