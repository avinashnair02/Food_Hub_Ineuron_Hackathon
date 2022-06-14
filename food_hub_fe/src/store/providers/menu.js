import { MenuContext } from "../context";
import React, { useState } from "react";
import { useAuth } from "../hooks";

const MenuProvider = ({ children }) => {
  const [menuItems, setMenuItems] = useState([]);
  const { db } = useAuth();
  const getMenuItems = async () => {
    const categoryRef = db.collection("categories");
    const itemsRef = db.collection("items");
    const ss = await categoryRef.get();
    let arr = [];

    for (let category of ss.docs) {
      const dd = category.data();
      let items = [];
      for (let iii of dd.items) {
        const data = (await itemsRef.doc(iii.id).get()).data();
        items.push(data);
      }
      arr.push({
        ...dd,
        items,
      });
    }
    console.log("###", arr);
    setMenuItems(arr);
  };
  return (
    <MenuContext.Provider value={{ menuItems, getMenuItems }}>
      {children}
    </MenuContext.Provider>
  );
};

export default MenuProvider;
