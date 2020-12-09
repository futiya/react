import React,{useState, useEffect} from "react";
const loadJson = (key)=>{console.log("test333---"+key);
key&&JSON.parse(localStorage.getItem(key))};
const saveJson = (key,data)=>{ console.log("test---"+key);
    localStorage.setItem(key,JSON.stringify(data))}
function GithubUser({userName}){
    const [data, setData] = useState(loadJson(`user:${userName}`)); 
    useEffect(() => {
        if (!data) return;
        if(data.userName === userName) return;
        const { name, avatar_url } = data;
        saveJson(`user:${userName}`,{
            name,
            avatar_url,
        });
                 
    }, [data]);

    useEffect(() => {
        if (!userName) return;
        fetch(`https://api.github.com/users/${userName}`)
          .then((resp) => resp.json())
          .then(setData)
          .catch(console.error);
      }, [userName]);

      if (data) return <pre>{JSON.stringify(data, null, 2)}</pre>;
      return null;
}
export default function App() {
    return <GithubUser userName="dajuguan" />;
  }