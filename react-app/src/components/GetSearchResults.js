import {useState} from "react";
import IpfsGetObject from "./ipfs/IpfsGetObject";


const GetSearchReults = async (pages, setPages) => {
  // Now, using dummy data
  let dummy = [
    { title: "Test Aventus", content: "Test Case", key: "key" },
    { title: "Test Case", content: "Test", key: "key" }
  ];
  setPages(dummy);
  await IpfsGetObject(setPages, "wiki-3-dia", "", dummy);
};

export default GetSearchReults;
