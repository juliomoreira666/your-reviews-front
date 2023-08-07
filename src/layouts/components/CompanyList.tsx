"use client";
import { api } from "@/lib/axios";
import { Rating } from "@mui/material";
import { useEffect, useState } from "react";

const CompanyList = () => {
const [empresas, setEmpresas] = useState([]);

  useEffect(() => {
    fetchEmpresas(); // Chama a função que faz a chamada da API
  }, []);

  const fetchEmpresas = async () => {
    try {
      const response = await api.get('http://localhost:3000/company'); // Use sua URL da API
      setEmpresas(response.data);
    } catch (error) {
      console.error('Erro ao buscar os dados da API:', error);
    }
  };

  return (
   <section className={`section-sm ${0 % 2 === 0 && "bg-gradient"} text-center`}>
      <h2 className="mb-4 text-center">Algumas das empresas avaliadas</h2>
      <div className="container">
        <div className="row items-center justify-between">
          <div className="flex flex-wrap justify-between items-center w-full">
            {empresas.map((empresa: any )=> (
              <div className="w-full md:w-1/2 lg:w-1/3 p-4 flex items-start max-h-28" key={empresa.company_id}>
                <div className="mr-4">
                  <img src={empresa.image_url} alt={`Logo ${empresa.name}`} className="w-16 h-16 mr-4 rounded-lg border border-gray-300 object-contain" />
                </div>
                <div>
                  <h3 className="text-lg font-bold underline cursor-pointer text-left">{empresa.name}</h3>
                  <div className="flex items-center mt-2">
                    <Rating name="read-only" value={empresa.overallRating} readOnly precision={0.5}/> <small className="ml-1 mt-1"> ({empresa.numberOfReviews})</small>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CompanyList;