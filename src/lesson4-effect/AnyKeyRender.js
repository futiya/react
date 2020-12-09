import { FaRProject } from "react-icons/fa";
import React,{useState,useEffect,useMemo,useCallback,useLayoutEffect} from "react"

const useAnyKeyRender = () => {
    const [, forceRender] = useState();
    useEffect(() => {
      window.addEventListener("keydown", forceRender);
      return () => window.removeEventListener("keydown", forceRender);
    }, []);
  };

 function WordCount({children=""}){
    useAnyKeyRender();
    // const words = children.split("");
    const fn=useCallback(
        () => {
            console.log("hello")
            console.log("world")
        },
        [],
    )
    const words =useMemo(() => children.split(""), [children]) ;
    useEffect(() => {
        console.log("refresh");
        fn();
    },[fn])
    return <div>
        <p>{children}</p>
        <p><strong>
            {words.length}-words        </strong>

        </p>
    </div>
}

function useMousePosition(){
    const [x,setX]=useState(0);
    const [y,setY]=useState(0);

    const setPosition = ({x,y})=>{
        setX(x);
        setY(y);
    }

    useLayoutEffect(() => {
        window.addEventListener("mousemove",setPosition);
        return () => {
            window.removeEventListener("mousemove",setPosition);
        };
    }, []);
    return [x,y];
}

// export default function App(){
//     return <WordCount>Open the console</WordCount>
// }

export default function App(){
    const [left,top] = useMousePosition()
    return <div style={{position:"absolute",top,left}}>
        {top}X{left}
    </div>
}