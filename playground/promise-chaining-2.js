require('../src/db/mongoose')
const Task = require('../src/models/task')

// Task.findByIdAndDelete('5dfb1a95c39f470a38f89183').then((task) => {
//     console.log(task)

//     return Task.countDocuments({ completed: false })
// }).then((count) => {
//     console.log(count)
// }).catch((e) => {
//     console.log(e)
// })

const deleteTaskAndCount = async (id, status) => {
    await Task.findByIdAndDelete(id)
    return await Task.countDocuments({ completed: status })
}

deleteTaskAndCount('5dfffb1de2864f2e4892b895', false).then((count) => {
    console.log(count)
}).catch((e) => {
    console.log(e)
})