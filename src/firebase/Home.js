import React, { useState, useEffect } from "react";
import { app } from "../base";

const Home = () => {
  // accessing data from our firebase database
  const collectionData = app.firestore().collection("students");
  const [data, setData] = useState([]);

  // to get the data
  const getData = async () => {
    await collectionData.onSnapshot((snapshot) => {
      const arr = [];
      // iterating through the collection
      snapshot.forEach((doc) => {
        // using the spread operator (...) and deconstructing
        arr.push({ ...doc.data(), id: doc.id });
      });
      setData(arr);
      console.log(data);
    });
  };
  useEffect(() => {
    getData();
  }, []);
  return (
    <div>
      <div>Backend</div>
      <div>
        {data.map(({ id, name, stack }) => (
          <div key={id}>
            {name} { }
            {stack}
            <br/>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
