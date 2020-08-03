const toggle = document.getElementById('toggle');
            const menu = document.getElementById('menu');

            toggle.addEventListener('click',() => {
                  toggle.classList.toggle('show');
                  menu.classList.toggle('show');
            }
            );