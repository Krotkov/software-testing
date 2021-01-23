const users = {
    'admin': {
        login: 'admin',
        password: 'admin',
        name: 'Admin'
    }
};

function addUser(user) {
    if (user === undefined || user.login === undefined) {
        throw Error('Trying to add invalid user')
    }
    if (this.users[user.login] !== undefined) {
        throw Error('Trying to add existing user')
    }
    users[user.login] = user;
}

function getUser(userLogin) {
    return users[userLogin] || null;
}

function getAllUsers() {
    const userList = []
    for (const login in users) {
        userList.push(users[login])
    }
    return userList
}

function deleteUser(userLogin) {
    if (users[userLogin] === undefined) {
        throw Error('Trying to delete nonexisting user')
    }
    delete users[userLogin];
}

function updateUser(userLogin, userInfo) {
    const user = users[userLogin]
    Object.keys(userInfo).forEach(key => {
        user[key] = userInfo[key]
    });
}

module.exports = {addUser, getUser, deleteUser, getAllUsers, updateUser}