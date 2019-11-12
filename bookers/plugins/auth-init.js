import firebase from "@/plugins/firebase"
import axios from "axios"

const init = ({ store }) => {
    firebase.auth().onAuthStateChanged(async user => {
        if (user) {
            const { data } = await axios.get(`http://localhost:5000/v1/users?email=${user.email}`)
            store.commit("setUser", data)

        } else {
            console.log("userいないよ");
        }
    });
}

export default init
