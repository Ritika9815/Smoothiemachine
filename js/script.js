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
        // Calculate total cost including fruits and extras
    calculatePrice() {
        const fruitCost = this.fruits.length * 1;       // $1 per fruit
        const extrasCost = this.extras.length * 0.5;    // $0.5 per extra
        return this.sizePrice() + fruitCost + extrasCost;
    }

    // Describe method returns a string
    describe() {
        const fruitList = this.fruits.length > 0 ? this.fruits.join(", ") : "no fruits";
        const extraList = this.extras.length > 0 ? this.extras.join(", ") : "no extras";
        const totalPrice = this.calculatePrice().toFixed(2);

        return `You ordered a ${this.size} smoothie with ${fruitList}, using ${this.liquid}, and extras: ${extraList}. Total cost: $${totalPrice}.`;
    }
}
    /* STEP 2: DeluxeSmoothie subclass adds bonus message */
class DeluxeSmoothie extends Smoothie {
    describe() {
        return super.describe() + " Enjoy your deluxe smoothie with a smile.";
    }
}
/* STEP 3: Handle order button click */
document.getElementById('orderBtn').addEventListener('click', () => {
    // Get size
    const size = document.getElementById('size').value;

    // Get selected fruits
    const fruits = Array.from(document.querySelectorAll('input[name="fruits"]:checked'))
                        .map(fruit => fruit.value);

    // Get selected extras
    const extras = Array.from(document.querySelectorAll('input[name="extras"]:checked'))
                        .map(extra => extra.value);

    // Get liquid
    const liquid = document.getElementById('liquid').value;

    // Create a new DeluxeSmoothie object
    const mySmoothie = new DeluxeSmoothie(size, fruits, liquid, extras);

    // Display description on the page
    output.textContent = mySmoothie.describe();

    // Display appropriate image based on size
    switch(size) {
        case 'Small':
            SmoothieImage.src = 'image/small.jpg';
            break;
        case 'Medium':
           smoothieImage.src = 'image/Medium.jpg';
            break;
        case 'Large':
            SmoothieImage.src = 'image/large.jpg';
            break;
    }
     image.style.display = 'block';

    // Log object to console for debugging
    console.log(mySmoothie);
});
/*Attribution:
// Smoothie Machine code inspired by COMP1073 class examples
// Reference for Array.from(): MDN Web Docs
*/


