export async function signIn(email, password) {
    await fiirebase.auth().signInWithEmailAndPassword(email, password)
}
//await requires sync
