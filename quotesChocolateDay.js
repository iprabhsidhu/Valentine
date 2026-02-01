const quotesDiv = document.querySelector(".quotes");
const fpName = document.querySelector("#fpname");
const spName = document.querySelector("#spname");
const chocolateDayQuotes = [
  `You are the sweetest chocolate in the box of my life,
  Adding flavor to every moment,
  Making everything delightful and nice.
  Happy Chocolate Day, my love!`,
  `Just like chocolate melts in the mouth,
  Your love melts my heart.
  Wishing you a very Happy Chocolate Day!`,
  `Life is like a box of chocolates,
  And you are the sweetest one in it.
  Happy Chocolate Day, sweetheart!`,
  `Ikaw ay kasing tamis ng tsokolate,
  Ikaw ay kasing ganda ng tsokolate,
  Ito ang wish ko sa Chocolate Day,
  Nawa'y lagi kang masaya at nakangiti!
  Maligayang Araw ng Tsokolate!`,
  `You are the chocolate to my milk,
  The sweetness to my life.
  Happy Chocolate Day, darling!`,
  `Parang tsokolate ang iyong pagmamahal,
  Kay tamis at kay sarap sa puso kong minamahal.
  Happy Chocolate Day, aking mahal!`,
  `Just like chocolate makes everything better,
  Your presence makes my life sweeter.
  Happy Chocolate Day, my love!`,
  `Ang iyong ngiti ay mas matamis pa sa tsokolate,
  Ang iyong pag-ibig ay walang kapantay at napakaganda.
  Happy Chocolate Day, aking mahal!`,
  `You are the reason my life is so sweet,
  Just like chocolate, you make everything complete.
  Happy Chocolate Day, sweetheart!`,
  `Nawa'y maging kasing tamis ng tsokolate ang ating samahan,
  At kasing saya ng bawat sandaling magkahawak ang ating kamay.
  Happy Chocolate Day, aking mahal!`,
  `Just like chocolate, you are irresistible,
  And your love is simply unforgettable.
  Happy Chocolate Day, my love!`,
  `Ang iyong pagmamahal ay mas matamis pa sa tsokolate,
  Ang iyong alaala ay laging kay sarap balik-balikan.
  Happy Chocolate Day, aking mahal!`,
  `You are the chocolate in my life,
  Making every moment sweet and rife.
  Happy Chocolate Day, darling!`,
  `Nawa'y maging kasing tamis ng tsokolate ang iyong pag-ibig,
  At kasing ganda ng tsokolate ang ating pagsasama.
  Happy Chocolate Day, aking mahal!`,
  `Just like chocolate, you are my favorite treat,
  And your love makes my life complete.
  Happy Chocolate Day, sweetheart!`
];

fetch('config.json')
  .then(response => response.json())
  .then(config => {
    // Set names from configuration.
    fpName.innerText = config.fpName;
    spName.innerText = config.spName;

    // Update Instagram profile link and name.
    const instagramProfileLink = document.getElementById('instagramProfileLink');
    const instagramProfileNameElement = document.getElementById('instagramProfileName');
    instagramProfileLink.href = `https://instagram.com/${config.instagramUsername}`;
    instagramProfileNameElement.textContent = config.instagramProfileName;

    // Build quote links from chocolateDayQuotes.
    const quotesNr = chocolateDayQuotes.length;
    for (let i = 0; i < quotesNr; i++) {
      const link = document.createElement('a');
      link.setAttribute('href', 'card.html?source=chocolate');
      const para = document.createElement("p");
      para.classList.add("quote");
      para.innerText = chocolateDayQuotes[i];
      link.appendChild(para);
      quotesDiv.appendChild(link);
    }

    // Add click listener on each quote to save the chosen quote to localStorage.
    const quoteDivs = document.querySelectorAll(".quote");
    quoteDivs.forEach(quote => {
      quote.addEventListener('click', function (e) {
        const chosenQuote = e.target.innerText;
        localStorage.setItem("chosenQuote", chosenQuote);
      });
    });
  })
  .catch(error => console.error('Error loading config:', error));