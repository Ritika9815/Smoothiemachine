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

    sizePrice() {
        switch(this.size) {
            case 'Small': return 3;
            case 'Medium': return 4;
            case 'Large': return 5;
            default: return 0;
        }
    }

    calculatePrice() {
        const fruitCost = this.fruits.length * 1;
        const extrasCost = this.extras.length * 0.5;
        return this.sizePrice() + fruitCost + extrasCost;
    }

    describe() {
        const fruitList = this.fruits.length > 0 ? this.fruits.join(", ") : "no fruits";
        const extraList = this.extras.length > 0 ? this.extras.join(", ") : "no extras";
        const totalPrice = this.calculatePrice().toFixed(2);
        return `You ordered a ${this.size} smoothie with ${fruitList}, using ${this.liquid}, and extras: ${extraList}. Total cost: $${totalPrice}.`;
    }
}

/* DeluxeSmoothie subclass */
class DeluxeSmoothie extends Smoothie {
    describe() {
        return super.describe() + " Enjoy your deluxe smoothie with a smile!";
    }
}

/* ORDER BUTTON */
document.getElementById('orderBtn').addEventListener('click', () => {
    const size = document.getElementById('size').value;
    const fruits = Array.from(document.querySelectorAll('input[name="fruits"]:checked')).map(f => f.value);
    const extras = Array.from(document.querySelectorAll('input[name="extras"]:checked')).map(e => e.value);
    const liquid = document.getElementById('liquid').value;

    const mySmoothie = new DeluxeSmoothie(size, fruits, liquid, extras);

    output.textContent = mySmoothie.describe();

    // Display image (jpg files)
    switch(size) {
        case 'Small': smoothieImage.src = 'image/small.jpg'; break;
        case 'Medium': smoothieImage.src = 'image/Medium.jpg'; break;
        case 'Large': smoothieImage.src = 'image/large.jpg'; break;
    }
    smoothieImage.style.display = 'block';
    console.log(mySmoothie);
});

/* RESET BUTTON */
document.getElementById('resetBtn').addEventListener('click', () => {
    document.getElementById('smoothieForm').reset();
    output.textContent = '';
    smoothieImage.style.display = 'none';
});

/* Attribution:
// Smoothie Machine code inspired by COMP1073 class examples
// Reference for Array.from(): MDN Web Docs
*/




