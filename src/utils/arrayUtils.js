const shuffle = (original_array) => {
    const a = [...original_array]
    for (let i = a.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
  }
  
  const shift = (original_array, offset) => {
    const a = [...original_array]
    for (let i = 0; i < offset; i++) {
      a.unshift(a.pop())
    }
    return a
  }

  export { shuffle, shift }