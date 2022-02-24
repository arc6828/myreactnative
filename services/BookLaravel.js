// const url_endpoint = "http://localhost/mylaravel8/public/api/book";
// const url_endpoint = "http://192.168.1.157/mylaravel8/public/api/book";
import { APP_URL } from "@env";
const url_endpoint = APP_URL+"/api/book";
import * as mime from "mime";

const getItems = async () => {
  console.log(APP_URL, url_endpoint);
  try {
    let response = await fetch(url_endpoint);
    let items = await response.json();
    return items;
  } catch (error) {
    console.log(error);
  }
};

const getItemDetail = async (item) => {
  try {
    let response = await fetch(url_endpoint + "/" + item.id);
    item = await response.json();
    return item;
  } catch (error) {
    console.log(error);
  }
};

const storeItem = async (item) => {
  try {
    //CREATE FORM DATA
    let data = new FormData();
    for (let key in item) {
      //if (key == "image") continue;
      data.append(key, item[key]);
    }
    if (item.image.split(":")[0] == "file") {
      //ATTACHED FILE
      data.append("image", {
        uri: item.image,
        name: item.image.split("/").pop(),
        type: mime.getType(item.image),
      });
    }

    let body = {
      method: "POST",
      // body: JSON.stringify(item),
      body: data,
      // headers: { "Content-Type": "application/json" },
      headers: { "Content-Type": "multipart/form-data" },
    };
    let response = await fetch(url_endpoint, body);
    let result = await response.json();
    return result;
  } catch (error) {
    console.log(error);
  }
};

const updateItem = async (item) => {
  try {
    //CREATE FORM DATA
    console.log("UPDATE", item);
    let data = new FormData();
    for (let key in item) {
      //if (key == "image") continue;
      data.append(key, item[key]);
    }
    data.append("_method", "PUT");
    if (item.image.split(":")[0] == "file") {
      //ATTACHED FILE
      data.append("image", {
        uri: item.image,
        name: item.image.split("/").pop(),
        type: mime.getType(item.image),
      });
    }

    let body = {
      method: "POST",
      // body: JSON.stringify(item),
      body: data,
      // headers: { "Content-Type": "application/json" },
      headers: { "Content-Type": "multipart/form-data" },

    };
    let response = await fetch(url_endpoint + "/" + item.id, body);
    let result = await response.json();
    return result;
  } catch (error) {
    console.log(error);
  }
};

const destroyItem = async (item) => {
  try {
    let body = {
      method: "DELETE",
      // body: JSON.stringify(item),
      headers: { "Content-Type": "application/json" },
    };
    let response = await fetch(url_endpoint + "/" + item.id, body);
    let result = await response.json();
    return result;
  } catch (error) {
    console.log(error);
  }
};

export default { getItems, getItemDetail, storeItem, updateItem, destroyItem };

