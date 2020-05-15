module.exports = {
    'abetteru': {
        'name': 'A Better U',
        'description': 'Health and Fitness Application',
        'website': 'https://abetteruhealth.com',
        'demo': 'https://youtu.be/xnnKvFZoiVo',
        'source': 'https://github.com/SamsonPN/A-Better-U',
        'video': 'https://res.cloudinary.com/sotasamson96/video/upload/v1586055782/Personal%20Website/ABU_Short_btkni4.mp4',
        'stack': ['React', 'Node.js', 'Express', 'MongoDB'],
        'features': [
            "Create any workout routine from 1000 available exercises such as the squat, bench press, and deadlift",
            "Track workouts for the day by choosing a routine and putting in weight, repetition, and set information",
            "Provides calorie and macronutrient calculators for users to determine nutritional needs",
            "Search for various foods and view full nutrition report",
            "Create, update, or delete facebook-like status updates to track fitness journey",
            "Able to upload photos/videos for each status that will be delivered quickly through a CDN"
        ],
        'challenges': [
            'Working with a NoSQL database like MongoDB was quite challenging at first. This was because it was difficult coming up with an appropriate schema to represent data that was inherently relational. It would’ve been much easier to use a SQL DBMS like PostgresQL or MySQL but I wanted to challenge myself with something new.',
            'Figuring out a way to allow users to upload and display images quickly for status updates was also another challenge. I initially used MongoDB’s GridFS specification to store media but that was inefficient and slow for videos and high quality images since it broke the files into chunks and each chunk into a document. In addition, GridFS should only be used for files larger than 16 MB and most of the images I uploaded were less than 10 MB.'
        ],
        'solutions': [
            'I created several collections for each page of my application as well as a user collection to store user ids. The user id acted like a primary key that connected the user to their information in each collection. This mimicked the relational behavior in a SQL database. ',
            'The solution to image/video uploads was to use a cloud-based management system, like Cloudinary, to upload media and then serve it through a CDN. Using the Cloudinary API, I was able to upload and deliver media way faster than GridFS since it didn’t have to query through the database for each chunk of the media file and put it back together.'
        ]
    },
    'legion': {
        'name': 'Legion Board',
        'description': 'MapleStory Legion Simulator',
        'website': 'https://legion.samsonn.com',
        'demo': 'https://youtu.be/lpfKuMfuXRI',
        'source': 'https://github.com/SamsonPN/Legion',
        'video': 'https://res.cloudinary.com/sotasamson96/video/upload/v1586145273/Personal%20Website/Legion_DEMO_bfosu6.mp4',
        'stack': ['Vue.js', 'SCSS', 'Node.js', 'Express', 'PostgresQL'],
        'features': [
            "Allows players to drag and drop tetris pieces onto the grid",
            "Tetris pieces can be rotated clockwise and counterclockwise, as well as flipped vertically and horizontally",
            "Can dynamically change the colors of the grid and pieces as well as add gridlines using CSS variables",
            "Positions of the pieces on the grid are saved and players can have multiple presets to save to"
        ],
        'challenges': [
            'Recreating the drag and drop behavior of the in-game grid was quite difficult. It wasn’t as simple as just appending an element into a div. This is because there were edge cases in which portions of the tetris piece were hanging off the grid depending on its rotation (90º, -90º, etc). In game, those portions would not be displayed unless it was rotated back into the grid’s area.',
            'Creating a universal tetris piece that accommodated all shapes and sizes was quite difficult. There are 5 character archetypes in the game and each archetype has its own shape. In addition, the levels of each character determine how large a tetris piece is. For example, a Mage archetype has a T-shaped piece while a Warrior archetype has a square-shaped piece and a level 200 character is a 4-piece while a level 250 character is a 5-piece shape.' 
        ],
        'solutions': [
            'The solution for the drag and drop was to simply render the piece’s icon inside the cell and color in adjacent cells according to the positions of its side pieces. This solved 2 issues: 1) rotating the pieces was quite easy because all I had to do was recalculate the positions of the side pieces and color in the adjacent cells and 2) if a portion of the tetris piece was off the grid, it would not display but if rotated back in, it would display again. I just had to check whether the coordinates were within the boundaries of the grid.',
            'The solution for the universal tetris piece was to create a 5x5 matrix where the middle position was the character’s icon and the adjacent cells would be colored in to create the piece. Thus, no matter the character archetype or level, this piece would accommodate them. In addition, this made rotating the piece about its center much easier since it just required recalculating and coloring in new cell positions rather than using transform: translate().'
        ]
    },
    'wordsearch': {
        'name': 'Word Search',
        'description': 'Create, Play, and Solve Word Searches',
        'website': 'https://wordsearch.samsonn.com',
        'demo': 'https://youtu.be/AvhDpE8cP-8',
        'source': 'https://github.com/SamsonPN/Word-Search',
        'video': 'https://res.cloudinary.com/sotasamson96/video/upload/v1588638917/Personal%20Website/DEMO_2_x3sf1d.mov',
        'stack': ['React', 'Redux', 'SCSS', 'CSS Modules'],
        'features': [
            "Play randomly generated word searches powered by the Wordnik API",
            "Create word searches and print them as a .png file",
            "Created word searches will be saved to the browser automatically",
            "Use the built-in word search solver to solve any wordsearch in seconds"
        ],
        'challenges': [
            'The hardest part of this project was coming up with an algorithm for creating a word search generator. There were many factors to keep track of such as the word length, the orientation of the word, and at what positions the word could fit in the grid. There were several instances when my code would go into an infinite loop and I had to start all over again.',
            'The second hardest part was creating an algorithm to solve a word search quickly. A naive solution would be to iterate over the grid for each required word and check in each direction if it found the first letter. This would be quite slow if there were a large number of words and a large grid.'
        ],
        'solutions': [
            'My algorithm essentially goes through each word, finds a random position, and checks a random direction to see if it would fit. To make this faster, I would calculate whether the word would fit in the grid in that particular direction. If it did, I would insert it into the grid and if it didn’t, I would try another direction. To prevent infinite loops, I checked the word length before finding a possible position for it. For example, if my grid is 15x15 and a user wants to fit in a word with 16 characters, then it is impossible to insert it. In addition, if the word goes through every possible position in the grid, the algorithm will move onto the next word.',
            'My algorithm for the solver was to preprocess the word search and place all occurrences of a letter in a hash table with their respective positions. For example, the letter ‘A’ at positions 15, 91, and 200 would look like this in a hash table: { ‘A’ : [15, 91, 200] }. Once the preprocessing is finished, the algorithm iterates through each word. For each word, it takes the first letter and iterates through all occurrences of it and checks all 8 directions to see if the word is present. This is much faster since I only go through the grid once for preprocessing and finding the first letter of the word is O(1) with a hash table.'
        ]
    },
    'stack': {
        'React': 'Front-End',
        'Redux': 'Front-End',
        'Node.js': 'Back-End',
        'Express': 'Back-End',
        'Vue.js': 'Front-End',
        'JavaScript': ['Front-End', 'Back-End'],
        'HTML': 'Front-End',
        'CSS': 'Front-End',
        'MongoDB': 'Back-End',
        'PostgresQL': 'Back-End',
        'SCSS': 'Front-End',
        'Jest': 'Other',
        'Vuex': 'Front-End',
        'Firebase': 'Back-End',
        'Bootstrap': 'Front-End',
        'jQuery': 'Front-End',
        'Python': 'Back-End',
        'SQL': 'Back-End',
        'Adobe XD': 'Other',
        'React Context API': 'Front-End',
        'CSS Modules': 'Front-End',
        'Bash': 'Other'
    }
}