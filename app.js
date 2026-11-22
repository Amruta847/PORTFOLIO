function updateTime() {
    const now = new Date();

    const time = now.toLocaleTimeString("en-IN", {
        hour: "2-digit",
        minute: "2-digit",
        hour12: true,
        timeZone: "Asia/Kolkata"
    });

    document.getElementById("time").textContent = time + " IST";
}

updateTime();
setInterval(updateTime, 1000);

const cursor = document.querySelector(".cursor-glow");

document.addEventListener("mousemove", (e) => {
    cursor.style.left = e.clientX + "px";
    cursor.style.top = e.clientY + "px";
});