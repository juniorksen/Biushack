import React, { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const RegisterForm = () => {
    const [error, setError] = useState(null);
    const [success, setSuccess] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError(null);
        setSuccess(false);

        const formData = new FormData(e.target);

        try {
            const response = await fetch('/login', {
                method: 'POST',
                body: formData,
            });

            if (response.ok) {
                const result = await response.json();
                if (result.success) {
                    setSuccess(true);
                    toast.success("Registro exitoso!");
                    window.location.href = '/Account'; 
                } 
            } else {
                const errorResult = await response.json();
                setError(errorResult.error || "Error al registrar la cuenta.");
                toast.error(errorResult.error || "Hubo un problema con el registro.");
            }
        } catch (error) {
            toast.error("Nombre de usuario ya.");
        }
    };

    return (
        <div>
            <style jsx>{`
                /* Estilos adicionales para mejorar el contraste */
                input {
                    background-color: #f7fafc; /* Fondo claro */
                    border: 2px solid #a0aec0; /* Borde gris claro */
                    transition: border-color 0.3s;
                }

                input:focus {
                    border-color: #4299e1; /* Borde azul al enfocar */
                    outline: none; /* Quita el contorno por defecto */
                    box-shadow: 0 0 0 2px rgba(66, 153, 225, 0.5); /* Sombra azul al enfocar */
                }
            `}</style>

            <form onSubmit={handleSubmit} method="POST" encType="multipart/form-data" className="space-y-4">           
                <div>
                    <label htmlFor="username" className="block text-sm font-medium text-gray-700">Nombre de usuario</label>
                    <input type="text" id="username" name="username" required className="mt-1 block w-full h-8 rounded-md shadow-sm" />
                </div>
                <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700">Correo electrónico</label>
                    <input type="email" id="email" name="email" required className="mt-1 block w-full h-8 rounded-md shadow-sm" />
                </div>
                <div>
                    <label htmlFor="password" className="block text-sm font-medium text-gray-700">Contraseña</label>
                    <input type="password" id="password" name="password" required className="mt-1 block w-full h-8 rounded-md shadow-sm" />
                </div>
                <div>
                    <label htmlFor="profile_picture" className="block text-sm font-medium text-gray-700">Foto de perfil</label>
                    <input type="file" id="profile_picture" name="profile_picture" accept="image/*" className="mt-1 block w-full text-sm text-gray-500" />
                </div>
                <div>
                    <label htmlFor="cover_photo" className="block text-sm font-medium text-gray-700">Foto de portada</label>
                    <input type="file" id="cover_photo" name="cover_photo" accept="image/*" className="mt-1 block w-full text-sm text-gray-500" />
                </div>

                <button type="submit" className="w-full bg-green-600 text-white py-2 rounded-md hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 mt-12">
                    Crear Cuenta
                </button>
                
                <button
                    type="button"
                    onClick={() => window.location.href = '/login-form'}
                    className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 mt-4"
                >
                    Ir a Iniciar Sesión
                </button>

                {error && <p className="mt-2 text-sm text-red-600">{error}</p>}
                <ToastContainer theme="colored" />
            </form>
        </div>
    );
};

export default RegisterForm;
