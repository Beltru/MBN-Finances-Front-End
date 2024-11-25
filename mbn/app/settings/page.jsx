"use client"

import { useState } from 'react';
import Navbar from '../../components/Nav-set'; // Asegúrate de que la ruta sea correcta

const EditableProfile = () => {
  const [isEditing, setIsEditing] = useState(false);
  const [formData, setFormData] = useState({
    name: 'Beltran',
    lastName: 'Cid',
    email: 'beltran.cid@gmail.com',
    password: '******',
  });

  const handleEditClick = () => {
    setIsEditing(!isEditing);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  return (
    <div className="pt-20 p-8 h-[100vh] bg-gradient-to-r from-black via-gray-900 to-black text-white overflow-hidden">
      <nav>
        <Navbar />
      </nav>
      <div className="bg-gray-900 text-white p-8 rounded-lg max-w-md mx-auto mt-10">
        <h2 className="text-2xl font-bold mb-6">Perfil de Usuario</h2>
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium">Nombre</label>
            {isEditing ? (
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="mt-1 p-2 w-full bg-gray-800 rounded-md border border-gray-700 focus:outline-none focus:border-indigo-500"
              />
            ) : (
              <p className="mt-1">{formData.name}</p>
            )}
          </div>
          <div>
            <label className="block text-sm font-medium">Apellido</label>
            {isEditing ? (
              <input
                type="text"
                name="lastName"
                value={formData.lastName}
                onChange={handleChange}
                className="mt-1 p-2 w-full bg-gray-800 rounded-md border border-gray-700 focus:outline-none focus:border-indigo-500"
              />
            ) : (
              <p className="mt-1">{formData.lastName}</p>
            )}
          </div>
          <div>
            <label className="block text-sm font-medium">Correo Electrónico</label>
            {isEditing ? (
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="mt-1 p-2 w-full bg-gray-800 rounded-md border border-gray-700 focus:outline-none focus:border-indigo-500"
              />
            ) : (
              <p className="mt-1">{formData.email}</p>
            )}
          </div>
          <div>
            <label className="block text-sm font-medium">Contraseña</label>
            {isEditing ? (
              <input
                type="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                className="mt-1 p-2 w-full bg-gray-800 rounded-md border border-gray-700 focus:outline-none focus:border-indigo-500"
              />
            ) : (
              <p className="mt-1">{'*'.repeat(formData.password.length)}</p>
            )}
          </div>
          <button
            onClick={handleEditClick}
            className="mt-4 w-full bg-[#2631cf] hover:bg-[#232981] transition-all duration-200 text-white py-2 px-4 rounded-md font-semibold"
          >
            {isEditing ? 'Guardar Cambios' : 'Editar Perfil'}
          </button>
        </div>
      </div>
    </div>
  );
};

export default EditableProfile;
