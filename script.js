        // DOM Elements
        const menuBtn = document.querySelector('.menu-btn');
        const navLinks = document.querySelector('.nav-links');
        const navItems = document.querySelectorAll('.nav-links a');
        const contentSections = document.querySelectorAll('.content-section');

        // Toggle mobile menu
        menuBtn.addEventListener('click', () => {
            navLinks.classList.toggle('active');
        });

        // Close menu when clicking outside
        document.addEventListener('click', (e) => {
            if (!e.target.closest('.nav-links') && !e.target.closest('.menu-btn')) {
                navLinks.classList.remove('active');
            }
        });

        // Handle navigation
        navItems.forEach(item => {
            item.addEventListener('click', () => {
                // Update active nav item
                navItems.forEach(nav => nav.classList.remove('active'));
                item.classList.add('active');

                // Show corresponding section
                const sectionId = item.getAttribute('data-section');
                contentSections.forEach(section => {
                    section.classList.remove('active');
                    if (section.id === sectionId) {
                        section.classList.add('active');
                    }
                });

                // Close mobile menu after click
                navLinks.classList.remove('active');
            });
        });


        const texts = [
            " EDITOR",
            "DESIGNER",
            "CONTENT CREATOR"
        ]
        
        let speed = 100;
        
        const textElements = document.querySelector(".typewriter-text")
        
        let textIndex = 0;
        let charcterIndex = 0;
        
        function typeWriter() {
            if(charcterIndex < texts[textIndex].length){
                textElements.innerHTML += texts[textIndex].charAt(charcterIndex);
                charcterIndex++;
                setTimeout(typeWriter, speed); 
            }
            else{
                setTimeout(eraseText, 1000)
            }
        }
        
        function eraseText() {
            if(textElements.innerHTML.length > 0){
                textElements.innerHTML = textElements.innerHTML.slice(0,-1)
                setTimeout(eraseText, 50)
            }
            else{
                textIndex = (textIndex + 1) % texts.length;
                charcterIndex = 0;
                setTimeout(typeWriter,500)
            }
        }
        
        window.onload = typeWriter;
        