function handleSignInClick(event) {
    gapi.auth2.getAuthInstance().signIn()
        .then((data) => {
            let email = data.getBasicProfile().getEmail();
            fetch("https://dimon713-efd99.firebaseio.com/adminContent/email.json")
                .then((obj) => obj.json())
                .then((data) => {
                    if (data != email) {
                        gapi.auth2.getAuthInstance().signOut();
                        let div = document.querySelector(".wrapper_preview");
                        div.onclick = null;
                        alert("Нет доступа!");
                    } else {
                        alert("Вход выполнен!");
                        let edit = document.querySelectorAll(".edit");
                        for (let i = 0; i < edit.length; i++) {
                            edit[i].setAttribute("style", "display:inline");
                        }
                    }
                })
        })
}

function handleSignOutClick(event) {
    gapi.auth2.getAuthInstance().signOut();
    let div = document.querySelector(".wrapper_preview");
    let adminPanel = document.querySelector("#admin_panel");
    adminPanel.setAttribute("class", "invisibility");
    div.onclick = null;
    let edit = document.querySelectorAll(".edit");
    for (let i = 0; i < edit.length; i++) {
        edit[i].setAttribute("style", "display:none");
    }
}