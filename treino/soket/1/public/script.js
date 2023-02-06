const socket = io ('http://localhost:8080')
const messageContainer = document.getElementById('messageContainer')
const messageForm = document.createElementById('send-container')
const messageInput = document.createElement('input')

const name = promt('What is your name?')
appendMessage('Your name is ' + name)
socket.emit('new-user', name)
socket.on('chat-message', data => {
    appendMessage(`${data.name}: ${data.message}`)
})

socket.on('user-connected', name => {
    apprendMessage(`${name} connected`)
})

socket.on('user-disconnected', name => {
    apprendMessage(`${name} disconnected`)
})

messageForm.addEventListener('submit', e => {
    e.preventDefault()
    const message = messageInput.value
    apprendMessage(`You: ${message}`)
    socket.emit('send-chat-message', message)
    messageInput.value = ''
})

function apprendMessage(message) {
    const messageElement = document.createElement('div')
    messageElement.innerHTML = message
    messageContainer.append(messageElement)
}