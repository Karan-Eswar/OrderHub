function goOnline(status) {
    const onlineSection = document.getElementById("onlineSection");
    const orderSection = document.getElementById("orderSection");
    const resultSection = document.getElementById("resultSection");

    onlineSection.classList.add("hidden");

    if (status) {
        orderSection.classList.remove("hidden");
    } else {
        resultSection.classList.remove("hidden");
        resultSection.innerHTML = `
            <p>OFFLINE..........</p>
            <p>YOU ARE OFFLINE GO ONLINE AND START DELIVERING ORDER</p>
        `;

        
    }
}

function acceptOrder(order) {
    const orderSection = document.getElementById("orderSection");
    const resultSection = document.getElementById("resultSection");

    orderSection.classList.add("hidden");
    resultSection.classList.remove("hidden");

    if (order) {
       resultSection.innerHTML = `
    <p>Order accepted by delivery boy</p>
    <p><b>CLIENT NOTIFICATION:</b> Your order is on the way</p>

    <video width="100%" height="400px" autoplay>
        <source src="./img/delivery.mp4" type="video/mp4">
        Your browser does not support video.
    </video>
`;
       
       

    } else {
        resultSection.innerHTML = `
            <p>Order rejected</p>
        `;
    }
}