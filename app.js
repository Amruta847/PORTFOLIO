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

const sections = document.querySelectorAll("section[id]");
const links = document.querySelectorAll(".nav-btns a");

function changeActiveLink() {

    let current = "home";

    sections.forEach(section => {

        if (window.scrollY >= section.offsetTop - 200) {
            current = section.id;
        }

    });

    links.forEach(link => {

        link.classList.remove("active");

        if (link.getAttribute("href") === "#" + current) {
            link.classList.add("active");
        }

    });

}

window.addEventListener("scroll", changeActiveLink);

changeActiveLink();