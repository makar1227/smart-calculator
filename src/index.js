class SmartCalculator {
    constructor(initialValue) {
        this.expression = [initialValue];
    }

    add(number) {
        this.expression.push("+");
        this.expression.push(number);
        return this;
    }

    subtract(number) {
        this.expression.push("-");
        this.expression.push(number);
        return this;
    }

    multiply(number) {
        this.expression.push("*");
        this.expression.push(number);
        return this;
    }

    devide(number) {
        this.expression.push("/");
        this.expression.push(number);
        return this;
    }

    pow(number) {
        let val = this.expression.pop();
        if(typeof(val)=="string" && val.includes("Math.pow")){
            let tempLength = val.indexOf(")")-(val.indexOf(",")+1);
            let temp = val.substr(val.indexOf(",")+1,tempLength);
            number=Math.pow(temp, number);
            tempLength= val.indexOf(",")-(val.indexOf("(")+1);
            val = val.substr(val.indexOf("(")+1,tempLength);
        }
        this.expression.push("Math.pow("+val+","+number+")");
        return this;
    }
    valueOf() {
        console.log("RESULT = " + this.expression)
        this.expression = eval(this.expression.join(""));
        return this.expression;}
}

module.exports = SmartCalculator;

