// Task 6

Function.prototype.bind = function (ctx) {
    // Your code goes here
    const func = this;
    return function () {
        if (this && this.prop) {
            return func.apply(this);
        }
        return func.apply(ctx);
    };
};
