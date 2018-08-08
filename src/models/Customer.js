import Name from './Name';

class Customer {
  greetings = '';
  friends = '';
  tags = '';
  longitude = 0;
  latitude = 0;
  registered = new Date();
  about = '';
  address = '';
  phone = '';
  email = '';
  company = '';
  name = new Name();
  eyeColor = '';
  age = 0;
  picture = '';
  balance = '';
  isActive = false;
  guid = 0;
  index = 0;
  id = '';

  constructor(obj) {
    if (!obj) return;
    if ('greetings' in obj) this.greetings = obj.greetings;
    if ('friends' in obj) this.friends = obj.friends;
    if ('tags' in obj) this.tags = obj.tags;
    if ('longitude' in obj) this.longitude = parseFloat(obj.longitude);
    if ('latitude' in obj) this.latitude = parseFloat(obj.latitude);
    if ('registered' in obj) this.registered = Date.parse(obj.registered);
    if ('about' in obj) this.about = obj.about;
    if ('address' in obj) this.address = obj.address;
    if ('phone' in obj) this.phone = obj.phone;
    if ('email' in obj) this.email = obj.email;
    if ('company' in obj) this.company = obj.company;
    if ('name' in obj) this.name = new Name(obj.name);
    if ('eyeColor' in obj) this.eyeColor = obj.eyeColor;
    if ('age' in obj) this.age = obj.age;
    if ('picture' in obj) this.picture = obj.picture;
    if ('balance' in obj) this.balance = obj.balance;
    if ('isActive' in obj) this.isActive = obj.isActive;
    if ('guid' in obj) this.guid = obj.guid;
    if ('index' in obj) this.index = obj.index;
    if ('_id' in obj) this.id = obj._id; // eslint-disable-line no-underscore-dangle
  }
}

export default Customer;
