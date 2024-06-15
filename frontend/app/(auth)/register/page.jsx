/** @format */
"use client";

import React, { useEffect, useState } from "react";
import "./style.css";
import Image from "next/image";

import { format } from "date-fns";
import { Calendar as CalendarIcon } from "lucide-react";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { useForm } from "react-hook-form";

import { useRegister } from "@/lib/swr/auth";

const register = () => {
  const { signup } = useRegister();

  const {
    register,
    handleSubmit,
    reset,
    formState: { isSubmitting, errors },
    watch,
  } = useForm();
  const [date, setDate] = useState();
  const cin_copie_select = watch("cin_copie_select", "");

  const onSubmit = async (data) => {
    console.log(data);
    var cin = data.cin_copie;
    var code_copie = data.code_copie;
    let nom = data.name;
    let prenom = data.lname;
    let date_naissance = date;
    let lieu_naissance = data.lieuNaiss;
    let adresse = data.address;
    let password = data.password;
    try {
      const response = await signup(
        nom,
        prenom,
        date_naissance,
        lieu_naissance,
        adresse,
        cin,
        code_copie,
        password
      );
      console.log(response);
    } catch (error) {
      console.error("Failed to register:", error);
    }
    reset();
  };

  useEffect(() => {
    setDate(new Date());
  }, []);
  return (
    <div className="login">
      <div className="content_login w-fit flex flex-col gap-[1rem] items-center">
        <div className="logo">
          <Image
            src="/assets/images/logo.svg"
            width={100}
            height={100}
            alt="logo"
          />
        </div>
        <h1>S'inscrire à CitizenConnect</h1>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="form-groupe">
            <span>
              <label htmlFor="name">Nom</label>
              <input
                type="text"
                name="name"
                id="name"
                {...register("name", { required: "entrez votre nom!" })}
              />
            </span>
            <span>
              <label htmlFor="lname">Prénoms</label>
              <input
                type="text"
                name="lname"
                id="lname"
                {...register("lname")}
              />
            </span>
          </div>
          <div className="form-groupe">
            <span>
              <label htmlFor="lieuNaiss">Lieu de naissance</label>
              <input
                type="text"
                name="lieuNaiss"
                id="lieuNaiss"
                {...register("lieuNaiss", {
                  required: "Entrez votre lieu de naissance!",
                })}
              />
            </span>
            <span>
              <label htmlFor="lname">Date de naissance</label>
              <Popover>
                <PopoverTrigger asChild>
                  <Button
                    variant={"outline"}
                    className={cn(
                      "w-[280px] justify-start text-left font-normal pickdate-btn",
                      !date && "text-muted-foreground"
                    )}>
                    <CalendarIcon className="mr-2 h-4 w-4" />
                    {date ? format(date, "PPP") : <span>Prend une date</span>}
                  </Button>
                </PopoverTrigger>
                <PopoverContent className="w-auto p-0">
                  <Calendar
                    mode="single"
                    selected={date}
                    onSelect={setDate}
                    initialFocus
                  />
                </PopoverContent>
              </Popover>
            </span>
          </div>
          <span>
            <label htmlFor="address">Adresse</label>
            <input
              type="text"
              name="address"
              id="address"
              {...register("address", { required: "Entrez votre addresse!" })}
            />
          </span>
          <div className="form-groupe">
            <span className="password">
              <label htmlFor="password">Mot de passe</label>
              <input
                type="password"
                name="password"
                id="password"
                {...register("password", { required: "Votre mot de passe!" })}
              />
            </span>
            <span className="password_confirm">
              <label htmlFor="password_confirm">Confirmer mot de passe</label>
              <input
                type="password"
                name="password_confirm"
                id="password_confirm"
                {...register("password_confirm", {
                  required: "Entrez pour confirmer mot de passe!",
                })}
              />
            </span>
          </div>
          <span className="password">
            <label htmlFor="password">CIN ou copie</label>
            <div className="flex cin_copie">
              <select name="" id="" {...register("cin_copie_select")}>
                <option value="CIN">CIN</option>
                <option value="copie">copie</option>
              </select>
              <input
                type="cin_number"
                name="cin_number"
                id="cin_number"
                {...register("cin_copie", { required: "Ce champest requis!" })}
              />
            </div>
          </span>
          <span>
            <button type="submit">Créer</button>
          </span>
        </form>
        <div className="bottom_login">
          <p>Sign in with a passkey</p>
          <p>New to Pioneer ? Create an account</p>
        </div>
      </div>
    </div>
  );
};

export default register;
