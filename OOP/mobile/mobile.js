function Mobile(name, status) {
    this.name = name;
    this.baterry = 100;
    this.draffMemory = [];
    this.inboxMemory = [];
    this.sentMemory = [];
    this.status = status;

    this.isOn = function () {
        return this.status;
    }

    this.turnOnOff = function () {
        this.status = !this.status;
    }

    this.charge = function () {
        if (this.baterry < 100) {
            this.baterry++;
        }
    }

    this.write = function(message) {
        this.consumableBatery();
        this.draffMemory.push(message);
    }

    this.receive = function(message) {
        this.consumableBatery();
        this.inboxMemory.push(message);
    }

    this.send = function(mobile) {
        this.consumableBatery();
        let sendMessage = this.draffMemory.pop();
        mobile.inboxMemory.push(sendMessage);
        this.sentMemory.push(sendMessage);
    }

    this.showInbox = function() {
        console.log("SHOW INBOX OF ", this.name);
        this.consumableBatery();
        this.inboxMemory.forEach(function(message) {
            console.log(message);
        });
    }

    this.showSent = function() {
        console.log("SHOW SENT OF ", this.name);
        this.consumableBatery();
        this.sentMemory.forEach(function(message) {
            console.log(message);
        });
    }

    this.consumableBatery = function() {
        if (this.baterry > 0) {
            this.baterry --;
        } else {
            this.status = false;
        }
    }
}