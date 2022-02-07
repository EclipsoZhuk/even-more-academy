class HallOfFame {
    constructor(size, players) {
        this.size = size ?? 5;
        this.players = players ? this.sort(players) : Array(size);
    }

    list() {
        let list = this.players.map(p => `${p[0]}: ${p[1]}`);
        return list.slice(0, this.size);
    }

    add(player) {
        this.players.push(player);
        this.players = this.sort(this.players);
    }

    sort(players) {
        return players.sort((a, b) => {
            if (b[1] === a[1]) {
                if (a[0] < b[0]) {
                    return -1;
                }
                if (a[0] > b[0]) {
                    return 1;
                }
                return 0;
            }
            return b[1] - a[1];
        });
    }
}

// const top3 = new HallOfFame(3, [
//     ['Ada', 99],
//     ['Bob', 42],
//     ['Clo', 101],
//     ['Dan', 3],
// ]);
// console.log(top3.list());
// top3.add(['Dan', 54]);
// console.log(top3.list());
