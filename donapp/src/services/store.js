import AsyncStorage from "@react-native-community/async-storage";

class Store {
  names = {
    ITEMS: "@app:items",
    TOKEN: "@app:token",
    USERNAME: "@app:username"
  };

  removeItem = async id => {
    let items = await AsyncStorage.getItem(this.names.ITEMS);
    items = JSON.parse(items);
    items = items.filter(item => item.id != id);
    this.saveItems(items);
  };

  setItem = async item => {
    if (!item) return;
    let items = await AsyncStorage.getItem(this.names.ITEMS);
    if (!items) {
      await this.saveItems([item]);
    } else {
      let have = false;
      items = JSON.parse(items);
      items = await items.map(size => {
        if (size.id === item.id) {
          have = true;
          size.count = size.count + 1;
          return size;
        }
        return size;
      });
      if (!have) items.push(item);
      this.saveItems(items);
    }
  };

  getItems = async () => {
    let items = await AsyncStorage.getItem(this.names.ITEMS);
    if (!!items) {
      let total = 0;
      items = await JSON.parse(items);
      await items.forEach(item => {
        total += item.price * item.count;
      });
      return { items, total: total };
    } else {
      return { items: [], total: 0 };
    }
  };

  setCount = async (size, count) => {
    let items = await AsyncStorage.getItem(this.names.ITEMS);
    items = await JSON.parse(items);
    items = items.map(item => {
      if (size.id === item.id) {
        item.count = count;
        return item;
      }
      return item;
    });
    this.saveItems(items);
  };

  saveItems = async items => {
    await AsyncStorage.setItem(this.names.ITEMS, JSON.stringify(items));
  };
  clear = async () => {
    await AsyncStorage.clear();
  };
}

export default new Store();
