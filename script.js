function goOnline(status) {
    document.getElementById("onlineSection").classList.add("hidden");

    if (status) {
        document.getElementById("orderSection").classList.remove("hidden");
    } else {
        const result = document.getElementById("resultSection");
        result.classList.remove("hidden");
        result.innerHTML = `
            <p>OFFLINE...</p>
            <p>You are offline. Go online to start delivering.</p>
        `;
    }
}

function acceptOrder(order) {
    document.getElementById("orderSection").classList.add("hidden");

    const result = document.getElementById("resultSection");
    result.classList.remove("hidden");

    if (order) {
        result.innerHTML = `
            <p>Order accepted</p>
            <p><b>Client:</b> Your order is on the way</p>

            <video autoplay muted loop>
                <source src="./img/delivery.mp4" type="video/mp4">
            </video>
        `;
    } else {
        result.innerHTML = `<p>Order rejected</p>`;
    }
}