document.addEventListener("DOMContentLoaded", () => {
    const links = document.querySelectorAll(".token");
    const transition = document.getElementById("page-transition");

    links.forEach(link => {
        link.addEventListener("click", e => {
            e.preventDefault();
            const destino = link.href;

            // Se não existir overlay, navega normal
            if (!transition) {
                window.location.href = destino;
                return;
            }

            transition.classList.add("active");

            setTimeout(() => {
                window.location.href = destino;
            }, 600);
        });
    });
});
