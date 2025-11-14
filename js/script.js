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
