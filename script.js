 function dialog() {
            const element1 = document.getElementById("dialog");
            element1.style.display = "flex";
            const element2 = document.getElementById("container");
            const element3 = document.getElementById("button")
            element3.style.display = "none";
            element2.style.backgroundColor = "rgba(0, 0, 0, 0.7)"



        }
        function closedialog() {
            const element1 = document.getElementById("dialog");
            const element2 = document.getElementById("container");
            element1.style.display = "none";
            element2.style.backgroundColor = "white";
            const element3 = document.getElementById("button")
            element3.style.display = "flex";
        }