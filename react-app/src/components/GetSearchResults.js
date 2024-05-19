import { useState } from "react";
import IpfsGetObject from "./ipfs/IpfsGetObject";
import '../components/css/SearchedItem.css'; // Import the CSS file

const GetSearchResults = async (pages, setPages) => {
  // Now, using dummy data
  let dummy = [
    { title: "Japan", content: "hogehoge", key: "key" },
    { title: "Australia", content: "hogehoge", key: "key" }
  ];
  setPages(dummy);
  await IpfsGetObject(setPages, "wiki3pedia", "test-content-1.json", dummy);
};

export default GetSearchResults;
