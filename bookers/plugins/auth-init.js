import firebase from "@/plugins/firebase"
import axios from "axios"

const init = ({ store }) => {
    firebase.auth().onAuthStateChanged(async user => {
        console.log("userいるよ！！！！！！！")
        if (user) {
            console.log("userいるよ！！！！！！！")
            const { data } = await axios.get(`http://localhost:5000/v1/users?email=${user.email}`)
            store.commit("setUser", data)

        } else {
            console.log("userいないよ");
        }
    });
}

export default init
