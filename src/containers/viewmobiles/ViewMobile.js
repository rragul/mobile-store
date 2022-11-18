import React, { useState, useEffect } from "react";
import axios from "axios";
import Card from "../card/CardView";
import "./viewmobile.css";

export default function ViewMobile() {
    const [mobile, setMobile] = useState();

  useEffect(() => {
    let api = axios.create({
      baseURL: "mobile",
    });
    let getMobile = async () => {
      let data = await api
        .get("/")
        .then(({ data }) => data)
        .catch((err) => console.log(err));
      setMobile(data);
    };
    getMobile();
  });

  return (
    <div className="view-panel">
        {mobile?.map((mob) => {
        return <Card key={mob._id} mobile={mob} />;
      })}
    </div>
  )
}
