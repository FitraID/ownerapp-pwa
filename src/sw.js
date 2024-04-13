self.addEventListener("push", (event) => {
    notification = event.data.json();

    event.waitUntil(self.registration.showNotification(notification.title, {
        
    }))
})