// Get reference to output paragraph
const output = document.getElementById('output');

// Get reference to the smoothie image
const smoothieImage = document.getElementById('smoothieImage');

/* STEP 1: Define the Smoothie class */
class Smoothie {
    constructor(size, fruits, liquid, extras) {
        this.size = size;
        this.fruits = fruits;
        this.liquid = liquid;
        this.extras = extras;
    }
     // Calculate base price for size
    sizePrice() {
        switch(this.size) {
            case 'Small': return 3;
            case 'Medium': return 4;
            case 'Large': return 5;
            default: return 0;
        }
    }
}