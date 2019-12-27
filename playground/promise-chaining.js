require('../src/db/mongoose')
const User = require('../src/models/user')

// User.findByIdAndUpdate('5dfb0f424cc7493c046704bf', { age: 3 }).then((user) => {
//     console.log(user)
//     return User.countDocuments({ age: 3 })
// }).then((count) => {
//     console.log(count)
// }).catch(e => {
//     console.log(e)
// })

const updateAgeAndCount = async (id, age) => {
    const user = await User.findByIdAndUpdate(id, { age })
    const count = await User.countDocuments({ age })
    return count
}

updateAgeAndCount('5dfb0f424cc7493c046704bf', 2).then((count) => {
    console.log(count)
}).catch((e) => {
    console.log(e)
})