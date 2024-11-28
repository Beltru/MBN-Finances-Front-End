"use client";

import { useEffect, useState } from "react";
import Navbar from "../../components/Nav-set"; // Asegúrate de que la ruta sea correcta
import { useRouter } from "next/navigation";

const EditableProfile = () => {
  const [isEditing, setIsEditing] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    lastName: "",
    email: "",
    password: "",
  });
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(""); // Mensaje de éxito
  const router = useRouter();

  useEffect(() => {
    const fetchUserData = async () => {
      const email = localStorage.getItem("email");
      if (!email) {
        console.error("No se encontró un email en el localStorage");
        return;
      }

      try {
        const response = await fetch(`http://localhost:9000/auth/user/email/${email}`, {
          method: "GET",
        });

        if (response.ok) {
          const userData = await response.json();
          setFormData({
            name: userData.nombre,
            lastName: userData.apellido,
            email: userData.email,
            password: "", // La contraseña no se debe mostrar
          });
        } else {
          const errorData = await response.json();
          console.error("Error al obtener datos del usuario:", errorData.message);
        }
      } catch (err) {
        console.error("Error en la solicitud:", err);
      }
    };

    fetchUserData();
  }, []);

  const handleEditClick = async () => {
    if (isEditing) {
      const email = localStorage.getItem("email");
      try {
        console.log("Enviando datos al backend:", {
          email,
          nombre: formData.name,
          apellido: formData.lastName,
        });
  
        const response = await fetch(`http://localhost:9000/auth/user/email/${email}`, {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            nombre: formData.name,
            apellido: formData.lastName,
          }),
        });
  
        if (response.ok) {
          setSuccess("Cambios guardados con éxito.");
          setIsEditing(false);
        } else {
          const errorData = await response.json();
          setError(`Error al guardar cambios: ${errorData.message}`);
        }
      } catch (err) {
        console.error("Error en la solicitud:", err);
        setError("Error en la solicitud.");
      }
    } else {
      setIsEditing(true);
    }
  };
  

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  return (
    <div className="pt-20 p-8 h-[100vh] w-[100vw] bg-gradient-to-r from-black via-gray-900 to-black text-white overflow-hidden">
      <nav>
        <Navbar />
      </nav>
      <div className="bg-gray-900 text-white p-8 rounded-lg max-w-md mx-auto mt-10">
        <h2 className="text-2xl font-bold mb-6">Perfil de Usuario</h2>
        {success && <p className="text-green-500">{success}</p>}
        {error && <p className="text-red-500">{error}</p>}
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
            <p className="mt-1">{formData.email}</p>
          </div>
          <button
            onClick={handleEditClick}
            className="mt-4 w-full bg-[#2631cf] hover:bg-[#232981] transition-all duration-200 text-white py-2 px-4 rounded-md font-semibold"
          >
            {isEditing ? "Guardar Cambios" : "Editar Perfil"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default EditableProfile;
