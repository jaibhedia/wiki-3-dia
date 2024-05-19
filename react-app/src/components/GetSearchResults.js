import {useState} from "react";
import IpfsGetObject from "./ipfs/IpfsGetObject";


const GetSearchReults = async (pages, setPages) => {
  // Now, using dummy data
  let dummy = [
    {title: "Test-Aventus 2.0", content: "This is an 24-Hours Hackathon", key: "key"},
    {title: "Test", content: "Test Case for Aventus 2.0", key: "key"}
  ];
  setPages(dummy);
  await IpfsGetObject(setPages, "web3-wiki", "test-content-1.json", dummy);
};

export default GetSearchReults;
