// Story data
const story = [
    {
        text: "You wake up in a mysterious forest. What do you do?",
        options: [
            { text: "Explore deeper into the forest", next: 1 },
            { text: "Follow a path", next: 2 },
            { text: "Stay put and wait", next: 3 }
        ]
    },
    {
        text: "You encounter a fork in the road. Which path do you take?",
        options: [
            { text: "Left", next: 4 },
            { text: "Right", next: 5 }
        ]
    },
    {
        text: "You come across a small cabin. Do you enter?",
        options: [
            { text: "Yes", next: 6 },
            { text: "No", next: 7 }
        ]
    },
    {
        text: "You wait for some time but nothing happens. What's your next move?",
        options: [
            { text: "Continue waiting", next: 8 },
            { text: "Explore the surroundings", next: 9 }
        ]
    },
    {
        text: "You encounter a fierce-looking creature blocking the left path. What do you do?",
        options: [
            { text: "Fight the creature", next: 10 },
            { text: "Try to sneak past it", next: 11 }
        ]
    },
    {
        text: "You find a hidden treasure chest! What's your next move?",
        options: [
            { text: "Open the chest", next: 12 },
            { text: "Leave it and move on", next: 13 }
        ]
    },
    {
        text: "You enter the cabin and find it empty. What do you do?",
        options: [
            { text: "Search for clues", next: 14 },
            { text: "Rest for a while", next: 15 }
        ]
    },
    {
        text: "You decide not to enter the cabin and continue exploring the forest. What do you find?",
        options: [
            { text: "A hidden cave", next: 16 },
            { text: "A waterfall", next: 17 }
        ]
    },
    {
        text: "You keep waiting but nothing happens. Suddenly, you hear strange noises nearby. What's your next move?",
        options: [
            { text: "Investigate the noises", next: 18 },
            { text: "Stay hidden and observe", next: 19 }
        ]
    },
    {
        text: "You engage in a fierce battle with the creature but get severely injured. Game over!",
        options: [
            { text: "Start over", next: 0 }
        ]
    },
    {
        text: "You manage to sneak past the creature unnoticed. What's your next move?",
        options: [
            { text: "Continue on the left path", next: 20 },
            { text: "Go back and take the right path", next: 5 }
        ]
    },
    {
        text: "You open the chest and find valuable treasures! Congratulations, you win!",
        options: [
            { text: "Start over", next: 0 }
        ]
    },
    {
        text: "You leave the chest and continue your journey. What's your next move?",
        options: [
            { text: "Explore further into the forest", next: 21 },
            { text: "Return to the cabin", next: 6 }
        ]
    },
    {
        text: "You find a clue hidden under the rug. It leads you to a secret passage. What do you do?",
        options: [
            { text: "Explore the secret passage", next: 22 },
            { text: "Return to the forest", next: 16 }
        ]
    },
    {
        text: "You take a short rest and regain some energy. What's your next move?",
        options: [
            { text: "Explore the surroundings", next: 23 },
            { text: "Leave the cabin and continue exploring", next: 24 }
        ]
    },
    {
        text: "You find a beautiful waterfall. What do you do?",
        options: [
            { text: "Rest by the waterfall", next: 25 },
            { text: "Keep exploring", next: 26 }
        ]
    },
    {
        text: "You find a hidden cave entrance. What's your next move?",
        options: [
            { text: "Enter the cave", next: 27 },
            { text: "Ignore the cave and continue exploring", next: 28 }
        ]
    },
    {
        text: "You discover a group of friendly creatures having a feast. What do you do?",
        options: [
            { text: "Join the feast", next: 29 },
            { text: "Observe from a distance", next: 30 }
        ]
    },
    {
        text: "You investigate the noises and find a group of friendly creatures having a feast. They invite you to join them. Congratulations, you win!",
        options: [
            { text: "Start over", next: 0 }
        ]
    },
    {
        text: "You observe from a distance and realize that the creatures are harmless. What's your next move?",
        options: [
            { text: "Approach them cautiously", next: 31 },
            { text: "Leave and continue exploring", next: 32 }
        ]
    },
    {
        text: "You discover a hidden treasure chest! Congratulations, you win!",
        options: [
            { text: "Start over", next: 0 }
        ]
    },
    {
        text: "You decide to explore further into the forest. What do you find?",
        options: [
            { text: "A mysterious cave entrance", next: 27 },
            { text: "A beautiful meadow", next: 33 }
        ]
    },
    {
        text: "You rest by the waterfall and regain your energy. What's your next move?",
        options: [
            { text: "Continue exploring", next: 34 },
            { text: "Return to the forest", next: 35 }
        ]
    },
    {
        text: "You continue exploring and stumble upon a hidden passage. What's your next move?",
        options: [
            { text: "Explore the hidden passage", next: 36 },
            { text: "Return to the forest", next: 21 }
        ]
    },
    {
        text: "You decide to enter the cave. What do you find inside?",
        options: [
            { text: "A treasure trove", next: 37 },
            { text: "A sleeping dragon", next: 38 }
        ]
    },
    {
        text: "You enter the treasure trove and find abundant riches! Congratulations, you win!",
        options: [
            { text: "Start over", next: 0 }
        ]
    },
    {
        text: "You disturb the dragon and it wakes up in a rage. Game over!",
        options: [
            { text: "Start over", next: 0 }
        ]
    },
    {
        text: "You approach the friendly creatures and join their feast. They offer you valuable gifts. Congratulations, you win!",
        options: [
            { text: "Start over", next: 0 }
        ]
    },
    {
        text: "You cautiously approach the creatures and they welcome you warmly. You make new friends. Congratulations, you win!",
        options: [
            { text: "Start over", next: 0 }
        ]
    }
    // Add more story levels...
];

let currentLevel = 0;

function displayStory(level) {
    const storyDiv = document.getElementById("story");
    storyDiv.innerHTML = `<p>${story[level].text}</p>`;
    story[level].options.forEach((option, index) => {
        storyDiv.innerHTML += `<button onclick="makeChoice(${index}, ${option.next})">${option.text}</button>`;
    });
}

function makeChoice(choiceIndex, nextLevel) {
    currentLevel = nextLevel;
    displayStory(nextLevel);
}

// Start the game
displayStory(0);