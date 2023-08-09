// components/ReviewModal.js
import { Rating } from '@mui/material';
import React, { useState } from 'react';
import { FaTimes } from 'react-icons/fa';
import { FaPen } from 'react-icons/fa6';

function ReviewModal({ isOpen, onClose, onSubmit }: { isOpen: any, onClose: any, onSubmit: any }) {
    const [formData, setFormData] = useState({
        culture_rating: 5,
        leadership_rating: 5,
        compensation_rating: 5,
        work_life_balance_rating: 5,
        career_development_rating: 5,
        work_environment_rating: 5,
        interpersonal_relations_rating: 5,
        project_management_rating: 3,
        innovation_rating: 5,
        social_responsibility_rating: 5,
        comment: '',
        username_user: 'Anonimo',
    });

    const handleChange = (e: any) => {
        const { name, value } = e.target;
        const intValue = name.endsWith('_rating') ? parseInt(value) : value;
        setFormData((prevData) => ({
            ...prevData,
            [name]: intValue,
        }));
    };

    const handleSubmit = (e: any) => {
        e.preventDefault();
        onSubmit(formData);
    };

    return (
        <div className={`modal ${isOpen ? 'block' : 'hidden'}`}>
            <div className={`modal-overlay ${isOpen ? 'block' : 'hidden'}`} onClick={onClose}></div>
            <div className="modal-content overflow-auto h-full sm:w-full lg:w-full" >
                <div className="flex justify-end">
                    <button onClick={onClose} className="text-gray-600">
                        <FaTimes />
                    </button>
                </div>
                <form onSubmit={handleSubmit} className="p-4 bg-white">
                    <div className='grid grid-cols-2 gap-4'>
                        <div className="mb-4">
                            <label htmlFor="culture_rating" className="block font-semibold mb-1">
                                Avaliação da cultura organizacional:
                            </label>
                            <Rating
                                id="culture_rating"
                                name="culture_rating"
                                value={Number(formData.culture_rating)}
                                onChange={handleChange}
                                precision={0.5}
                            />
                        </div>
                        <div className="mb-4">
                            <label htmlFor="leadership_rating" className="block font-semibold mb-1">
                                Avaliação de Liderança:
                            </label>
                            <Rating
                                id="leadership_rating"
                                name="leadership_rating"
                                value={formData.leadership_rating}
                                onChange={handleChange}
                            />
                        </div>
                        <div className="mb-4">
                            <label htmlFor="compensation_rating" className="block font-semibold mb-1">
                                Avaliação de benefícios e compensação:
                            </label>
                            <Rating
                                id="compensation_rating"
                                name="compensation_rating"
                                value={formData.compensation_rating}
                                onChange={handleChange}
                            />
                        </div>
                        <div className="mb-4">
                            <label htmlFor="career_development_rating" className="block font-semibold mb-1">
                                Avaliação das oportunidades de desenvolvimento de carreira:
                            </label>
                            <Rating
                                id="career_development_rating"
                                name="career_development_rating"
                                value={formData.career_development_rating}
                                onChange={handleChange}
                            />
                        </div>
                        <div className="mb-4">
                            <label htmlFor="work_environment_rating" className="block font-semibold mb-1">
                                Avaliação do ambiente de trabalho físico e recurso:
                            </label>
                            <Rating
                                id="work_environment_rating"
                                name="work_environment_rating"
                                value={formData.work_environment_rating}
                                onChange={handleChange}
                            />
                        </div>
                        <div className="mb-4">
                            <label htmlFor="interpersonal_relations_rating" className="block font-semibold mb-1">
                                Avaliação das relações interpessoais e trabalho em equipe:
                            </label>
                            <Rating
                                id="interpersonal_relations_rating"
                                name="interpersonal_relations_rating"
                                value={formData.interpersonal_relations_rating}
                                onChange={handleChange}
                            />
                        </div>
                        <div className="mb-4">
                            <label htmlFor="innovation_rating" className="block font-semibold mb-1">
                                Avaliação da inovação e desenvolvimento de produtos:
                            </label>
                            <Rating
                                id="innovation_rating"
                                name="innovation_rating"
                                value={formData.innovation_rating}
                                onChange={handleChange}
                            />
                        </div>
                        <div className="mb-4">
                            <label htmlFor="work_life_balance_rating" className="block font-semibold mb-1">
                                Avaliação do equilíbrio entre trabalho e vida pessoal:
                            </label>
                            <Rating
                                id="work_life_balance_rating"
                                name="work_life_balance_rating"
                                value={formData.work_life_balance_rating}
                                onChange={handleChange}
                            />
                        </div>
                        <div className="mb-4">
                            <label htmlFor="project_management_rating" className="block font-semibold mb-1">
                                Avaliação da gestão de projetos e expectativas:
                            </label>
                            <Rating
                                id="project_management_rating"
                                name="project_management_rating"
                                value={formData.project_management_rating}
                                onChange={handleChange}
                            />
                        </div>
                        <div className="mb-4">
                            <label htmlFor="social_responsibility_rating" className="block font-semibold mb-1">
                                Avaliação da responsabilidade social e ética corporativa:
                            </label>
                            <Rating
                                id="social_responsibility_rating"
                                name="social_responsibility_rating"
                                value={formData.social_responsibility_rating}
                                onChange={handleChange}
                            />
                        </div>
                    </div>

                    <div className="mb-4">
                        <label htmlFor="comment" className="block font-semibold mb-1">
                            Comentário:
                        </label>
                        <textarea
                            id="comment"
                            name="comment"
                            value={formData.comment}
                            onChange={handleChange}
                            className="border border-gray-300 px-2 py-1 w-full"
                            rows={4}
                        ></textarea>
                    </div>

                    <button type="submit" className="bg-green-500 text-white px-4 py-2 rounded-sm w-1/2 uppercase mt-3 mb-3">
                        <FaPen className='float-left mt-1 mr-3' /> Enviar avaliação
                    </button>
                </form>

            </div>
        </div>
    );
}

export default ReviewModal;
