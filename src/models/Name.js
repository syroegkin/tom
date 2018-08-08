class Name {
  first = '';
  last = '';

  constructor(obj) {
    if (!obj) return;
    if ('first' in obj) this.first = obj.first;
    if ('last' in obj) this.last = obj.last;
  }
}

export default Name;
