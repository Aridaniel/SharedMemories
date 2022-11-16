import { FC } from "react";
import useEffect from "react";
import router from "next/router"

interface PagenotfoundProps {}

const Pagenotfound: FC<PagenotfoundProps> = ({}) => {

 
    useEffect(()=>{
            console.log("404 caaaaallllll")
    })



  return <div>Pagenotfound</div>;
};

export default Pagenotfound;
