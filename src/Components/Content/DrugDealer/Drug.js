class Drug {
    constructor(name, price) {
        this.name = name;
        this.price = price;
        this.owned = 0;
        this.boughtAt = undefined;
    }

    buy(amount) {
        this.owned += amount;
        this.boughtAt = this.price;
    }

    sell(amount) {
        this.owned -= amount;
        if (this.owned === 0) {
            this.boughtAt = undefined;
        }
    }
}

export default Drug;