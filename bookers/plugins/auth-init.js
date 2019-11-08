import firebase from "@/plugins/firebase"

const init = ({ store }) => {
    firebase.auth().onAuthStateChanged(user => {
        if (user) {
            console.log("userいるよ")
            store.commit("setUser", user)

        } else {
            console.log("userいないよ");
        }
    });
}

export default init
