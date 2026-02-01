// First, fetch the configuration data.
fetch('config.json')
  .then(response => response.json())
  .then(config => {
    // Use the configuration values
    const fpNameEl = document.querySelector("#fpname");
    const spNameEl = document.querySelector("#spname");

    // Update Instagram profile link and name.
    const instagramProfileLink = document.getElementById('instagramProfileLink');
    const instagramProfileNameElement = document.getElementById('instagramProfileName');
    instagramProfileLink.href = `https://instagram.com/${config.instagramUsername}`;
    instagramProfileNameElement.textContent = config.instagramProfileName;
    
    fpNameEl.innerText = config.fpName;
    spNameEl.innerText = config.spName;

    // Then generate the quotes for Hug Day
    const quotesDiv = document.querySelector(".quotes");

    const hugDayQuotes = [
      `Ang yakap ay paraan para sabihing, "May pakialam ako,"
      Ang yakap ay paraan para ipakitang, "Nandito ako para sa’yo."
      Maligayang Araw ng Yakap, aking mahal!`,
            `Ang iyong mga yakap ang aking ligtas na lugar,
      Kung saan ko natatagpuan ang kapayapaan at ginhawa.
      Maligayang Araw ng Yakap, aking mahal!`,
            `Isang yakap mo lang ay sapat na,
      Para maramdaman kong ako’y minamahal at malaya.
      Maligayang Araw ng Yakap, aking sinta!`,
            `Ang iyong mga yakap ay parang mainit na kumot,
      Binabalot ako ng pagmamahal at aliw.
      Maligayang Araw ng Yakap, aking mahal!`,
            `Ang yakap mo ang paborito kong lunas,
      Pinagagaling ang puso ko at pinalalaya ako.
      Maligayang Araw ng Yakap, aking mahal!`,
            `Ang iyong mga yakap ang aking masayang tahanan,
      Kung saan ako nakakahanap ng ginhawa at pag-aaruga.
      Maligayang Araw ng Yakap, aking mahal!`,
            `Ang yakap mo ay isang tahimik na pangako,
      Na lagi kang nasa tabi ko.
      Maligayang Araw ng Yakap, aking sinta!`,
            `Ang iyong mga yakap ang aking lakas at sandigan,
      Sa iyong mga bisig, gumagaling ang aking puso.
      Maligayang Araw ng Yakap, aking mahal!`,
            `Ang yakap mo ay isang sandali ng ligaya,
      Paalala ng tamis ng tunay na pag-ibig.
      Maligayang Araw ng Yakap, aking mahal!`,
            `Ang iyong mga yakap ang araw-araw kong kasiyahan,
      Isang pakiramdam na walang makakasira.
      Maligayang Araw ng Yakap, aking sinta!`,
            `Ang yakap mo ang paborito kong regalo,
      Isang kayamanang nagpapasaya sa aking puso.
      Maligayang Araw ng Yakap, aking mahal!`,
            `Ang iyong mga yakap ang aking panghabambuhay na tahanan,
      Kung saan hinding-hindi ako nag-iisa.
      Maligayang Araw ng Yakap, aking mahal!`
    ];

    
    const quotesNr = hugDayQuotes.length;

    for (let i = 0; i < quotesNr; i++) {
      const link = document.createElement('a');
      link.setAttribute('href', 'card.html?source=hug');
      const para = document.createElement("p");
      para.classList.add("quote");
      para.innerText = hugDayQuotes[i];
      link.appendChild(para);
      quotesDiv.appendChild(link);
    }

    const quoteDivs = document.querySelectorAll(".quote");

    quoteDivs.forEach(quote => {
      quote.addEventListener('click', function (e) {
        const chosenQuote = e.target.innerText;
        localStorage.setItem("chosenQuote", chosenQuote);
      });
    });
  })
  .catch(error => {
    console.error('Error loading config:', error);
  });