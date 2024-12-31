// Mobile menu toggle
const menuToggle = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('.nav-links');

menuToggle.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});

// Smooth scroll for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollTop = 0;
        window.scrollTo({
            top: document.querySelector(this.getAttribute('href')).offsetTop - 80,
            behavior: 'smooth'
        });
    });
});

// Newsletter form submission
const newsletterForm = document.getElementById('newsletter-form');
newsletterForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const email = e.target.querySelector('input[type="email"]').value;
    alert(`Thank you for subscribing with: ${email}`);
    newsletterForm.reset();
});

// Add scroll event listener for navbar
window.addEventListener('scroll', () => {
    const nav = document.querySelector('nav');
    if (window.scrollY > 100) {
        nav.style.background = 'rgba(255, 255, 255, 0.95)';
    } else {
        nav.style.background = 'white';
    }
});

//modal js// Get the modal
var modal = document.getElementById("myModal");

// Get the button that opens the modal
var btn = document.getElementById("myBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks the button, open the modal 
btn.onclick = function() {
    modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
    modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    } // Recipe data
const recipes = {
    'neapolitan': {
        title: 'Classic Neapolitan Pizza',
        ingredients: [
            '4 cups (500g) 00 flour',
            '1½ cups (350ml) water',
            '2 tsp (10g) salt',
            '1 tsp (3g) active dry yeast',
            'San Marzano tomatoes',
            'Fresh mozzarella',
            'Fresh basil',
            'Extra virgin olive oil'
        ],
        instructions: [
            'Mix flour, water, salt, and yeast until combined. Knead for 10-15 minutes until smooth.',
            'Let dough rise at room temperature for 8-12 hours.',
            'Divide dough into 4 balls and let rest for 2 hours.',
            'Preheat oven with pizza stone to highest temperature (ideally 500°F/260°C or higher).',
            'Shape dough by hand into 10-12 inch circles.',
            'Top with crushed tomatoes, torn mozzarella, and a drizzle of olive oil.',
            'Bake for 6-8 minutes until crust is charred and cheese is bubbling.',
            'Finish with fresh basil leaves and extra virgin olive oil.'
        ]
    },
    'newyork': {
        title: 'New York Style Pizza',
        ingredients: [
            '4 cups (500g) bread flour',
            '1½ cups (350ml) warm water',
            '2 tbsp (30ml) olive oil',
            '2 tsp (10g) salt',
            '1 tsp (3g) sugar',
            '1 tsp (3g) active dry yeast',
            'Tomato sauce',
            'Shredded mozzarella'
        ],
        instructions: [
            'Combine flour, water, oil, salt, sugar, and yeast. Mix until dough forms.',
            'Knead for 10-12 minutes until smooth and elastic.',
            'Let rise for 24 hours in refrigerator.',
            'Shape into 16-inch rounds.',
            'Top with sauce and cheese.',
            'Bake at 500°F/260°C for 12-15 minutes.',
            'Slice into large triangular pieces.'
        ]
    },
    'sicilian': {
        title: 'Sicilian Style Pizza',
        ingredients: [
            '4 cups (500g) bread flour',
            '1½ cups (350ml) warm water',
            '3 tbsp (45ml) olive oil',
            '2 tsp (10g) salt',
            '1 tsp (3g) sugar',
            '1 tsp (3g) active dry yeast',
            'Tomato sauce',
            'Shredded mozzarella',
            'Grated Pecorino Romano'
        ],
        instructions: [
            'Mix flour, water, oil, salt, sugar, and yeast until combined.',
            'Knead for 10 minutes until smooth.',
            'Let rise for 2 hours.',
            'Stretch dough into oiled rectangular pan.',
            'Let rise again for 1 hour.',
            'Top with sauce and cheeses.',
            'Bake at 450°F/230°C for 20-25 minutes until golden brown.'
        ]
    }
};

// Modal functionality
const modal = document.getElementById('recipeModal');
const modalClose = document.querySelector('.modal-close');
const modalTitle = document.querySelector('.modal-title');
const ingredientsList = document.getElementById('ingredientsList');
const instructionsList = document.getElementById('instructionsList');

// Add click event to all recipe buttons
document.querySelectorAll('.recipe-card .btn').forEach(button => {
    button.addEventListener('click', (e) => {
        e.preventDefault();
        const recipeType = e.target.closest('.recipe-card').querySelector('.recipe-title').textContent.toLowerCase();
        const recipe = getRecipeData(recipeType);
        showRecipe(recipe);
    });
});

// Close modal when clicking X or outside
modalClose.addEventListener('click', () => {
    modal.style.display = 'none';
});

window.addEventListener('click', (e) => {
    if (e.target === modal) {
        modal.style.display = 'none';
    }
});

// Helper function to get recipe data
function getRecipeData(title) {
    if (title.includes('neapolitan')) return recipes.neapolitan;
    if (title.includes('new york')) return recipes.newyork;
    if (title.includes('sicilian')) return recipes.sicilian;
    return recipes.neapolitan; // Default to neapolitan if no match
}

// Function to display recipe in modal
function showRecipe(recipe) {
    // Clear previous content
    ingredientsList.innerHTML = '';
    instructionsList.innerHTML = '';

    // Set title
    modalTitle.textContent = recipe.title;

    // Add ingredients
    recipe.ingredients.forEach(ingredient => {
        const li = document.createElement('li');
        li.textContent = ingredient;
        ingredientsList.appendChild(li);
    });

    // Add instructions
    recipe.instructions.forEach(instruction => {
        const li = document.createElement('li');
        li.textContent = instruction;
        instructionsList.appendChild(li);
    });

    // Show modal
    modal.style.display = 'block';
}