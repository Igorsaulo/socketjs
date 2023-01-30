const socket = io("http://127.0.0.1:3000/");
socket.on('local',local=>{
    console.log(local)
})