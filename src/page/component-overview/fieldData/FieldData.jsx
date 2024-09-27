import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import Create from "../../../asset/images/create.jpg";
import { Link } from "react-router-dom";
import toast from "react-hot-toast";

export default function FieldData() {
  const [continent, setContinent] = useState([]);
  const [selectedContinentId, setSelectedContinentId] = useState(null);
  const [countries, setCountries] = useState([]);

  const handleChange = (selectedOption) => {
    if (selectedOption) {
      setSelectedContinentId(selectedOption.value);
    }
  };

  const handleChangeCountry = (selectedOption) => {
    console.log(selectedOption.value);
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          `https://agriwaveback.vercel.app/countries/${selectedContinentId}`
        );
        if (!response.ok) {
          throw new Error("Error fetching data");
        }
        const result = await response.json();
        setCountries(result);
      } catch (error) {
        // setError(error.message);
      } finally {
        // setLoading(false);
      }
    };

    fetchData();
  }, [selectedContinentId]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://agriwaveback.vercel.app/continent"
        );
        if (!response.ok) {
          throw new Error("Error fetching data");
        }
        const result = await response.json();
        setContinent(result);
      } catch (error) {
        // setError(error.message);
      } finally {
        // setLoading(false);
      }
    };

    fetchData();
  }, []);

  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm({
    defaultValues: { continent: selectedContinentId },
  });

  const handleCreate = (data) => {
    fetch("https://agriwaveback.vercel.app/fielddata", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.acknowledged) {
          toast.success("Data Added");
        }
      })
      .catch((error) => {});
  };

  return (
    <div>
      <div className="hero h-[100vh] my-2 mb-5">
        <div className="hero-overlay max-h-full bg-opacity-75 animate__animated animate__fadeInRight"></div>
        <div className="text-center text-neutral-content lg:w-[35%] animate__animated animate__fadeInLeft">
          <div className="w-full">
            <h2 className="card-title text-warning justify-center text-3xl font-bold">
              Create Account
            </h2>
            <div className="card w-full shadow-2xl">
              <form className="card-body" onSubmit={handleSubmit(handleCreate)}>
                <div className="mb-4">
                  <label className="label">
                    <span className="label-text">Select Continent</span>
                  </label>
                  <select
                    className="select select-secondary w-full rounded-sm"
                    {...register("continent", {
                      required: "Continent is required",
                    })}
                    onChange={(e) => handleChange(e.target)}
                  >
                    <option disabled selected>
                      Pick your continent
                    </option>
                    {continent?.map((con) => (
                      <option key={con.id} value={con.id}>
                        {con.name}
                      </option>
                    ))}
                  </select>
                  {errors.continent && (
                    <p className="text-red-900 font-bold">
                      {errors.continent?.message}
                    </p>
                  )}
                </div>
                {countries.length > 0 && (
                  <div className="mb-4">
                    <label className="label">
                      <span className="label-text">Select Country</span>
                    </label>
                    <select
                      className="select select-secondary w-full rounded-sm"
                      {...register("country", {
                        required: "Country is required",
                      })}
                      onChange={(e) => handleChangeCountry(e.target)}
                    >
                      <option disabled selected>
                        Pick your country
                      </option>
                      {countries?.map((country) => (
                        <option key={country.id} value={country.id}>
                          {country.name}
                        </option>
                      ))}
                    </select>
                    {errors.country && (
                      <p className="text-red-900 font-bold">
                        {errors.country?.message}
                      </p>
                    )}
                  </div>
                )}

                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Soil element</span>
                  </label>
                  <textarea
                    type="text"
                    placeholder="Soil element"
                    className="textarea textarea-secondary rounded-sm"
                    {...register("soil", {
                      required: false,
                    })}
                  />
                </div>

                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Temperature</span>
                  </label>
                  <textarea
                    type="text"
                    placeholder="Temperature"
                    className="textarea textarea-secondary rounded-sm"
                    {...register("temperature", {
                      required: false,
                    })}
                  />
                </div>

                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Humidity</span>
                  </label>
                  <textarea
                    type="text"
                    placeholder="Humidity"
                    className="textarea textarea-secondary rounded-sm"
                    {...register("humidity", {
                      required: false,
                    })}
                  />
                </div>

                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Land structure</span>
                  </label>
                  <textarea
                    type="text"
                    placeholder="Land structure"
                    className="textarea textarea-secondary rounded-sm"
                    {...register("land", {
                      required: false,
                    })}
                  />
                </div>

                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Water condition</span>
                  </label>
                  <textarea
                    type="text"
                    placeholder="Water condition"
                    className="textarea textarea-secondary rounded-sm"
                    {...register("water", {
                      required: false,
                    })}
                  />
                </div>

                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Crop production</span>
                  </label>
                  <textarea
                    type="text"
                    placeholder="Crop production"
                    className="textarea textarea-secondary rounded-sm"
                    {...register("crop", {
                      required: false,
                    })}
                  />
                </div>
                <div className="form-control mt-6">
                  <button type="submit" className="btn btn-primary rounded-sm">
                    Create Your Data
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
