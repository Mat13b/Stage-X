import React, { useState, useEffect } from "react";
import { Link, Routes, Route } from "react-router-dom";
import data from "./Data.json";
import image from "../assets/la-musique.svg";
import Button from "@mui/material/Button";
import Allgame from "../Allgame2/Allgame";

function Produit() {
  const [produits, setProduits] = useState([]);

  useEffect(() => {
    setProduits(data);
  }, []);

  return (
    <div>
      <Link
        to="/Nosproduits"
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          color: "white",
          backgroundColor: "#6868C0",
          padding: "10px",
          margin: "10px",
          borderRadius: "25px",
        }}
      >
        precedent
      </Link>
      <h2>Tous les Instruments</h2>
      <main
        style={{
          display: "flex",
          flexWrap: "wrap",
        }}
      >
        {produits.map((produit) => {
          return (
            <div
              key={produit.id}
              style={{
                backgroundColor: "#F0F0F0",
                borderRadius: "25px",
                flex: "1",
                padding: "10px",
                margin: "10px",
              }}
            >
              <h4>{produit.caption}</h4>
              <img src={produit.url} alt="musique" width={250} height={150} />
              <p>{produit.description}</p>
              <img src={image} alt="musique" width={50} height={50} />
              <Button
                style={{
                  backgroundColor: "#6868C0",
                  color: "white",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                {produit.action}
              </Button>
              <h4>{produit.prix}</h4>
            </div>
          );
        })}
      </main>
      <Routes>
        <Route path="/Nosproduits" element={<Allgame />} />
        <Route path="/Nosservices" element={<Allgame />} />
      </Routes>
    </div>
  );
}

export default Produit;
