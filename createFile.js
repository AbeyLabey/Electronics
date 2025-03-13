const fs = require('fs');

// Define the data you want to write to the files
const bank1 = {
    "questions": ["What is Node.js?", "What is Express?", "What is JavaScript?"],
    "answers": ["Node.js is a JavaScript runtime.", "Express is a Node.js web framework.", "JavaScript is a programming language."]
};

const bank2 = {
    "questions": ["What is HTML?", "What is CSS?", "What is a Web Browser?"],
    "answers": ["HTML is the standard language for web pages.", "CSS is used to style web pages.", "A web browser is used to access web pages."]
};

const bank3 = {
    "questions": ["What is Git?", "What is GitHub?", "What is a commit?"],
    "answers": ["Git is a version control system.", "GitHub is a platform for hosting Git repositories.", "A commit is a snapshot of changes in a repository."]
};

// Write each object to a separate JSON file
fs.writeFileSync('Bank1.json', JSON.stringify(bank1, null, 2), 'utf8');
fs.writeFileSync('Bank2.json', JSON.stringify(bank2, null, 2), 'utf8');
fs.writeFileSync('Bank3.json', JSON.stringify(bank3, null, 2), 'utf8');

console.log('JSON files created successfully!');
