// Container -- whole site

const container = document.querySelector('#container');

// Site Title "Etch-A-Sketch"

const title = document.createElement('h1');
title.classList.add('title');
title.textContent = 'Etch-A-Sketch';

container.appendChild(title);

// Main Content Container

const mainContent = document.createElement('div');
mainContent.classList.add('mainContent');

container.appendChild(mainContent);

// Create internal containers (Left, Canvas, Right)

//leftBlock => Settings

const settings = document.createElement('div');
settings.classList.add('settings');

mainContent.appendChild(settings);

//Canvas Board

const canvas = document.createElement('div');
canvas.classList.add('canvas');

mainContent.appendChild(canvas);

//rightBlock => BLANK SPACE

const rightBlock = document.createElement('div');
rightBlock.classList.add('rightBlock');

mainContent.appendChild(rightBlock);

// Create menu options on leftBlock

// Color selector