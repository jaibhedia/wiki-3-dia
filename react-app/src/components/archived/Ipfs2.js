import { useEffect, useState } from "react";
import * as IPFS from 'ipfs-core'
import { create as ipfsHttpClient } from "ipfs-http-client";

const Ipfs2 = () => {
  const [ipfs, setIpfs] = useState();
  const data = 'Hello, Web3Wiki';

  // const client = ipfsHttpClient("https://api.filebase.io/v1/ipfs");

  // async function onChange(e) {
  //   const file = e.target.files[0];
  //   try {
  //       const added = await client.add(file, {
  //           progress: (prog) => console.log(`received: ${prog}`),
  //       });
  //      const url = `https://api.filebase.io/v1/ipfs/${added.path}`;
  //      setFileUrl(url);
  //   } catch (e) {
  //     console.log(e);
  //   }
  // }

  // useEffect(() => {
  //   (async () => {
  //     await onChange();
  //   })()
  // },[])

  useEffect(() => {
    (async () => {
      const node = await IPFS.create('https://api.filebase.io/v1/ipfs/NzZEMTJFMkYzM0I1OTNBQUREOTE6cnAzNU5PRDZPMmZSa3BjeVV1OWgxNGY1TjdzMUFwdlZJak9RZlp1djp3aWtpLTMtZGlh');
      console.log(node);
      setIpfs(node);

      const results = node.add(data);
      let cid;
      for await( cid of results ) {
        console.log(cid.toString());
      }
    })()
  },[])

  return (
    <div>{ipfs}</div>
  )
}

export default Ipfs2;
