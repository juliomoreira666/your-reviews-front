"use client"
import { Rating } from '@mui/material';
import Image from 'next/image';
import React, { useEffect, useState } from 'react';
import { api } from '@/lib/axios';
import ReviewModal from './ModalNewReview';
import { FaPen } from 'react-icons/fa6';

const CompanyProfile = () => {
  const [isModalOpen, setModalOpen] = useState(false);
  const openModal = () => {
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  const handleSubmit = (formData: any) => {
    console.log(formData);
    // closeModal();
  };

  const idCompany = typeof window !== 'undefined' ? window.location.pathname.split("/").pop() : null;
  const comments = [
    {
      comment_id: 1,
      user_id: 789,
      text: 'Excelente empresa com cultura inspiradora!',
    },
    {
      comment_id: 2,
      user_id: 101,
      text: 'Aprendi muito aqui. Recomendo a todos.',
    },
  ];



  const [activeTab, setActiveTab] = useState('reviews');
  const [data, setData] = useState<any>([]);
  useEffect(() => {
    async function fetchData() {
      try {
        const response = await api.get(`https://your-reviews-api-295d118672a8.herokuapp.com/company/${idCompany}`);
        setData(response.data);
        console.log(data)
      } catch (error) {
        console.error('Erro ao buscar dados:', error);
      }
    }

    fetchData();
  }, []);

  return (

    <div className=" bg-gray-100 flex items-center justify-center border-solid">
      <div className="w-full h-full max-w-screen-lg bg-white rounded-lg shadow-md overflow-hidden">
        <div className="p-6 max-w-screen-lg mx-auto">
          <div className="flex items-start">
            <Image
              width={20}
              height={20}
              src={data.image_url}
              alt={data.name}
              className="w-20 h-20 rounded-full border border-gray-300 object-contain"
            />
            <div className="ml-4">
              <h1 className="text-2xl font-semibold">{data.name}</h1>
              <div className="flex items-center mt-1">
                <span className="mr-2 text-lg">
                  {data.overallRating && (
                    <Rating name="read-only" value={data.overallRating} readOnly precision={0.5} />
                  )}
                  <span className='text-sm float-right mt-1 ml-1'>({data.numberOfReviews})</span>
                </span>
              </div>
              <p className="text-gray-600 text-justify">
                <strong>Descrição: </strong>
                {data.description}
              </p>
              <p className="mt-2 mb-3 text-gray-600">
                <strong>Endereço: </strong> {data.location}</p>
              <a href={data.website} className="text-blue-600">
                <strong>Site: </strong> {data.website}
              </a>
            </div>
          </div>

          <div className="mt-5">
            <div className="flex">
              <div className="w-full">
                <div className="flex space-x-4 mb-4">
                  <button
                    onClick={() => setActiveTab('reviews')}
                    className={`${activeTab === 'reviews' ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-600'
                      } py-2 px-4 rounded  w-full`}
                  >
                    Avaliações
                  </button>
                  <button
                    onClick={() => setActiveTab('comments')}
                    className={`${activeTab === 'comments' ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-600'
                      } py-2 px-4 rounded  w-full`}
                  >
                    Comentários
                  </button>
                </div>
                <div className="space-y-6 w-full">
                  {activeTab === 'reviews' && data.reviews && data.reviews.length > 0 ? (
                    data.reviews.map((review: any) => (
                      <div key={review.review_id} className="p-4 border rounded shadow-md">
                        <div className="flex items-center mb-2">
                          <Image
                            width={50}
                            height={50}
                            src={`http://cdn.onlinewebfonts.com/svg/img_264570.png`}
                            alt={`Avatar do Usuário ${review.user_id}`}
                            className="rounded-full"
                          />
                          <div className="ml-3">
                            <p className="font-semibold text-lg">{`Avaliação por Usuário ${review.username_user}`}</p>
                          </div>
                        </div>
                        <div className="grid grid-cols-2 gap-4 mt-7">
                          <div>
                            <p className="font-semibold">Aval. da cultura organizacional</p>
                            <p><Rating name="read-only" value={review.culture_rating} readOnly precision={0.5} /></p>
                          </div>
                          <div>
                            <p className="font-semibold">Aval. da liderança</p>
                            <p><Rating name="read-only" value={review.leadership_rating} readOnly precision={0.5} /></p>
                          </div>
                          <div>
                            <p className="font-semibold">Aval. de benefícios e compensação</p>
                            <p><Rating name="read-only" value={review.compensation_rating} readOnly precision={0.5} /></p>
                          </div>
                          <div>
                            <p className="font-semibold">Aval. do equilíbrio entre trabalho e vida pessoal</p>
                            <p><Rating name="read-only" value={review.work_life_balance_rating} readOnly precision={0.5} /></p>
                          </div>
                          <div>
                            <p className="font-semibold">Aval. das oportunidades de desenvolvimento de carreira</p>
                            <p><Rating name="read-only" value={review.career_development_rating} readOnly precision={0.5} /></p>
                          </div>
                          <div>
                            <p className="font-semibold">Aval. do ambiente de trabalho físico e recursos</p>
                            <p><Rating name="read-only" value={review.work_environment_rating} readOnly precision={0.5} /></p>
                          </div>
                          <div>
                            <p className="font-semibold">Aval. das relações interpessoais e trabalho em equipe
                            </p>
                            <p><Rating name="read-only" value={review.interpersonal_relations_rating} readOnly precision={0.5} /></p>
                          </div>
                          <div>
                            <p className="font-semibold">Aval. da gestão de projetos e expectativas</p>
                            <p><Rating name="read-only" value={review.project_management_rating} readOnly precision={0.5} /></p>
                          </div>
                          <div>
                            <p className="font-semibold">Aval. da inovação e desenvolvimento de produtos
                            </p>
                            <p><Rating name="read-only" value={review.innovation_rating} readOnly precision={0.5} /></p>
                          </div>
                          <div>
                            <p className="font-semibold">Aval. da responsabilidade social e ética corporativa
                            </p>
                            <p><Rating name="read-only" value={review.social_responsibility_rating} readOnly precision={0.5} /></p>
                          </div>
                        </div>
                        <div className="mt-4">
                          <h5>Comentário:</h5>
                          <p className="text-gray-600 text-justify mt-2">{review.comment}</p>
                        </div>
                      </div>
                    ))
                  ) : (
                    activeTab === 'reviews' && data.reviews?.length === 0 && (
                      <div className="bg-orange-100 border-l-4 border-orange-500 text-orange-700 p-4" role="alert">
                        <p className="font-bold">Atenção</p>
                        <p>Essa empresa ainda não possui nenhuma avaliação</p>
                      </div>
                    )
                  )}

                  <ReviewModal isOpen={isModalOpen} onClose={closeModal} onSubmit={handleSubmit} />
                </div>

                {activeTab === 'comments' &&
                  comments.map(comment => (
                    <div key={comment.comment_id} className="p-4 border rounded shadow-md">
                      <div className="flex items-center mb-2">
                        <Image
                          width={20}
                          height={20}
                          src={`/images/avatar.png`}
                          alt={`Avatar do Usuário ${comment.user_id}`}
                          className="w-12 h-12 rounded-full"
                        />
                        <div className="ml-3">
                          <p className="font-semibold text-lg">{`Comentário por Usuário ${comment.user_id}`}</p>
                          <div className="flex items-center mt-1 text-gray-600">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              className="h-5 w-5 inline mr-1"
                              viewBox="0 0 20 20"
                              fill="currentColor"
                              aria-hidden="true"
                            >
                            </svg>
                            {comment.text}
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
              </div>
            </div>

          </div>
          <button className="bg-green-500 text-white px-4 py-2 rounded-sm w-full uppercase float-right mt-3 mb-3" onClick={openModal}>
            <FaPen className='float-left mt-1 mr-3' /> Fazer uma avaliação
          </button>
        </div>

      </div>
    </div >
  );
};

export default CompanyProfile;
