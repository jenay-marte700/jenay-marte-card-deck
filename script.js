fetch('data.json')
    .then(response => response.json())
    .then(cards => {
        const deck = document.getElementById('deck');

        cards.forEach(data => {
        const card = document.createElement('div');
        card.className = 'card ' + data.id;

            card.innerHTML = `
            <div class="card-inner">
                <div class="card-front">
                    <div class="artwork">
              <img src="${data.image}" alt="${data.name}">
            </div>

            <div class="card-info">
              <span class="card-category">${data.category}</span>
              <h2>${data.name}</h2>
              <p class="card-period">${data.period}</p>
              <p class="flip-hint">CLICK TO EXPLORE</p>
            </div>
          </div>

          <div class="card-back">
            <span class="back-category">${data.category}</span>
            <h2>${data.name}</h2>
            <p class="back-description">${data.description}</p>

            <div class="keywords">
              ${data.keywords.map(word => `<span class="keyword">${word}</span>`).join("")}
            </div>

            <p class="palette-label">COLOR PALETTE</p>

            <div class="palette">
              ${data.colors.map(color => `<span class="swatch" style="background-color: ${color}"></span>`).join("")}
            </div>

            <p class="flip-hint">CLICK TO RETURN</p>
          </div>
        </div>
      `;

      card.addEventListener("click", () => {
        card.classList.toggle("flipped");
      });

      deck.appendChild(card);
    });

    document.getElementById("card-count").textContent =
      cards.length + " AESTHETICS";
  });