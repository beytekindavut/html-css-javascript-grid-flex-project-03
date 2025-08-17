

        document.getElementById("loginBtn").addEventListener("click", function() {

            const username = document.getElementById("username").value.trim();
            const password = document.getElementById("password").value.trim();


            if (!username || !password) {
                alert("Lütfen kullanıcı adı ve şifre giriniz!");
                return;
            }



            if (password === "1234") { // benim verdiğim örnek şifre...
                alert(`Hoşgeldin ${username}! `);

                document.getElementById("courses").scrollIntoView({
                    behavior: "smooth"
                });
            } else {
                alert("Hatalı şifre! Tekrar deneyin.");
            }
        });

