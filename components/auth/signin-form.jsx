"use client";

import Link from "next/link";
import Button from "../ui/button";
import benzbg from "@/app/assets/mercedes-bg.jpg";
import Image from "next/image";
import { useForm } from "react-hook-form";
import { login } from "@/app/auth/actions";
import { useState } from "react";
import ButtonOutline from "../ui/button-outline";
import { FaGoogle } from "react-icons/fa6";

const SigninForm = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const handleFormSubmit = async (data) => {
    try {
      setError(""); // Clear any previous errors
      setLoading(true);

      const response = await login(data);

      if (response.error) {
        setError(response.error);
      }
    } catch (err) {
      setError("Prijava je neuspešna! Proverite podatke i probajte ponovo.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-full max-w-4xl mx-auto bg-bgShade flex justify-center items-center mt-14 rounded-lg shadow-2xl overflow-hidden ">
      <div className="p-6 w-full ">
        {error !== "" && <p className="text-center text-red-400">{error}</p>}
        <h2 className="text-3xl  text-primary text-center mb-6">
          Prijavi se
        </h2>
        <form className="space-y-4" onSubmit={handleSubmit(handleFormSubmit)}>
          <div className="relative">
            <label htmlFor="name" className="block text-foreground mb-1">
              Email:
            </label>
            <input
              type="email"
              name="email"
              {...register("email", {
                required: "Ovo polje je nephodno",
              })}
              className="w-full p-3 border border-gray-300 rounded-md bg-background text-foreground focus:outline-none focus:border-primary"
              placeholder="Unesite vaš email"
            />

            {errors.email && (
              <small className="absolute -bottom-5 right-0 text-red-400">
                {errors.email.message}
              </small>
            )}
          </div>

          <div className="relative">
            <label htmlFor="name" className="block text-foreground mb-1">
              Lozinka
            </label>
            <input
              type="password"
              name="password"
              {...register("password", {
                required: "Ovo polje je nephodno",
                minLength: {
                  value: 8,
                  message: "Lozinka mora imati najmanje 8 karatkera",
                },
              })}
              className="w-full p-3 border border-gray-300 rounded-md bg-background text-foreground focus:outline-none focus:border-primary"
              placeholder="Unesite vašu lozinku"
            />
            {errors.password && (
              <small className="absolute -bottom-5 right-0 text-red-400">
                {errors.password.message}
              </small>
            )}
          </div>

          <div className="flex items-center justify-between">
            <Button type="submit">{loading ? "Loading" : "Prijavi se"}</Button>
          </div>
        </form>

        <p className="text-center text-foreground mt-4">
          Nemate račun?{" "}
          <Link href="/auth/signup" className="text-primary hover:underline">
            Registruj se
          </Link>
        </p>

      <div className="mt-6 w-full">

        <ButtonOutline className="w-full"><FaGoogle /> Prijave se putem Google</ButtonOutline>
      </div>
      </div>

      <Image src={benzbg} alt="Mercedes-Benz" className="w-full max-w-96" />
    </div>
  );
};

export default SigninForm;
