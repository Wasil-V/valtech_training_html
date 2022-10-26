const store = require("./app/store")

const fetchUsers = require("./features/users/userSlice").fetchUsers

store.subscribe(()=>{})

store.dispatch(fetchUsers());


