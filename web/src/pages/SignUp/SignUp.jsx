import React from 'react';
import { useFormik } from 'formik';
import * as yup from 'yup';
import axios from 'axios';
import Input from '../../components/input/Input';

const SignUp = ({ signInUser }) => {
    
    const validationSchema = yup.object({
        name: yup.string().required("Digite seu email"),
        username: yup.string().required("Digite seu nome de usuário"),
        email: yup.string().required("Digite seu email").email("Email inválido!"),
        password: yup.string().required("Digite sua senha"),
    })
    const formik = useFormik({
        onSubmit: async (values) => {
            const res = await axios.post("http://localhost:9901/login", {
                name: values.name,
                username: values.username,
                username: values.email,
                password: values.password,
            });

            signInUser(res.data);
        },
        validationSchema,
        validateOnMount: true,
        initialValues: {
            email: '',
            password: '',
        },
    });

    return (
        <div className="h-full flex flex-col justify-center p-12 space-y-6">
            <h1 className="text-3xl">Crie sua conta</h1>
            <form className="space-y-6" onSubmit={formik.handleSubmit}>
                <div className="space-y-2">
                    <Input
                        type="text"
                        name="name"
                        placeholder="Nome"
                        value={formik.values.name}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                    />
                    {(formik.touched.name && formik.errors.name) && (
                        <span className="text-red-500 text-sm">{formik.errors.name}</span>
                    )}
                </div>
                <div className="space-y-2">
                    <Input
                        type="text"
                        name="username"
                        placeholder="Nome de usuário"
                        value={formik.values.username}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                    />
                    {(formik.touched.username && formik.errors.username) && (
                        <span className="text-red-500 text-sm">{formik.errors.username}</span>
                    )}
                </div>
                <div className="space-y-2">
                    <Input
                        type="text"
                        name="email"
                        placeholder="Email"
                        value={formik.values.email}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                    />
                    {(formik.touched.email && formik.errors.email) && (
                        <span className="text-red-500 text-sm">{formik.errors.email}</span>
                    )}
                </div>
                <div className="space-y-2">
                    <Input
                        type="password"
                        name="password"
                        placeholder="Senha"
                        value={formik.values.password}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                    />
                    {(formik.touched.password && formik.errors.password) && (
                        <span className="text-red-500 text-sm">{formik.errors.password}</span>
                    )}
                </div>
                <button
                    type="submit"
                    disabled={formik.isSubmitting || !formik.isValid}
                    className="bg-birdBlue px-5 py-3 rounded-full disabled:opacity-50 w-full"
                >
                    {formik.isSubmitting ? "Entrando..." : "Entrar"}
                </button>
            </form>

            <span className="text-sm text-silver text-center">
                Não tem conta? <a className="text-birdBlue">Inscreva-se</a>
            </span>
        </div>
    );
}
 
export default SignUp;