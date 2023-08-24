new TypeIt("#companionMethods", {
    speed: 300,
    waitUntilVisible: true,
    loop: true
  })
    .type("lex", { delay: 300 })
    .move(-3)
    .delete(1)
    .type("A")
    .move(null, { to: "END" })
    .type(" Rauppx")
    .pause(300)
    .delete(2)
    .type("p")
    .move(-4)
    .type("")
    .move(null, { to: "END" })
    .type("")
    .pause(500)
    .type("")
    .go();


    new TypeIt("#textoanimate", {
        speed: 35,
    waitUntilVisible: true,
  })
    .type("Uma apaixonado por Front<3And/Back-end", { delay: 300 })
    .move(-12)
    .delete(2)
    .type("-")
    .move(null, { to: "END" })
    .break({ delay: 500 })
    .type("Atualmente estudandp")
    .pause(300)
    .delete(1)
    .type("o")
    .break({ delay: 500 })
    .pause(800)
    .type("Css, Html, JavaScript, Python")
    .move(null, { to: "END" })
    .type("")
    .pause(1000)
    .type("")
    .go();

    let menu = document.querySelector('#menu-icon');
    let navbar = document.querySelector('.navbar');

    menu.onclick = () => {
      menu.classList.toggle('bx-x');
      navbar.classList.toggle('open');
    };

    const sr = ScrollReveal ({
      distance: '65px',
      duration: 2600,
      delay:450,
      reset:true
    })

    sr.reveal('.')



    