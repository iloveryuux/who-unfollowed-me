const list = require('../data/follower.json');

module.exports = followers => {
    if (list.length === 0) return;

    followers.forEach(n =>
        list.forEach(m => {
            if (n === m) {
                const index = list.indexOf(n);
                list.splice(index, 1);
            }
        })
    );
    return list;
};
