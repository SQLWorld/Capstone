// Static Knowledge Base for the Tutor Agent
// Contains summaries of common Middle School topics to provide "Real Answers"

export const tutorKnowledge = {
    history: [
        {
            keywords: ['lincoln', 'abraham lincoln', 'president', '16th president', 'assassinated', 'booth'],
            response: "Abraham Lincoln was the 16th President of the United States (1861-1865). He led the nation through the Civil War and issued the Emancipation Proclamation. Lincoln was born on February 12, 1809, and assassinated by John Wilkes Booth on April 14, 1865."
        },
        {
            keywords: ['civil war', 'north', 'south', 'confederacy', 'union', 'slavery', 'lincoln'],
            response: "The American Civil War (1861-1865) was a conflict between the Union and the Confederacy. It was primarily fought over the issue of slavery. Abraham Lincoln's leadership led to the Union's victory and the 13th Amendment."
        },
        {
            keywords: ['revolution', 'british', 'independence', '1776', 'washington'],
            response: "The American Revolution (1775-1783) won independence from British rule. The Declaration of Independence (1776) remains our founding document of freedom."
        },
        {
            keywords: ['world war', 'ww1', 'ww2', 'nazis', 'allies'],
            response: "WWI was the 'War to End All Wars' (1914-1918). WWII (1939-1945) was a global fight for democracy against totalitarianism. Both reshaped modern borders and technology."
        },
        {
            keywords: ['constitution', 'rights', 'amendment', 'government'],
            response: "The U.S. Constitution sets the framework for our government: Legislative (Congress), Executive (President), and Judicial (Courts). The Bill of Rights guarantees your core freedoms."
        },
        {
            keywords: ['egypt', 'mummy', 'pyramid', 'pharaoh', 'nile'],
            response: "Ancient Egypt was one of the world's first great civilizations! They built the Pyramids of Giza, created hieroglyphics for writing, and depended on the yearly flooding of the Nile River for farming."
        },
        {
            keywords: ['industrial', 'steam', 'factory', 'revolution', 'invention'],
            response: "The Industrial Revolution changed how we live! It started in Britain with steam power and moved humanity from farms to factories, leading to inventions like the train, lightbulb, and telephone."
        },
        {
            keywords: ['civil rights', 'mlk', 'parks', 'equality', 'segregation'],
            response: "The Civil Rights Movement was a struggle for social justice in the 1950s and 60s for Black Americans to gain equal rights under the law. Leaders like Dr. Martin Luther King Jr. and Rosa Parks were instrumental."
        }
    ],
    science: [
        {
            keywords: ['photosynthesis', 'plant', 'sun', 'energy'],
            response: "Photosynthesis: Plants convert CO2, water, and sunlight into glucose and Oxygen. It's the reason we have air to breathe!"
        },
        {
            keywords: ['cell', 'mitosis', 'nucleus', 'dna'],
            response: "Cells are the unit of life. Plant cells have walls and chloroplasts; animal cells are more flexible. The Nucleus contains the DNA blueprint."
        },
        {
            keywords: ['newton', 'force', 'gravity', 'motion'],
            response: "Newton's laws: 1) Inertia (things stay still or keep moving). 2) F=ma (Force = Mass times Acceleration). 3) For every action, an equal and opposite reaction."
        },
        {
            keywords: ['atom', 'proton', 'electron', 'neutron'],
            response: "Atoms are the building blocks of matter. Protons (+) and Neutrons (0) in the middle, Electrons (-) in the cloud outside."
        },
        {
            keywords: ['periodic table', 'element', 'hydrogen', 'helium', 'carbon'],
            response: "The Periodic Table organizes all known elements by their atomic number. Hydrogen is #1! Elements in the same column usually behave similarly because of their electron count."
        },
        {
            keywords: ['space', 'planet', 'solar system', 'mars', 'jupiter', 'sun'],
            response: "Our Solar System has 8 planets. The inner ones (Mercury, Venus, Earth, Mars) are rocky. The giant outer ones (Jupiter, Saturn, Uranus, Neptune) are gas and ice giants."
        },
        {
            keywords: ['ecosystem', 'food chain', 'environment', 'habitat'],
            response: "An ecosystem is a community of living things interacting with their environment. Energy flows up the food chain from Producers (plants) to Consumers (animals) to Decomposers (fungi)."
        }
    ],
    math: [
        {
            keywords: ['fraction', 'numerator', 'denominator'],
            response: "Fractions are parts of a whole. Remember: The Denominator is 'Down' (on the bottom). The Numerator is 'on Top'."
        },
        {
            keywords: ['slope', 'linear', 'equation', 'y=mx+b'],
            response: "y = mx + b. 'm' is the slope (rise over run). 'b' is where the line crosses the y-axis (the y-intercept)."
        },
        {
            keywords: ['pythagorean', 'triangle', 'right angle'],
            response: "a² + b² = c². This only works for Right Triangles. 'c' is always the longest side, the hypotenuse."
        },
        {
            keywords: ['geometry', 'area', 'volume', 'circle', 'rectangle', 'pi'],
            response: "Area of a rectangle = l × w. Area of a circle = πr². Volume is for 3D shapes: Volume of a box = l × w × h."
        },
        {
            keywords: ['probability', 'statistics', 'mean', 'median', 'mode'],
            response: "Statistics helps us understand data. Mean = Average. Median = Middle number. Mode = The number seen most often."
        },
        {
            keywords: ['integers', 'negative', 'absolute', 'positive'],
            response: "Integers are whole numbers (..., -2, -1, 0, 1, 2, ...). Absolute value is just the distance from zero, so it's always positive!"
        }
    ],
    computer_science: [
        {
            keywords: ['code', 'programming', 'javascript', 'python', 'html'],
            response: "Programming is giving instructions to a computer. HTML builds the structure, CSS adds the style, and JavaScript makes things interactive!"
        },
        {
            keywords: ['unity', 'game dev', 'c#', 'engine'],
            response: "Unity is a powerful game engine used at Argyle! It uses C# (C-Sharp) for logic. You can build 2D, 3D, and even VR games with it."
        },
        {
            keywords: ['cybersecurity', 'hack', 'password', 'encryption'],
            response: "Cybersecurity is about protecting data. Use strong passwords, enable 2FA, and remember: encryption scrambles data so only authorized users can read it."
        },
        {
            keywords: ['ai', 'intelligence', 'robot', 'learning'],
            response: "Artificial Intelligence (AI) like me uses machine learning to find patterns in data and help solve problems. It's the future of tech!"
        }
    ]
};