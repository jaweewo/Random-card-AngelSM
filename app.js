document.getElementById("generateCard").addEventListener("click", function() {
    const values = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"];
    const palos = [
        { palo: "♠", color: "black" },
        { palo: "♥", color: "red" },
        { palo: "♦", color: "red" },
        { palo: "♣", color: "black" }
    ];
    
    const randomValue = values[Math.floor(Math.random() * values.length)];
    const randomPalo = palos[Math.floor(Math.random() * palos.length)];

    document.getElementById("cardValue").textContent = randomValue;
    document.getElementById("topSuit").textContent = randomPalo.palo;
    document.getElementById("bottomSuit").textContent = randomPalo.palo;
    
    document.getElementById("cardValue").className = `value ${randomPalo.color}`;
    document.getElementById("topSuit").className = `suit top-left ${randomPalo.color}`;
    document.getElementById("bottomSuit").className = `suit bottom-right ${randomPalo.color}`;
});
