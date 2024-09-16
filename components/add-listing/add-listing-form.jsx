"use client";

import { useForm } from "react-hook-form";
import Button from "../ui/button";
import { useEffect, useState } from "react";
import { createClient, supabaseUrl } from "@/lib/supabase/client";
import { createListing } from "@/app/dashboard/actions";
import toast from "react-hot-toast";

const AddListingForm = () => {
  const [loading, setLoading] = useState(false);
  const [userId, setUserId] = useState("");

  useEffect(() => {
    getUserId();
  }, []);

  const getUserId = async () => {
    const supabase = createClient();
    try {
      const { data } = await supabase.auth.getUser();
      setUserId(data?.user?.id);
    } catch (error) {
      throw new Error("Error");
    }
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const onSubmit = async (data) => {
    try {
      setLoading(true);

      // Handle image uploads on the client side
      const imagePaths = await uploadImagesToSupabase(data.car_images);

      if (!userId) {
        toast.error("Nije moguće uspostaviti konekciju. Probajte ponovo");
        return;
      }

      const newCarData = {
        ...data,
        car_images: imagePaths,
        profile_id: userId,
      };

      const response = await createListing(newCarData);

      if (response.error) {
        toast.error(response.error);
      }

      toast.success("Oglas je uspešno objavljen");
    } catch (err) {
      console.log(err);
      toast.success("Greška u toku objave oglasa! Pokušajte ponovo");
    } finally {
      setLoading(false);
      reset();
    }
  };

  async function uploadImagesToSupabase(images) {
    const supabase = createClient();
    const imagePaths = [];

    // Convert FileList to an array
    const imagesArray = Array.from(images);

    for (const image of imagesArray) {
      const imageName = `${image.name}-${Math.random()}`.replace(/\s+/g, "-");
      const { error } = await supabase.storage
        .from("pictures")
        .upload(imageName, image);

      if (error) {
        toast.error("Jednu ili više slika nije bilo moguće objaviti");
        throw new Error("One or more images could not be published");
      }

      const imagePath = `${supabaseUrl}/storage/v1/object/public/pictures/${imageName}`;
      imagePaths.push(imagePath);
    }

    return imagePaths;
  }

  return (
    <div className="min-h-full max-w-4xl mx-auto bg-bgShade flex justify-center items-center mt-14 rounded-lg shadow-lg overflow-hidden ">
      <div className="p-6 w-full ">
        <h2 className="text-3xl font-semibold text-primary text-center mb-6">
          Dodaj oglas
        </h2>
        <form className="space-y-4" onSubmit={handleSubmit(onSubmit)}>
          <div className="relative">
            <label
              htmlFor="name"
              className="block text-foreground mb-1 font-bold"
            >
              Model:
            </label>
            <input
              type="model"
              name="model"
              {...register("model", {
                required: "Ovo polje je nephodno",
              })}
              className="w-full p-3 border border-gray-300 rounded-md bg-background text-foreground focus:outline-none focus:border-primary"
              placeholder="Unesite model vozila"
            />

            {errors.model && (
              <small className="absolute -bottom-5 right-0 text-red-400">
                {errors.model.message}
              </small>
            )}
          </div>

          <div className="flex justify-between gap-4">
            {/* LINIJA */}
            <div className="relative w-full">
              <label
                htmlFor="name"
                className="block text-foreground mb-1 font-bold"
              >
                Linija
              </label>
              <select
                name="line"
                {...register("line", {
                  required: "Ovo polje je nephodno",
                })}
                className="w-full p-3 border border-gray-300 rounded-md bg-background text-foreground focus:outline-none focus:border-primary"
                placeholder="Unesite vašu lozinku"
              >
                <option value="Običan">Običan</option>
                <option value="AMG">AMG</option>
                <option value="Maybach">Maybach</option>
                <option value="EQ">EQ</option>
              </select>

              {errors.line && (
                <small className="absolute -bottom-5 right-0 text-red-400">
                  {errors.line.message}
                </small>
              )}
            </div>

            <div className="relative w-full">
              <label
                htmlFor="name"
                className="block text-foreground mb-1 font-bold"
              >
                Vrsta goriva
              </label>
              <select
                name="fuel_type"
                {...register("fuel_type", {
                  required: "Ovo polje je nephodno",
                })}
                className="w-full p-3 border border-gray-300 rounded-md bg-background text-foreground focus:outline-none focus:border-primary"
                placeholder="Unesite vašu lozinku"
              >
                <option value="Benzin">Benzin</option>
                <option value="Dizel">Dizel</option>
                <option value="Hybrid">Hybrid</option>
                <option value="Struja">Struja</option>
              </select>

              {errors.fuel_type && (
                <small className="absolute -bottom-5 right-0 text-red-400">
                  {errors.fuel_type.message}
                </small>
              )}
            </div>

            {/* POGON */}

            <div className="relative w-full">
              <label
                htmlFor="name"
                className="block text-foreground mb-1 font-bold"
              >
                Pogon
              </label>
              <select
                name="drivetrain"
                {...register("drivetrain", {
                  required: "Ovo polje je nephodno",
                })}
                className="w-full p-3 border border-gray-300 rounded-md bg-background text-foreground focus:outline-none focus:border-primary"
                placeholder="Unesite vašu lozinku"
              >
                <option value="Prednji">Prednji</option>
                <option value="Zadnji">Zadnji</option>
                <option value="4matic">4matic</option>
              </select>

              {errors.drivetrain && (
                <small className="absolute -bottom-5 right-0 text-red-400">
                  {errors.drivetrain.message}
                </small>
              )}
            </div>
          </div>

          <div className="flex justify-between gap-4">
            {/* KUBIKAZA */}
            <div className="relative w-full">
              <label
                htmlFor="name"
                className="block text-foreground mb-1 font-bold"
              >
                Kubikaža:
              </label>
              <input
                type="text"
                name="engine_size"
                {...register("engine_size", {
                  required: "Ovo polje je nephodno",
                })}
                className="w-full p-3 border border-gray-300 rounded-md bg-background text-foreground focus:outline-none focus:border-primary"
                placeholder="Unesite kubikažu vozila"
              />

              {errors.engine_size && (
                <small className="absolute -bottom-5 right-0 text-red-400">
                  {errors.engine_size.message}
                </small>
              )}
            </div>

            {/* SNAGA */}
            <div className="relative w-full">
              <label
                htmlFor="name"
                className="block text-foreground mb-1 font-bold"
              >
                Snaga:
              </label>
              <input
                type="number"
                name="power"
                min="0"
                {...register("power", {
                  required: "Ovo polje je nephodno",
                })}
                className="w-full p-3 border border-gray-300 rounded-md bg-background text-foreground focus:outline-none focus:border-primary"
                placeholder="Unesite snagu vozila u konjskim snagama"
              />

              {errors.power && (
                <small className="absolute -bottom-5 right-0 text-red-400">
                  {errors.power.message}
                </small>
              )}
            </div>

            {/* OBRTNI MOMENT */}

            <div className="relative w-full">
              <label
                htmlFor="name"
                className="block text-foreground mb-1 font-bold"
              >
                Obrtni moment:
              </label>
              <input
                type="number"
                name="torque"
                min="0"
                {...register("torque", {
                  required: "Ovo polje je nephodno",
                })}
                className="w-full p-3 border border-gray-300 rounded-md bg-background text-foreground focus:outline-none focus:border-primary"
                placeholder="Unesite obrtni moment vozila"
              />

              {errors.torque && (
                <small className="absolute -bottom-5 right-0 text-red-400">
                  {errors.torque.message}
                </small>
              )}
            </div>
          </div>

          <div className="flex justify-between gap-4">
            {/* GODINA PROIZVODNJE */}
            <div className="relative w-full">
              <label
                htmlFor="name"
                className="block text-foreground mb-1 font-bold"
              >
                Godina proizvodnje:
              </label>
              <input
                type="number"
                name="production_year"
                {...register("production_year", {
                  required: "Ovo polje je nephodno",
                  min: {
                    value: 1950, // Set the minimum year to 1900
                    message: "Minimum je 1950",
                  },
                  max: {
                    value: new Date().getFullYear(),
                    message:
                      "Godina proizvodnje ne moze biti veca od trenutne godine",
                  },
                })}
                className="w-full p-3 border border-gray-300 rounded-md bg-background text-foreground focus:outline-none focus:border-primary"
                placeholder="Unesite godinu proizvodnje"
              />

              {errors.production_year && (
                <small className="absolute -bottom-5 right-0 text-red-400">
                  {errors.production_year.message}
                </small>
              )}
            </div>

            {/* BOJA */}

            <div className="relative w-full">
              <label
                htmlFor="name"
                className="block text-foreground mb-1 font-bold"
              >
                Boja:
              </label>
              <input
                type="text"
                name="color"
                {...register("color", {
                  required: "Ovo polje je nephodno",
                })}
                className="w-full p-3 border border-gray-300 rounded-md bg-background text-foreground focus:outline-none focus:border-primary"
                placeholder="Unesite boju vozila"
              />

              {errors.color && (
                <small className="absolute -bottom-5 right-0 text-red-400">
                  {errors.color.message}
                </small>
              )}
            </div>
          </div>

          <div className="flex justify-between gap-4">
            {/* TIP VOZILA */}
            <div className="relative w-full">
              <label
                htmlFor="name"
                className="block text-foreground mb-1 font-bold"
              >
                Tip:
              </label>
              <select
                name="car_type"
                {...register("car_type", {
                  required: "Ovo polje je nephodno",
                })}
                className="w-full p-3 border border-gray-300 rounded-md bg-background text-foreground focus:outline-none focus:border-primary"
                placeholder="Unesite vašu lozinku"
              >
                <option value="Sedan">Sedan</option>
                <option value="Hatchback">Hatchback</option>
                <option value="Karavan">Karavan</option>
                <option value="Kupe">Kupe</option>
                <option value="Kabrio">Kabrio</option>
                <option value="SUV">SUV</option>
              </select>

              {errors.car_type && (
                <small className="absolute -bottom-5 right-0 text-red-400">
                  {errors.car_type.message}
                </small>
              )}
            </div>

            {/* STANJE */}
            <div className="relative w-full">
              <label
                htmlFor="name"
                className="block text-foreground mb-1 font-bold"
              >
                Stanje
              </label>
              <select
                name="car_state"
                {...register("car_state", {
                  required: "Ovo polje je nephodno",
                })}
                className="w-full p-3 border border-gray-300 rounded-md bg-background text-foreground focus:outline-none focus:border-primary"
                placeholder="Unesite vašu lozinku"
              >
                <option value="Novo">Novo</option>
                <option value="Polovno">Polovno</option>
                <option value="Klasik">Klasik</option>
              </select>

              {errors.car_state && (
                <small className="absolute -bottom-5 right-0 text-red-400">
                  {errors.car_state.message}
                </small>
              )}
            </div>
          </div>

          <div className="relative w-full">
            <label
              htmlFor="car_images"
              className="block text-foreground mb-1 font-bold"
            >
              Fotografije
            </label>
            <input
              type="file"
              multiple
              accept="image/*"
              {...register("car_images", {
                required: "Najmanje jedna fotografija je potrebna",
              })}
            />
          </div>

          {/* END FORM */}

          <div className="flex items-center justify-between">
            <Button type="submit" disabled={loading}>
              {loading ? "Ucitavanje" : "Dodaj oglas"}
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddListingForm;
