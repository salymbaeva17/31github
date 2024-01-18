const part = (x) => {
    let count = x.filter(e => ['Partridge', 'PearTree', 'Chat', 'Dan', 'Toblerone', 'Lynn', 'AlphaPapa', 'Nomad'].indexOf(e) !== -1).length;
    return count > 0 ? 'Mine\'s a Pint' + '!'.repeat(count) : 'Lynn, I\'ve pierced my foot on a spike!!';
}

console.log(part(['Grouse', 'Partridge', 'Pheasant']))
console.log(part(['Pheasant', 'Goose', 'Starling', 'Robin']))
console.log(part(['Grouse', 'Partridge', 'Pheasant', 'Goose', 'Starling', 'Robin', 'Thrush', 'Emu', 'PearTree', 'Chat', 'Dan', 'Square', 'Toblerone', 'Lynn', 'AlphaPapa', 'BMW', 'Graham', 'Tool', 'Nomad', 'Finger', 'Hamster']))
