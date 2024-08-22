const  TODOLIST = ['Demo app', "Docker demo", "Docker image", "Docker container", "Docker compose", "Docker watch"];

module.exports = async (req, res) => {
    res.send({
        greeting:  TODOLIST[Math.floor(Math.random()*TODOLIST.length)],
    });
};
