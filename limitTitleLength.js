const limitTitleLength = (title, limit = 17) => {
  const newTitle = [];
  if(title.length > limit) {
    title.split(' ').reduce((acc, cur) => {
      if (acc + cur.length <= limit) {
        newTitle.push(cur);
      }
      return acc + cur.length
    }, 0)
    return `${newTitle.join(' ')} ...}`
  }
  return title;
}

console.log(limitTitleLength(`Dolorem porro est qui quisquam dolorem ipsum quia dolor sit amet, consectetur, adipisci velit`));
