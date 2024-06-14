/** @format */

import React from "react";
import "./style.css";
import Image from "next/image";

import { Card } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const Profile = () => {
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
        <Tabs defaultValue="details" className="tab w-full mt-4">
          <TabsList className=" grid-cols-2 w-fit">
            <TabsTrigger value="details">Détails</TabsTrigger>
            <TabsTrigger value="fichier">Fichier</TabsTrigger>
            <TabsTrigger value="histoiques">histoiques</TabsTrigger>
          </TabsList>
          <TabsContent value="details" className="content_tab">
            <Card className="card_">
              <div className="l_c">
                <h2>Détails Personnel</h2>
              </div>
              <div className=" w-full">
                <div className="r_c flex justify-between">
                  <div className=" b_ flex flex-col gap-1">
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
          <TabsContent value="fichier" className="content_tab">
            <Card className="card_">
              <div className="l_c">
                <h2>Documents</h2>
              </div>
              <div className="w-full">
                <div className="r_c flex justify-between flex-col gap-4">
                  <p>Carte d’Identité Nationale</p>
                  <div className="cin flex items-center gap-4">
                    <div>
                      <Image
                        src={"/assets/images/add_img.svg"}
                        width={70}
                        height={70}
                        alt="back"
                      />
                    </div>
                    <div>
                      <Image
                        src={"/assets/images/add_img.svg"}
                        width={70}
                        height={70}
                        alt="back"
                      />
                    </div>
                  </div>
                  <p>Copie d'acte d'état civil</p>
                  <div className="copie flex items-center gap-4">
                    <div>
                      <Image
                        src={"/assets/images/add_img.svg"}
                        width={70}
                        height={70}
                        alt="back"
                      />
                    </div>
                  </div>
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
    </div>
  );
};

export default Profile;
