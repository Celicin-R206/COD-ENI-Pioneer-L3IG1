/** @format */
"use client";
import React, { useEffect, useState } from "react";
import "./style.css";
import Image from "next/image";

import { Card } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useProfile } from "@/lib/swr/profile";
import { jsx } from "react/jsx-runtime";

const Profile = () => {
  const [account, setAccount] = useState();
  useEffect(() => {
    const storedAccount = localStorage.getItem("user");
    if (storedAccount) {
      const parsedData = JSON.parse(storedAccount);
      setAccount(parsedData);
    }
  }, []);

  const { profile } = useProfile(account?.data?.id_user);

  console.log(profile?.data);
  return (
    <div className="profile">
      <div className="left">
        <div className="t">
          <Image
            src={"/assets/images/back.svg"}
            width={50}
            height={50}
            alt="back"
          />
          <strong>Retour</strong>
        </div>
        <div className="b">
          <div>
            <Image
              src={"/assets/images/add_img.svg"}
              width={70}
              height={70}
              alt="back"
            />
          </div>
          <p>Importer votre photo 4x4 ici taille : 3M, jpg, png</p>
        </div>
      </div>
      <div className="right">
        <h1>Votre Profile</h1>
        <Tabs defaultValue="details" className="tab w-[55%] mt-4">
          <TabsList className=" grid-cols-2 w-fit">
            <TabsTrigger value="details">Détails</TabsTrigger>
            <TabsTrigger value="histoiques">histoiques</TabsTrigger>
          </TabsList>
          <TabsContent value="details" className="content_tab">
            <Card className="card_">
              <div className="l_c">
                <h2>Détails Personnel</h2>
              </div>
              <div className="w-full">
                {/* Nom */}
                <div className="r_c flex justify-between">
                  <div className="b_ flex flex-col gap-1">
                    <label htmlFor="nom">Nom</label>
                    <input
                      className="p-1 outline-[#004491]"
                      type="text"
                      name="nom"
                      id="nom"
                      value={profile?.data?.nom || ""}
                    />
                  </div>
                  <label htmlFor="nom">
                    <Image
                      src={"/assets/images/edit_profile.svg"}
                      width={15}
                      height={15}
                      alt="edit_profile"
                    />
                  </label>
                </div>

                {/* Prenom */}
                <div className="r_c flex justify-between">
                  <div className="b_ flex flex-col gap-1">
                    <label htmlFor="prenom">Prenom</label>
                    <input
                      className="p-1 outline-[#004491]"
                      type="text"
                      name="prenom"
                      id="prenom"
                      value={profile?.data?.prenom || ""}
                    />
                  </div>
                  <label htmlFor="prenom">
                    <Image
                      src={"/assets/images/edit_profile.svg"}
                      width={15}
                      height={15}
                      alt="edit_profile"
                    />
                  </label>
                </div>

                {/* Date de Naissance */}
                <div className="r_c flex justify-between">
                  <div className="b_ flex flex-col gap-1">
                    <label htmlFor="date_naissance">Date de Naissance</label>
                    <input
                      className="p-1 outline-[#004491]"
                      type="text"
                      name="date_naissance"
                      id="date_naissance"
                      value={profile?.data?.date_naissance || ""}
                    />
                  </div>
                  <label htmlFor="date_naissance">
                    <Image
                      src={"/assets/images/edit_profile.svg"}
                      width={15}
                      height={15}
                      alt="edit_profile"
                    />
                  </label>
                </div>

                {/* Lieu de Naissance */}
                <div className="r_c flex justify-between">
                  <div className="b_ flex flex-col gap-1">
                    <label htmlFor="lieu_naissance">Lieu de Naissance</label>
                    <input
                      className="p-1 outline-[#004491]"
                      type="text"
                      name="lieu_naissance"
                      id="lieu_naissance"
                      value={profile?.data?.lieu_naissance || ""}
                    />
                  </div>
                  <label htmlFor="lieu_naissance">
                    <Image
                      src={"/assets/images/edit_profile.svg"}
                      width={15}
                      height={15}
                      alt="edit_profile"
                    />
                  </label>
                </div>

                {/* Adresse */}
                <div className="r_c flex justify-between">
                  <div className="b_ flex flex-col gap-1">
                    <label htmlFor="adresse">Adresse</label>
                    <input
                      className="p-1 outline-[#004491]"
                      type="text"
                      name="adresse"
                      id="adresse"
                      value={profile?.data?.adresse || ""}
                    />
                  </div>
                  <label htmlFor="adresse">
                    <Image
                      src={"/assets/images/edit_profile.svg"}
                      width={15}
                      height={15}
                      alt="edit_profile"
                    />
                  </label>
                </div>

                {/* CIN */}
                <div className="r_c flex justify-between">
                  <div className="b_ flex flex-col gap-1">
                    <label htmlFor="cin">CIN</label>
                    <input
                      className="p-1 outline-[#004491]"
                      type="text"
                      name="cin"
                      id="cin"
                      value={profile?.data?.cin || ""}
                    />
                  </div>
                  <label htmlFor="cin">
                    <Image
                      src={"/assets/images/edit_profile.svg"}
                      width={15}
                      height={15}
                      alt="edit_profile"
                    />
                  </label>
                </div>

                {/* Code Copie */}
                <div className="r_c flex justify-between">
                  <div className="b_ flex flex-col gap-1">
                    <label htmlFor="code_copie">Code Copie</label>
                    <input
                      className="p-1 outline-[#004491]"
                      type="text"
                      name="code_copie"
                      id="code_copie"
                      value={profile?.data?.code_copie || ""}
                    />
                  </div>
                  <label htmlFor="code_copie">
                    <Image
                      src={"/assets/images/edit_profile.svg"}
                      width={15}
                      height={15}
                      alt="edit_profile"
                    />
                  </label>
                </div>

                {/* Nom Conjoint */}
                <div className="r_c flex justify-between">
                  <div className="b_ flex flex-col gap-1">
                    <label htmlFor="nom_conjoint">Nom du Conjoint</label>
                    <input
                      className="p-1 outline-[#004491]"
                      type="text"
                      name="nom_conjoint"
                      id="nom_conjoint"
                      value={profile?.data?.nom_conjoint || ""}
                    />
                  </div>
                  <label htmlFor="nom_conjoint">
                    <Image
                      src={"/assets/images/edit_profile.svg"}
                      width={15}
                      height={15}
                      alt="edit_profile"
                    />
                  </label>
                </div>

                {/* Prenom Conjoint */}
                <div className="r_c flex justify-between">
                  <div className="b_ flex flex-col gap-1">
                    <label htmlFor="prenom_conjoint">Prénom du Conjoint</label>
                    <input
                      className="p-1 outline-[#004491]"
                      type="text"
                      name="prenom_conjoint"
                      id="prenom_conjoint"
                      value={profile?.data?.prenom_conjoint || ""}
                    />
                  </div>
                  <label htmlFor="prenom_conjoint">
                    <Image
                      src={"/assets/images/edit_profile.svg"}
                      width={15}
                      height={15}
                      alt="edit_profile"
                    />
                  </label>
                </div>

                {/* Nom Mère */}
                <div className="r_c flex justify-between">
                  <div className="b_ flex flex-col gap-1">
                    <label htmlFor="nom_mere">Nom de la Mère</label>
                    <input
                      className="p-1 outline-[#004491]"
                      type="text"
                      name="nom_mere"
                      id="nom_mere"
                      value={profile?.data?.nom_mere || ""}
                    />
                  </div>
                  <label htmlFor="nom_mere">
                    <Image
                      src={"/assets/images/edit_profile.svg"}
                      width={15}
                      height={15}
                      alt="edit_profile"
                    />
                  </label>
                </div>

                {/* Prénom Mère */}
                <div className="r_c flex justify-between">
                  <div className="b_ flex flex-col gap-1">
                    <label htmlFor="prenom_mere">Prénom de la Mère</label>
                    <input
                      className="p-1 outline-[#004491]"
                      type="text"
                      name="prenom_mere"
                      id="prenom_mere"
                      value={profile?.data?.prenom_mere || ""}
                    />
                  </div>
                  <label htmlFor="prenom_mere">
                    <Image
                      src={"/assets/images/edit_profile.svg"}
                      width={15}
                      height={15}
                      alt="edit_profile"
                    />
                  </label>
                </div>

                {/* Nom Père */}
                <div className="r_c flex justify-between">
                  <div className="b_ flex flex-col gap-1">
                    <label htmlFor="nom_pere">Nom du Père</label>
                    <input
                      className="p-1 outline-[#004491]"
                      type="text"
                      name="nom_pere"
                      id="nom_pere"
                      value={profile?.data?.nom_pere || ""}
                    />
                  </div>
                  <label htmlFor="nom_pere">
                    <Image
                      src={"/assets/images/edit_profile.svg"}
                      width={15}
                      height={15}
                      alt="edit_profile"
                    />
                  </label>
                </div>

                {/* Prénom Père */}
                <div className="r_c flex justify-between">
                  <div className="b_ flex flex-col gap-1">
                    <label htmlFor="prenom_pere">Prénom du Père</label>
                    <input
                      className="p-1 outline-[#004491]"
                      type="text"
                      name="prenom_pere"
                      id="prenom_pere"
                      value={profile?.data?.prenom_pere || ""}
                    />
                  </div>
                  <label htmlFor="prenom_pere">
                    <Image
                      src={"/assets/images/edit_profile.svg"}
                      width={15}
                      height={15}
                      alt="edit_profile"
                    />
                  </label>
                </div>

                {/* Profession */}
                <div className="r_c flex justify-between">
                  <div className="b_ flex flex-col gap-1">
                    <label htmlFor="profession">Profession</label>
                    <input
                      className="p-1 outline-[#004491]"
                      type="text"
                      name="profession"
                      id="profession"
                      value={profile?.data?.profession || ""}
                    />
                  </div>
                  <label htmlFor="profession">
                    <Image
                      src={"/assets/images/edit_profile.svg"}
                      width={15}
                      height={15}
                      alt="edit_profile"
                    />
                  </label>
                </div>

                {/* Statut */}
                <div className="r_c flex justify-between">
                  <div className="b_ flex flex-col gap-1">
                    <label htmlFor="statut">Statut</label>
                    <input
                      className="p-1 outline-[#004491]"
                      type="text"
                      name="statut"
                      id="statut"
                      value={profile?.data?.statut || ""}
                    />
                  </div>
                  <label htmlFor="statut">
                    <Image
                      src={"/assets/images/edit_profile.svg"}
                      width={15}
                      height={15}
                      alt="edit_profile"
                    />
                  </label>
                </div>
              </div>
            </Card>
          </TabsContent>
          <TabsContent value="histoiques" className="content_tab">
            <Card className="card_">
              <div className="l_c">
                <h2>Détails Personnel</h2>
              </div>
              <div className="w-full">
                <div className="r_c flex justify-between">
                  <div className="flex flex-col gap-1">
                    <label htmlFor="nom">Nom</label>
                    <input
                      className="p-1 outline-[#004491]"
                      type="text"
                      name="nom"
                      id="nom"
                    />
                  </div>
                  <label htmlFor="nom">
                    <Image
                      src={"/assets/images/edit_profile.svg"}
                      width={15}
                      height={15}
                      alt="edit_profile"
                    />
                  </label>
                </div>
              </div>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
      <div className="fichier p-4">
        <h1>Carte d'idendité Nationale</h1>
        <div className="c">
          <div className="top_"></div>
          <div className="bottom_"></div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
